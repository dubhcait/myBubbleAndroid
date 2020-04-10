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
  StayHomeRule,
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

// const App: () => React$Node = () => {
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

//   return (
//     <>
//       <NativeRouter>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <ScrollView
//             contentInsetAdjustmentBehavior="automatic"
//             style={styles.scrollView}>
//             {global.HermesInternal == null ? null : (
//               <View style={styles.engine}>
//                 <Text style={styles.footer}>Engine: Hermes</Text>
//               </View>
//             )}
//             <View style={styles.body}>
//               <Route path="/game" render={() => <GameIntro />} />

//               <Route path="/distance" component={KeepYourDistanceRule} />
//               <Route path="/groups" component={GroupsRule} />
//               <Route path="/staysthome" component={StayHoneRule} />
//               {showIntro && <Route path="/" render={() => <InitialScreen />} />}
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </NativeRouter>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

{
  /* <Route path="/distance" component={KeepYourDistanceRule}/>
<Route path="/groups" component={GroupsRule}/>
<Route path="/staysthome" component={StayHoneRule}/>
{showIntro && (
<Route path="/" render={() => ( <InitialScreen introPartialSeen={introPartialSeen} />)}/>
)}

{showGameInstructions && (
<Route path="/" render={() => ( <GameIntro introAllSeen={introAllSeen} />)}/>
)}

<Route path="/" render={() => ( 
<MainScreen lifeCount={lifeCount} />)}/>
 */
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
      </Stack.Navigator>
    </>
  );
};
