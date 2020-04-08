/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createApp} from './App';
import {enableScreens} from 'react-native-screens';

enableScreens();

AppRegistry.registerComponent(appName, () => createApp());
