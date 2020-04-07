import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { InitialScreen, GameIntro, KeepYourDistanceRule, GroupsRule, StayHoneRule } from "./views"
import { NativeRouter, Route } from "react-router-native";

const App: () => React$Node = () => {
  // const hasIntroBeenSeen = window.localStorage.getItem("introSeen");
  const [showIntro, setShowIntro] = useState(true);
  const [showGameInstructions, setGameInstructions] = useState(false);

  const [modalMesg, setModalMesg] = useState(false);
  const [lifeCount, setLifeCount] = useState([1, 1, 1]);

  const lostLife = () =>
    setLifeCount(lifeCount.length > 0 ? [...lifeCount].pop() : lifeCount);

  const gainLife = () => setLifeCount([...lifeCount].push(1));

  const [geoLocation, setGeoLocation] = useState("");

  useEffect(() => {
    // getLocation(setGeoLocation);
  }, []);

  useEffect(() => {
    console.log("location", geoLocation);
  }, [geoLocation]);

  const introPartialSeen = () => {
    setShowIntro(false);
    setGameInstructions(true);
  };

  const introAllSeen = () => {
    setGameInstructions(false);
    // window.localStorage.setItem("introSeen", "true");
  };

  const displayModalMesg = () => { };
  return (
    <>
      <NativeRouter><StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              {showIntro && (
                <Route path="/" render={() => (<InitialScreen introPartialSeen={introPartialSeen} />)} />
              )}

              {showGameInstructions && (
                <Route path="/" render={() => (<GameIntro introAllSeen={introAllSeen} />)} />
              )}

              <Route path="/distance" component={KeepYourDistanceRule} />
              <Route path="/groups" component={GroupsRule} />
              <Route path="/staysthome" component={StayHoneRule} />
            </View>
          </ScrollView>
        </SafeAreaView>

      </NativeRouter>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

{/* <Route path="/distance" component={KeepYourDistanceRule}/>
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
 */}