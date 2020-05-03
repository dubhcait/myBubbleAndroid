import React, {Component} from 'react';
import {
  AppState,
  Dimensions,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import BleManager from 'react-native-ble-manager';

// Used for Android AND iOS Bluetooth permissions
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import {Heading, Touchable, Underlay} from '../components';

const window = Dimensions.get('window');

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class BluetoothPg extends Component {
  constructor() {
    super();

    this.state = {
      scanning: false,
      peripherals: new Map(),
      appState: '',
    };

    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
    this.handleStopScan = this.handleStopScan.bind(this);
/* CHRIS_TEST_START
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(
      this,
    );
    this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(
      this,
    );
CHRIS_TEST_END */
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BleManager.start({showAlert: false});

    this.handlerDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
    this.handlerStop = bleManagerEmitter.addListener(
      'BleManagerStopScan',
      this.handleStopScan,
    );

/* CHRIS_TEST_START
    this.handlerDisconnect = bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );
    this.handlerUpdate = bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );
CHRIS_TEST_END */

// Android (only) Bluetooth permission check & request using PermissionsAndroid from react-native
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

// BETTER: Android (eventually) AND iOS Bluetooth permission check & request using react-native-permissions

    // iOS: Check if Bluetooth permission is already granted, but only for iOS version > 12
    if (Platform.OS === "ios" && parseInt(Platform.Version, 10) > 12) {
        var permission_check = check(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
    
        // If Bluetooth permission is not already granted, ask the user to grant it
      if (permission_check !== RESULTS.GRANTED) {
          request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL).then(result => {
        
          // Log the result
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                  'BLUETOOTH_PERIPHERAL not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'BLUETOOTH_PERIPHERAL permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.GRANTED:
              console.log('BLUETOOTH_PERIPHERAL permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log('BLUETOOTH_PERIPHERAL permission is denied and no longer requestable');
              break;
          }
          })
      }
    
    } else {
        console.warn("BLUETOOTH_PERIPHERAL permission not required for this version of iOS.")
        // TODO: Check a "location" permission instead?
    }

    // TODO: Android: Check/request Android Bluetooth permissions using react-native-permissions...
  }

  handleAppStateChange(nextAppState) {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      BleManager.getConnectedPeripherals([]).then(peripheralsArray => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    this.setState({appState: nextAppState});
  }

  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
/* CHRIS_TEST_START
    this.handlerDisconnect.remove();
    this.handlerUpdate.remove();
CHRIS_TEST_END */
  }

/* CHRIS_TEST_START
  handleDisconnectedPeripheral(data) {
    let peripherals = this.state.peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({peripherals});
    }
    console.log('Disconnected from ' + data.peripheral);
  }
CHRIS_TEST_END */

/* CHRIS_TEST_START
  handleUpdateValueForCharacteristic(data) {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  }
CHRIS_TEST_END */

  handleStopScan() {
    console.log('Scan is stopped');
    this.setState({scanning: false});
  }

  startScan() {
    if (!this.state.scanning) {
      //this.setState({peripherals: new Map()});
      BleManager.scan([], 3, true).then(results => {
        console.log('Scanning...');
        this.setState({scanning: true});
      });
    }
  }
/* CHRIS_TEST_START
  retrieveConnected() {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      var peripherals = this.state.peripherals;
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        this.setState({peripherals});
      }
    });
  }
CHRIS_TEST_END */

  handleDiscoverPeripheral(peripheral) {
    var peripherals = this.state.peripherals;
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    this.setState({peripherals});
  }

/* CHRIS_TEST_START
  test(peripheral) {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let peripherals = this.state.peripherals;
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              this.setState({peripherals});
            }
            console.log('Connected to ' + peripheral.id);

            setTimeout(() => {
CHRIS_TEST_END */

              /* read current RSSI value
            BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
              console.log('Retrieved peripheral services', peripheralData);
              BleManager.readRSSI(peripheral.id).then((rssi) => {
                console.log('Retrieved actual RSSI value', rssi);
              });
            });*/

              // Test using bleno's pizza example
              // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
/* CHRIS_TEST_START
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
                            console.log('Writed NORMAL crust');
                            BleManager.write(
                              peripheral.id,
                              service,
                              bakeCharacteristic,
                              [1, 95],
                            ).then(() => {
                              console.log(
                                'Writed 351 temperature, the pizza should be BAKED',
                              );
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
  }
CHRIS_TEST_END */

  renderItem(item) {
    const color = item.connected ? 'green' : '#fff';
    return (
      <TouchableHighlight onPress={() => this.test(item)}>
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
  }

  render() {
    const list = Array.from(this.state.peripherals.values());
    const btnScanTitle = 'Scan';

    return (
      <SafeAreaView style={styles.container}>
        <Underlay bubbles={true}>
          {this.state.scanning ? (
            <Heading style={styles.top}>Scanning for signs of Life </Heading>
          ) : (
            <View style={styles.top}>
              <Touchable borderColor="#A061BE" onPress={() => this.startScan()}>
                <Heading color="#A061BE" style={styles.buttonHeading}>
                  Start scanning
                </Heading>
              </Touchable>
            </View>
          )}

          <Heading style={styles.numberDetected}>{list.length}</Heading>
          <Heading>people detected!</Heading>
          <Touchable
            borderColor="#A061BE"
            backgroundColor="#A061BE"
            color="#ffffff"
            marginTop={60}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Heading color="#ffffff" style={styles.buttonHeading}>
              Steering clear!
            </Heading>
          </Touchable>
        </Underlay>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  top: {marginVertical: 60},
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  },
  numberDetected: {
    height: 188,
    width: 349,
    fontSize: 150,
    letterSpacing: 0,
    lineHeight: 188,
  },
});
