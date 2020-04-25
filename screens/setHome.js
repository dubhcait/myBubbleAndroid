import {useTheme} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import {house} from '../assets';
import {Card, Heading, StyledText, Touchable} from '../components';
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

  let myLocation = `http://www.openstreetmap.org/export/embed.html?bbox=${Longitude}%2C${Latitude}%2C${Longitude}%2C${Latitude}&amp;layer=mapnik&amp;marker=${Latitude}%2C${Longitude}`;
  return (
    <ScrollView style={styles.scrollView}>
      <Heading style={styles.marginV20}>MyBubble</Heading>

      {state.homeLocation.longitude === undefined && (
        <Touchable
          onPress={() => HomeLocation(setHomeLocation)}
          style={styles.button}>
          <Heading
            color={colors.primary}
            style={{...styles.buttonHeading, ...styles.padding2}}>
            Mark here as Home
          </Heading>
        </Touchable>
      )}
      <Text>
        {Math.floor(state.distanceFromHomeArray[0] * 1000)} meters from home
      </Text>
      <Card>
        <Image source={house} style={styles.homeImage} />
        <StyledText style={styles.marginV20}>
          Your current home position is set to:
        </StyledText>
        <WebView
          style={styles.webView}
          originWhitelist={['*']}
          source={{
            html: `<iFrame width="1165" height="655" style=${
              styles.iFrame
            } src='${myLocation}' allowfullscreen></iFrame>`,
          }}
        />
        <Touchable
          marginTop={60}
          backgroundColor={colors.background}
          borderColor={colors.border}
          onPress={() => navigation.navigate('Home')}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Done!
          </Heading>
        </Touchable>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {flex: 1},
  webView: {
    position: 'relative',
    height: 206,
    marginRight: 10,
    marginLeft: 10,
    opacity: 0.99,
  },
  iFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: '100%',
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  padding2: {padding: 2},
  leaderboard: {
    tintColor: '#01016f',
    width: 53,
    height: 46,
    marginVertical: 10,
  },
  award: {
    tintColor: '#01016f',
    width: 53,
    height: 46,
    marginVertical: 10,
  },
  homeImage: {
    tintColor: '#1a4cff',
    alignSelf: 'center',
    width: 86,
    height: 86,
  },
  goodDeed: {width: 54, height: 46, marginVertical: 10},
  marginV20: {marginVertical: 20},
  marginV10: {marginVertical: 10},
});

export default SetHome;

{
  /* <Text>Current location:</Text> */
}
{
  /* <Text>
        Longitude:{Math.floor(state.currentLocation.longitude * 100) / 100},
        Latitude:
        {Math.floor(state.currentLocation.latitude * 100) / 100}
      </Text>
      <Text>Home location:</Text>
      <Text>
        Longitude:{Math.floor(state.homeLocation.longitude * 100) / 100},
        Latitude:
        {Math.floor(state.homeLocation.latitude * 100) / 100}
      </Text> */
}
