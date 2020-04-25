import {useTheme} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import {bubble3, house} from '../assets';
import {Heading, StyledText, Touchable} from '../components';
import {Context} from '../util/context';
import {distanceFromHome, handleHomelocation} from '../util/geoLocation';

const HomeLocation = setHomeLocation => {
  handleHomelocation(setHomeLocation);
};

const SetHome = ({navigation}) => {
  const [state, dispatch] = useContext(Context);

  const setHomeLocation = value =>
    dispatch({type: 'homeLocation', value: value});

  const setDistanceFromHomeArray = value =>
    dispatch({type: 'distanceFromHomeArray', value: value});

  const {colors} = useTheme();

  const geofenceDirectionCheck = (newPosition, oldPosition) => {
    // reentering home
    const distanceMarker = 0.005;
    if (newPosition < distanceMarker && oldPosition > distanceMarker) {
      navigation.navigate('ReEntering');
    }
    // exsiting
    else if (newPosition > distanceMarker && oldPosition < distanceMarker) {
      navigation.navigate('Exiting');
    } else {
      return;
    }
  };

  const check = async () => {
    const newDistance = await distanceFromHome(
      state.homeLocation,
      state.currentLocation,
    );
    const newState = [newDistance, ...state.distanceFromHomeArray];

    return setDistanceFromHomeArray(newState);
  };
  useEffect(() => {
    if (state.homeLocation.longitude && state.currentLocation.longitude) {
      check();
    }
  }, [state.currentLocation, state.homeLocation]);

  useEffect(() => {
    if (state.distanceFromHomeArray.length > 1) {
      geofenceDirectionCheck(
        state.distanceFromHomeArray[0],
        state.distanceFromHomeArray[1],
      );
    }
  }, [state.distanceFromHomeArray]);

  let Latitude = state.homeLocation.latitude;
  let Longitude = state.homeLocation.longitude;

  let myLocation = `http://www.openstreetmap.org/export/embed.html?bbox=${Longitude}%2C${Latitude +
    0.001}%2C${Longitude}%2C${Latitude}&amp;layer=mapnik&amp;marker=${Latitude}%2C${Longitude}`;
  return (
    <ScrollView style={styles.scrollView}>
      <Image source={bubble3} style={styles.backgroundBubble} />
      <WebView
        style={styles.webView}
        originWhitelist={['*']}
        source={{
          html: `<iFrame width="965" height="1555" style=${
            styles.iFrame
          } src='${myLocation}' allowfullscreen></iFrame>`,
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 600,
          marginLeft: 25,
        }}>
        <View style={{alignItems: 'center'}}>
          <Heading style={styles.heading}>MyBubble</Heading>

          {state.homeLocation.longitude === undefined && (
            <Touchable
              onPress={() => HomeLocation(setHomeLocation)}
              borderColor="#A061BE"
              style={styles.button}>
              <Heading
                color="#A061BE"
                style={{...styles.buttonHeading, ...styles.padding2}}>
                Mark here as Home
              </Heading>
            </Touchable>
          )}
          <Text style={styles.meters}>
            {Math.floor(state.distanceFromHomeArray[0] * 1000)} meters from home
          </Text>

          <Image source={house} style={styles.homeImage} />
          <StyledText style={styles.current}>
            Your current home position is set to:
          </StyledText>
        </View>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Home')}
          bomarginTop={30}>
          <Heading color="#ffffff" style={styles.buttonHeading}>
            Done!
          </Heading>
        </Touchable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {flex: 1},
  webView: {
    position: 'relative',
    height: 660,
    opacity: 0.99,
    zIndex: -10,
  },
  iFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: '100%',
    height: '100%',
    zIndex: -10,
  },
  buttonHeading: {
    fontSize: 20,
  },
  padding2: {padding: 2},
  homeImage: {height: 30, width: 30.48},
  marginV20: {marginVertical: 20},
  marginV10: {marginVertical: 10},
  backgroundBubble: {
    height: 360,
    width: 360,
    zIndex: 1,
    top: 10,
    left: 35,
    position: 'absolute',
  },
  heading: {
    height: 63,
    color: '#93CCF2',
    fontSize: 55,
    letterSpacing: 0,
    lineHeight: 63,
    marginTop: 95,
    marginBottom: 10,
  },
  meters: {
    height: 26,
    width: 275,
    color: '#A061BE',
    fontSize: 21,
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  current: {
    width: 190,
    color: '#93CCF2',
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SetHome;
