import React, {useEffect, useState} from 'react';
import {
  AppState,
  Button,
  Dimensions,
  FlatList,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import {Heading, Touchable} from '../components';

const window = Dimensions.get('window');

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const BluetoothPg = ({navigation}) => {
  const [scanning, setScanning] = useState(false);
  const [peripherals, setPeripherals] = useState(new Map());
  const [appState, setAppState] = useState('');

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );

    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }

    return () => {
      // handlerDiscover.remove();
      // handlerStop.remove();
      // handlerDisconnect.remove();
      // handlerUpdate.remove();
    };
  }, []);

  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      BleManager.getConnectedPeripherals([]).then(peripheralsArray => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    setAppState(nextAppState);
  };

  const handleDisconnectedPeripheral = data => {
    let peripheralsNew = peripherals;
    let peripheral = peripheralsNew.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripheralsNew.set(peripheral.id, peripheral);
      setPeripherals(peripheralsNew);
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setScanning(false);
  };

  const startScan = () => {
    if (!scanning) {
      setScanning(true);
      // BleManager.scan([], 5, true).then(results => {
      //   console.log('Scanning...');

      // });
    }
  };

  const retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      var peripheralsNew = peripherals;
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripheralsNew.set(peripheral.id, peripheral);
        setPeripherals(peripheralsNew);
      }
    });
  };

  const handleDiscoverPeripheral = peripheral => {
    var peripheralsNew = peripherals;
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripheralsNew.set(peripheral.id, peripheral);
    peripherals(peripheralsNew);
  };

  const test = peripheral => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let peripheralsNew = peripherals;
            let p = peripheralsNew.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripheralsNew.set(peripheral.id, p);
              setPeripherals(peripheralsNew);
            }
            console.log('Connected to ' + peripheral.id);

            setTimeout(() => {
              /* read current RSSI value
            BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
              console.log('Retrieved peripheral services', peripheralData);
              BleManager.readRSSI(peripheral.id).then((rssi) => {
                console.log('Retrieved actual RSSI value', rssi);
              });
            });*/

              BleManager.retrieveServices(peripheral.id).then(
                peripheralInfo => {
                  console.log(peripheralInfo);
                  var service = '13333333-3333-3333-3333-333333333337';
                  var bakeCharacteristic =
                    '13333333-3333-3333-3333-333333330003';
                  var crustCharacteristic =
                    '13333333-3333-3333-3333-333333330001';

                  setTimeout(() => {
                    BleManager.startNotification(
                      peripheral.id,
                      service,
                      bakeCharacteristic,
                    )
                      .then(() => {
                        console.log('Started notification on ' + peripheral.id);
                        setTimeout(() => {
                          BleManager.write(
                            peripheral.id,
                            service,
                            crustCharacteristic,
                            [0],
                          ).then(() => {
                            BleManager.write(
                              peripheral.id,
                              service,
                              bakeCharacteristic,
                              [1, 95],
                            ).then(() => {
                              console.log('Done');
                            });
                          });
                        }, 500);
                      })
                      .catch(error => {
                        console.log('Notification error', error);
                      });
                  }, 200);
                },
              );
            }, 900);
          })
          .catch(error => {
            console.log('Connection error', error);
          });
      }
    }
  };

  const renderItem = item => {
    const color = item.connected ? 'green' : '#fff';
    return (
      <TouchableHighlight onPress={() => test(item)}>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#333333',
              padding: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: '#333333',
              padding: 2,
            }}>
            RSSI: {item.rssi}
          </Text>
          <Text
            style={{
              fontSize: 8,
              textAlign: 'center',
              color: '#333333',
              padding: 2,
              paddingBottom: 20,
            }}>
            {item.id}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  const list = Array.from(peripherals.values());
  const btnScanTitle = 'Scan Bluetooth (' + (scanning ? 'on' : 'off') + ')';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{margin: 10}}>
          <Button title={btnScanTitle} onPress={() => startScan()} />
        </View>

        <View style={{margin: 10}}>
          <Button
            title="Retrieve connected peripherals"
            onPress={() => retrieveConnected()}
          />
        </View>

        <ScrollView style={styles.scroll}>
          {list.length == 0 && (
            <View style={{flex: 1, margin: 20}}>
              <Text style={{textAlign: 'center'}}>No peripherals</Text>
            </View>
          )}
          <FlatList
            data={list}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
      <Touchable marginTop={60} onPress={() => navigation.navigate('Home')}>
        <Heading style={styles.buttonHeading}>Done!</Heading>
      </Touchable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: window.width,
    height: window.height,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  row: {
    margin: 10,
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default BluetoothPg;
