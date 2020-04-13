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
import {award, healthBubble} from '../assets';
import {Heading} from '../components';
import {
  useFadeInText,
  useShrinkingView,
  useSpringHeart,
} from '../util/animations';
const {colors} = useTheme();

const WellDone = ({navigation}) => {
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
        <Animated.View
          style={{...styles.animatedView, transform: [{scale: shrinkValue}]}}>
          <Image style={styles.award} source={award} />
          <Heading color={'#9fcbee'} style={styles.vertical40}>
            Well Done!
          </Heading>

          <View style={styles.rowIcons}>
            <Animated.Image
              source={healthBubble}
              style={{...styles.bubbleImage, transform: [{scale: springValue}]}}
            />
            <Animated.Image
              source={healthBubble}
              style={{...styles.bubbleImage, transform: [{scale: springValue}]}}
            />
            <Animated.Image
              source={healthBubble}
              style={{...styles.bubbleImage, transform: [{scale: springValue}]}}
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
      </ScrollView>
      <View style={{backgroundColor: 'transparent', zIndex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Heading color={'#9fcbee'} style={styles.buttonHeading}>
            Excellent
          </Heading>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#01016f',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
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
    marginVertical: 20,
  },
  button: {
    borderColor: '#d8031c',
    borderRadius: 20,
    borderWidth: 1.4,
    marginVertical: 40,
    marginHorizontal: 96,
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingVertical: 1,
  },
  animatedText: {
    fontSize: 20,
    marginVertical: 40,
    marginHorizontal: 20,
    color: '#9fcbee',
    fontFamily: 'Dosis-Bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  bubbleImage: {width: 60, height: 60},
  vertical40: {marginVertical: 40},
  award: {
    tintColor: colors.primary,
    width: 51.5,
    height: 45,
    alignSelf: 'center',
  },
});

export default WellDone;
