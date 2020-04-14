import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Heading} from '../components';
import {
  distanceFromHome,
  handleCurrentlocation,
  handleHomelocation,
} from '../util/geoLocation';

const HomeLocation = setHomeLocation => {
  handleHomelocation(setHomeLocation);
};

const SetHome = ({navigation}) => {
  const [homeLocation, setHomeLocation] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [distanceFromHomeArray, setDistanceFromHomeArray] = useState([0]);

  const geofenceDirectionCheck = (newPosition, oldPosition) => {
    // reentering home
    if (newPosition < 0.5 && oldPosition > 0.5) {
      navigation.navigate('ReEntering');
    }
    // exsiting
    else if (newPosition > 0.5 && oldPosition < 0.5) {
      navigation.navigate('Exiting');
    } else {
      return;
    }
  };

  useEffect(() => {
    handleCurrentlocation(setCurrentLocation);
  }, []);

  const check = async () => {
    const newDistance = await distanceFromHome(homeLocation, currentLocation);
    const newState = [newDistance, ...distanceFromHomeArray];

    return setDistanceFromHomeArray(newState);
  };
  useEffect(() => {
    if (homeLocation.longitude && currentLocation.longitude) {
      check();
    }
  }, [currentLocation, homeLocation]);

  useEffect(() => {
    if (distanceFromHomeArray.length > 1) {
      geofenceDirectionCheck(
        distanceFromHomeArray[0],
        distanceFromHomeArray[1],
      );
    }
  }, [distanceFromHomeArray]);

  useEffect(() => {}, [currentLocation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Heading style={styles.marginV10}>MyBubble</Heading>

        {homeLocation.longitude === undefined && (
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
          Longitude:{currentLocation.longitude}, Latitude:
          {currentLocation.latitude}
        </Text>
        <Text>Home location:</Text>
        <Text>
          Longitude:{homeLocation.longitude}, Latitude:
          {homeLocation.latitude}
        </Text>
        <Text> Distance from home {distanceFromHomeArray[0]}</Text>
      </ScrollView>
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
  button: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    borderRadius: 20,
    borderWidth: 1.4,
    marginVertical: 10,
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
