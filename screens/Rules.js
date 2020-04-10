import React from 'react';
import {Heading, StyledText, Underlay} from '../components';
import {distance2, groupNegative} from '../assets';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import useSpinVirus from '../util/useSpringHeart';
import {virus} from '../assets';

const KeepYourDistanceRule = ({navigation}) => {
  let spinValue = useSpinVirus();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Underlay>
      <Heading style={{marginTop: 8}}>Keep your distance!</Heading>

      <StyledText>
        Getting closer than 6ft increases your risk of getting germs on you
        (gross)!
      </StyledText>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 300,
          zIndex: 4,
          marginBottom: -230,
        }}>
        <View
          style={{
            width: 24,
            height: 26,
            alignSelf: 'flex-end',
            margin: 18,
          }}>
          <Animated.Image
            source={virus}
            style={{
              tintColor: '#d8031c',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View
          style={{
            width: 34,
            height: 36,
            alignSelf: 'flex-start',
            transform: [{scaleX: -1}],
            margin: 8,
          }}>
          <Animated.Image
            source={virus}
            style={{
              tintColor: '#d8031c',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View
          style={{
            width: 30,
            height: 32,
            alignSelf: 'baseline',
            margin: 30,
          }}>
          <Animated.Image
            source={virus}
            style={{
              tintColor: '#d8031c',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: 306,
          height: 110,
          alignSelf: 'auto',
        }}>
        <Image
          source={distance2}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <StyledText>
        A perfect excuse to avoid that person you ghosted!
      </StyledText>

      <TouchableOpacity
        onPress={() => navigation.navigate('Groups')}
        style={styles.buttonStyle}>
        <Heading
          style={{
            fontSize: 20,
            paddingVertical: 1,
            paddingHorizontal: 16,
          }}>
          ...I'm listening
        </Heading>
      </TouchableOpacity>
    </Underlay>
  );
};

const GroupsRule = ({}) => {
  const {colors} = useTheme();

  let spinValue = useSpinVirus();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Underlay background={'#01016f'} bubbles={false}>
      <Heading color={'#9fcbee'}>Avoid groups!</Heading>

      <StyledText
        color={'#9fcbee'}
        style={{paddingHorizontal: 8}}
        numberOfLines={3}>
        Don’t be around more than 1 other person at a time (except for the
        people you live with)!
      </StyledText>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 300,
          zIndex: 4,
          marginBottom: -230,
          marginTop: 0,
        }}>
        <View
          style={{
            width: 34,
            height: 36,
            alignSelf: 'flex-end',
          }}>
          <Animated.Image
            source={virus}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View
          style={{
            width: 44,
            height: 46,
            alignSelf: 'flex-start',
            transform: [{scaleX: -1}],
            margin: 10,
          }}>
          <Animated.Image
            source={virus}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View
          style={{
            width: 30,
            height: 32,
            alignSelf: 'flex-end',
            margin: 17,
          }}>
          <Animated.Image
            source={virus}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              transform: [{rotate: spin}],
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: 300,
          height: 80,
          alignSelf: 'auto',
        }}>
        <Image
          source={groupNegative}
          style={{
            tintColor: '#d8031c',
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>

      <StyledText color={'#9fcbee'}>Bye, Felicia!</StyledText>

      <TouchableOpacity
        onPress={() => navigation.navigate('Groups')}
        style={styles.buttonStyle}>
        <Heading
          color={'#9fcbee'}
          style={{
            fontSize: 20,
            paddingVertical: 1,
            paddingHorizontal: 16,
          }}>
          ...aaaand?
        </Heading>
      </TouchableOpacity>
    </Underlay>
  );
};

const StayHomeRule = ({}) => {
  return (
    <Underlay>
      <Heading>Stay home!</Heading>

      <StyledText>
        Only go out if you have to: getting groceries, going to work, or getting
        some solo exercise!
      </StyledText>
      <Image source={house} />

      <StyledText>Who knew your housecat was onto something...</StyledText>
      <PrimaryButtonLink text="Ok, got it!" url="/" />

      {/* <Link to="/">
        <Text> Ok, got it!</Text>
      </Link> */}
    </Underlay>
  );
};

const styles = StyleSheet.create({
  bubbleImage: {
    width: 60,
    height: 60,
  },
  buttonStyle: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    borderRadius: 30,
    borderWidth: 1.4,
    marginVertical: 10,
    elevation: 1.8,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export {KeepYourDistanceRule, GroupsRule, StayHomeRule};
