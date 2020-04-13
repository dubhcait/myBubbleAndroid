import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  CheckBox,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {award, goodDeed, leaderboard} from '../assets';
import {
  FlexColumn,
  FlexRow,
  Heading,
  LifeCount,
  StyledText,
  Underlay,
} from '../components';
import {
  distanceFromHome,
  handleCurrentlocation,
  handleHomelocation,
} from '../util/geoLocation';
import {useSpringHeart} from '../util/animations';

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
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Heading style={{marginVertical: 10}}>MyBubble</Heading>

        <Heading>MyBubble</Heading>

        {homeLocation.longitude === undefined && (
          <TouchableOpacity
            onPress={() => HomeLocation(setHomeLocation)}
            style={{
              borderColor: '#d8031c',
              marginHorizontal: 46,
              borderRadius: 20,
              borderWidth: 1.4,
              marginVertical: 10,
            }}>
            <Heading
              color={'#9fcbee'}
              style={{
                fontSize: 20,
                textTransform: 'uppercase',
                padding: 2,
              }}>
              Mark here as Home
            </Heading>
          </TouchableOpacity>
        )}
        <View style={styles.card}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
            }}>
            Bubbles remaining:
          </Heading>

          <View style={styles.rowIcons}>
            <LifeCount lifeCount={lifeCountset} springValue={springValue} />
          </View>
        </View>
        <View style={styles.card}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
            }}>
            Active Challenge:
          </Heading>
          <View style={{marginVertical: 20}}>
            <StyledText>Signup for an online course</StyledText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.rowIcons}>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image
            source={leaderboard}
            style={{
              tintColor: '#01016f',
              width: 53,
              height: 46,
              marginVertical: 10,
            }}
          />
          <StyledText>Leaderboard</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image
            source={goodDeed}
            style={{width: 54, height: 46, marginVertical: 10}}
          />
          <StyledText>Good Deed</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate('Congratulations')}>
          <Image
            source={award}
            style={{
              tintColor: '#01016f',
              width: 53,
              height: 46,
              marginVertical: 10,
            }}
          />
          <StyledText>My Rewards</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MainScreen;

{
  //   const loadLifeCount  = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('myBubble');
  //       if (value !== null) {
  // parse ? json and get key value
  //         return true;
  //       }
  //       return [1,1,1];
  //     } catch (e) {
  //       return [1,1,1];
  //     }
  //   };
  //   const setLifeCount= async () => {
  //     try {
  //       await AsyncStorage.setItem('myBubble', {});
  //     } catch (e) {
  //       // saving error
  //     }
  //   };
  //   const handleLifeCount = () => {
  //const newLifeCount = updateLifeCount(lifecount)
  //     setLifeCount();
  //     setLifeCount([]);
  //   };
}
