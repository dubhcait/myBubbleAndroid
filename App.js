import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {handleCurrentlocation} from './util/geoLocation';

import {
  GameIntro,
  GroupsRule,
  InitialScreen,
  KeepYourDistanceRule,
  StayHomeRule,
  WeeklyChallenge,
} from './screens';

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
    const [homeLocation, setHomeLocation] = useState({});
    const [currentLocation, setCurrentLocation] = useState({});

    useEffect(() => {
      handleCurrentlocation(setCurrentLocation);
    }, []);

    useEffect(() => {
      console.log(currentLocation);
    }, [currentLocation]);
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
            headerTintColor: '#01016f',
            headerTransparent: true,
            headerTitleStyle: {color: 'transparent'},
          }}
        />
        <Stack.Screen
          name="Rules"
          component={KeepYourDistanceRule}
          options={{
            headerTintColor: '#01016f',
            headerTransparent: true,
            headerTitleStyle: {color: 'transparent'},
          }}
        />
        <Stack.Screen
          name="Groups"
          component={GroupsRule}
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
        />
        <Stack.Screen
          name="StayHome"
          component={StayHomeRule}
          options={{
            headerTransparent: true,
            headerTintColor: '#01016f',
            headerTitleStyle: {color: 'transparent'},
          }}
        />

        <Stack.Screen
          name="WeeklyChallenge"
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={WeeklyChallenge}
        />
      </Stack.Navigator>
    </>
  );
};
