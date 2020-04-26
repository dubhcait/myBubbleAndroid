import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, ScrollView, StyleSheet, View} from 'react-native';
import {trophy} from '../assets';
import {Heading, StyledText, Touchable, Underlay} from '../components';
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
      <Underlay bubbles={true} style={styles.container}>
        <Animated.View
          style={{
            ...styles.annimatedView,
            transform: [{scale: shrinkValue}],
          }}>
          <Image style={{...styles.trophy}} source={trophy} />
          <Heading color={'#3E36A1'} style={styles.paddingT20}>
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
        <Heading color={'#3E36A1'} style={{marginTop: 70}}>
          TO EARN:
        </Heading>
        <Animated.View style={{transform: [{scale: springValue}]}}>
          <StyledText style={{marginVertical: 20}} color={'#3E36A1'}>
            A free month of Netflix
          </StyledText>
        </Animated.View>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Home')}>
          <Heading color="#ffffff" style={styles.buttonHeading}>
            Challenge accepted!
          </Heading>
        </Touchable>
      </Underlay>
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
    marginTop: 10,
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
    fontSize: 18,
    textAlign: 'center',
    color: '#FF9090',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  plusImage: {
    width: 20,
    height: 20,
  },
  challenge: {
    paddingRight: 10,

    fontSize: 18,
    color: '#3E36A1',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  signup: {
    paddingRight: 10,
    fontSize: 18,
    paddingTop: 10,
    color: '#3E36A1',
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
  },
  trophy: {
    width: 110,
    height: 110,
    marginTop: 5,
    alignSelf: 'center',
  },
  annimatedView: {
    width: 340,
    height: 340,
    zIndex: 3,

    paddingTop: 40,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default WeeklyChallenge;
