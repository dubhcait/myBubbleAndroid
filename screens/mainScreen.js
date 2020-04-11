import React, {useEffect, useState} from 'react';
import {
  CheckBox,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
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

const HomeLocation = setHomeLocation => {
  handleHomelocation(setHomeLocation);
};

const MainScreen = ({navigation}) => {
  const lifeCountset = [1, 1, 0];
  const [homeLocation, setHomeLocation] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [distanceFromHomeArray, setDistanceFromHomeArray] = useState([0]);

  const geofenceDirectionCheck = (newPosition, oldPosition) => {
    switch ((newPosition, oldPosition)) {
      case newPosition < 0.5 && oldPosition > 0.5:
        navigation.navigate('ReEntering');
        // reentering home
        break;
      case newPosition > 0.5 && oldPosition < 0.5:
        // exsiting
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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01016f',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}>
        <Underlay>
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

          <StyledText>Bubbles remaining:</StyledText>
          <FlexRow>
            <LifeCount lifeCount={lifeCountset} />
          </FlexRow>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBox center disabled={true} title="Objective 1" />
              <StyledText>Signup for an online course</StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBox center disabled={true} title="Objective 2" />
              <StyledText>Have a videochat with a friend</StyledText>
            </View>
          </View>
          <FlexRow>
            <FlexColumn>
              <Image source={goodDeed} />
              <StyledText>Do a good deed</StyledText>
            </FlexColumn>
            <FlexColumn>
              <Image source={leaderboard} />
              <StyledText>Leaderboard</StyledText>
            </FlexColumn>
            <FlexColumn>
              <Image source={award} />
              <StyledText>My Rewards</StyledText>
            </FlexColumn>
          </FlexRow>
        </Underlay>
      </View>
    </ScrollView>
  );
};

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
