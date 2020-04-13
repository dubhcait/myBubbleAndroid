import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {award, plus} from '../assets';
import {Heading, StyledText} from '../components';
import {
  useFadeInText,
  useShrinkingView,
  useSpringReward,
} from '../util/animations';

const WeeklyChallenge = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringReward();
  const shrinkValue = useShrinkingView();
  const fadeValue = useFadeInText();

  const grow = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.annimatedView,
            transform: [{scale: shrinkValue}],
          }}>
          <Image
            style={{...styles.award, tintColor: colors.primary}}
            source={award}
          />
          <Heading color={'#9fcbee'} style={styles.paddingT20}>
            THIS WEEK’S CHALLENGE
          </Heading>
          <View style={styles.objectives}>
            <Animated.Text
              style={{
                ...styles.signup,
                opacity: fadeValue,
                transform: [{translateX: grow}],
              }}>
              Signup for an online course
            </Animated.Text>
            <Animated.Image
              style={{
                ...styles.plusImage,
                ...styles.marginT10,
                opacity: fadeValue,
                tintColor: colors.primary,
                transform: [{translateX: grow}],
              }}
              source={plus}
            />
          </View>
          <View style={styles.objectives}>
            <Animated.Text
              style={{
                ...styles.challenge,
                opacity: fadeValue,
                transform: [{translateX: grow}],
              }}>
              Have a videochat with a friend
            </Animated.Text>
            <Animated.Image
              style={{
                ...styles.plusImage,
                opacity: fadeValue,
                tintColor: colors.primary,
                transform: [{translateX: grow}],
              }}
              source={plus}
            />
          </View>
          <Animated.Text
            style={{
              ...styles.annimatedText,
              opacity: fadeValue,
              transform: [{translateX: grow}],
            }}>
            And don’t break the social distance rules!
          </Animated.Text>
        </Animated.View>
        <Heading color={'#9fcbee'} style={styles.marginT20}>
          TO EARN:
        </Heading>
        <Animated.View style={{transform: [{scale: springValue}]}}>
          <StyledText color={'#9fcbee'}>A free month of Netflix</StyledText>
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Heading color={'#9fcbee'} style={styles.buttonHeading}>
            Challenge accepted!
          </Heading>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  objectives: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    padding: 1,
  },
  marginT20: {marginTop: 20},
  marginT10: {marginTop: 10},
  paddingT20: {paddingTop: 20},
  annimatedText: {
    paddingVertical: 20,
    paddingLeft: 20,
    fontSize: 16,
    color: '#9fcbee',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  plusImage: {
    width: 20,
    height: 20,
  },
  challenge: {
    paddingRight: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: '#9fcbee',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  signup: {
    paddingRight: 10,
    fontSize: 16,
    paddingTop: 10,
    color: '#9fcbee',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  award: {
    width: 51.5,
    height: 45,
    marginTop: 10,
    alignSelf: 'center',
  },
  annimatedView: {
    width: 340,
    height: 340,
    zIndex: 3,
    backgroundColor: '#01016f',
    paddingTop: 40,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01016f',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default WeeklyChallenge;
