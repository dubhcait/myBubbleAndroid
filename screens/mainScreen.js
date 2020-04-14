import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {award, goodDeed, leaderboard} from '../assets';
import {Heading, LifeCount, StyledText} from '../components';
import {useSpringHeart} from '../util/animations';
import {
  distanceFromHome,
  handleCurrentlocation,
  handleHomelocation,
} from '../util/geoLocation';

// eslint-disable-next-line prettier/prettier
const HomeLocation = (setHomeLocation) => {
  handleHomelocation(setHomeLocation);
};

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  const lifeCountset = [1, 1, 0];
  const [homeLocation, setHomeLocation] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [distanceFromHomeArray, setDistanceFromHomeArray] = useState([0]);

  const geofenceDirectionCheck = (newPosition, oldPosition) => {
    switch ((newPosition, oldPosition)) {
      // reentering home
      case newPosition < 0.5 && oldPosition > 0.5:
        navigation.navigate('ReEntering');
        break;
      // exsiting
      case newPosition > 0.5 && oldPosition < 0.5:
        navigation.navigate('Exiting');
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    handleCurrentlocation(setCurrentLocation);
  }, []);

  const check = async () => {
    const newDistance = await distanceFromHome(homeLocation, currentLocation);
    const newState = [newDistance, ...distanceFromHomeArray];
    console.log(newState);
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

  useEffect(() => {
    console.log('current', currentLocation);
  }, [currentLocation]);

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
        <View style={styles.card}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Bubbles remaining:
          </Heading>

          <View style={styles.rowIcons}>
            <LifeCount lifeCount={lifeCountset} springValue={springValue} />
          </View>
        </View>
        <View style={styles.card}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Active Challenge:
          </Heading>
          <View style={styles.marginV20}>
            <StyledText>Signup for an online course</StyledText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.rowIcons}>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={leaderboard} style={styles.leaderboard} />
          <StyledText>Leaderboard</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={goodDeed} style={styles.goodDeed} />
          <StyledText>Good Deed</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate('Congratulations')}>
          <Image source={award} style={styles.award} />
          <StyledText>My Rewards</StyledText>
        </TouchableOpacity>
      </View>
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

export default MainScreen;
