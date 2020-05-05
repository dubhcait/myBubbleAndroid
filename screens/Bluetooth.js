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

    // Android Bluetooth permission check & request using PermissionsAndroid from react-native
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
  }

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

  handleDiscoverPeripheral(peripheral) {
    var peripherals = this.state.peripherals;
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    this.setState({peripherals});
  }

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
