import {useTheme} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Heading} from '../components';
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
    if (newPosition < 0.05 && oldPosition > 0.05) {
      navigation.navigate('ReEntering');
    }
    // exsiting
    else if (newPosition > 0.05 && oldPosition < 0.05) {
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Heading style={styles.marginV10}>MyBubble</Heading>

        {state.homeLocation.longitude === undefined && (
          <TouchableOpacity
            onPress={() => HomeLocation(setHomeLocation)}
            style={styles.button}>
            <Heading
              color={'#9fcbee'}
              style={{...styles.buttonHeading, ...styles.padding2}}>
              Mark here as Home
            </Heading>
          </TouchableOpacity>
        )}
        <Text>Current location:</Text>
        <Text>
          Longitude:{Math.floor(state.currentLocation.longitude * 100) / 100},
          Latitude:
          {Math.floor(state.currentLocation.latitude * 100) / 100}
        </Text>
        <Text>Home location:</Text>
        <Text>
          Longitude:{Math.floor(state.homeLocation.longitude * 100) / 100},
          Latitude:
          {Math.floor(state.homeLocation.latitude * 100) / 100}
        </Text>
        <Text>
          {Math.floor(state.distanceFromHomeArray[0] * 10000)} meters from home
        </Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonStyle}>
        <Heading color={colors.primary} style={styles.buttonHeading}>
          Done!
        </Heading>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {backgroundColor: '#ffffff'},
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  card: {
    borderColor: '#d8031c',
    marginHorizontal: 8,
    padding: 20,
    borderRadius: 30,
    borderWidth: 1.4,
    marginVertical: 10,
    elevation: 1.8,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  buttonColumn: {
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'center',
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
  goodDeed: {width: 54, height: 46, marginVertical: 10},
  marginV20: {marginVertical: 20},
  marginV10: {marginVertical: 10},
});

export default SetHome;
