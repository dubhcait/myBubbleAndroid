import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, ScrollView, StyleSheet, View} from 'react-native';
import {check, healthBubble} from '../assets';
import {Heading, Touchable, Underlay} from '../components';
import {
  useFadeInText,
  useShrinkingView,
  useSpringHeart,
} from '../util/animations';

const WellDone = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  const shrinkValue = useShrinkingView();
  const fadeValue = useFadeInText();

  const grow = fadeValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Underlay bubbles={true}>
          <Animated.View
            style={{...styles.animatedView, transform: [{scale: shrinkValue}]}}>
            <Image style={styles.award} source={check} />
            <Heading color={'#3E36A1'} style={styles.vertical40}>
              Well Done!
            </Heading>

            <View style={styles.rowIcons}>
              <Animated.Image
                source={healthBubble}
                style={{
                  ...styles.bubbleImage,
                  transform: [{scale: springValue}],
                }}
              />
              <Animated.Image
                source={healthBubble}
                style={{
                  ...styles.bubbleImage,
                  transform: [{scale: springValue}],
                }}
              />
              <Animated.Image
                source={healthBubble}
                style={{
                  ...styles.bubbleImage,
                  transform: [{scale: springValue}],
                }}
              />
            </View>

            <Animated.Text
              style={{
                ...styles.animatedText,
                opacity: fadeValue,
                transform: [{translateX: grow}],
              }}>
              You have 3 lives after the week. What’s poppin’? Not you!
            </Animated.Text>
          </Animated.View>
          <View style={styles.bottomButton}>
            <Touchable
              onPress={() => navigation.navigate('Home')}
              borderColor="#A061BE"
              backgroundColor="#A061BE"
              color="#ffffff">
              <Heading color={'#ffffff'} style={styles.buttonHeading}>
                Excellent
              </Heading>
            </Touchable>
          </View>
        </Underlay>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  animatedView: {
    width: 340,
    height: 420,
    zIndex: 3,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    borderColor: '#d8031c',
    borderRadius: 20,
    borderWidth: 1.4,
    marginVertical: 40,
  },
  buttonHeading: {
    fontSize: 20,
    paddingVertical: 1,
  },
  animatedText: {
    fontSize: 20,
    width: 260,
    marginHorizontal: 40,
    marginVertical: 110,
    color: '#3E36A1',
    fontFamily: 'Dosis-Bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  bubbleImage: {width: 60, height: 60},
  vertical40: {marginTop: 40, marginBottom: 20},
  award: {
    marginTop: 20,
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  bottomButton: {
    backgroundColor: 'transparent',
    zIndex: 1,
    paddingTop: 80,
  },
});

export default WellDone;
