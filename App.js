import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {
  Exiting,
  GameIntro,
  GroupsRule,
  InitialScreen,
  KeepYourDistanceRule,
  MainScreen,
  ReEntering,
  SetHome,
  StayHomeRule,
  WeeklyChallenge,
  WellDone,
} from './screens';
import {ContextProvider} from './util/context';

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

export function createApp() {
  return function App() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={MyTheme.colors.background}
        />

        <NavigationContainer>
          <ContextProvider>
            <Root.Navigator headerMode="none">
              <Root.Screen name="Root" component={MainStack} />
            </Root.Navigator>
          </ContextProvider>
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
          name="Start"
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
        <Stack.Screen
          name="Home"
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={MainScreen}
        />
        <Stack.Screen
          name="Congratulations"
          options={{
            headerTransparent: true,
            headerTintColor: '#01016f',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={WellDone}
        />

        <Stack.Screen
          name="Exiting"
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={Exiting}
        />
        <Stack.Screen
          name="ReEntering"
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={ReEntering}
        />
        <Stack.Screen
          name="SetHome"
          options={{
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {color: 'transparent'},
          }}
          component={SetHome}
        />
      </Stack.Navigator>
    </>
  );
};
