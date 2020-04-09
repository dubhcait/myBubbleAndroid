import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  InitialScreen,
  GameIntro,
  KeepYourDistanceRule,
  GroupsRule,
  StayHoneRule,
  WeeklyChallenge,
} from './screens';
import AsyncStorage from '@react-native-community/async-storage';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6497bf',
    background: '#ffffff',
    card: '#5a5a5a',
    text: '#01016f',
    accent: '#9fcbee',
    ripple: '#d8031c',
  },
};

//primary: blue, card: grey, text: darkblue, accent: lightblue, ripple: red

const Root = createStackNavigator();
const Stack = createStackNavigator();

{
  //   const hasIntroBeenSeen = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('introSeen');
  //       if (value !== null) {
  //         return true;
  //       }
  //       return false;
  //     } catch (e) {
  //       return false;
  //     }
  //   };
  //   const [showIntro, setShowIntro] = useState(hasIntroBeenSeen() ? true : false);
  //   const [showGameInstructions, setGameInstructions] = useState(false);
  //   const [modalMesg, setModalMesg] = useState(false);
  //   const setIntroSeenInStorage = async () => {
  //     try {
  //       await AsyncStorage.setItem('introSeen', 'true');
  //     } catch (e) {
  //       // saving error
  //     }
  //   };
  //   const introAllSeen = () => {
  //     setShowIntro(false);
  //     setIntroSeenInStorage();
  //   };
}

export function createApp() {
  return function App() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={MyTheme.colors.background}
        />
        <NavigationContainer>
          <Root.Navigator headerMode="none">
            <Root.Screen name="Root" component={MainStack} />
          </Root.Navigator>
        </NavigationContainer>
      </>
    );
  };
}

const MainStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={GameIntro}
          options={{
            headerTransparent: true,
            headerTitleStyle: {color: 'transparent'},
          }}
        />
        <Stack.Screen name="WeeklyChallenge" component={WeeklyChallenge} />
      </Stack.Navigator>
    </>
  );
};
