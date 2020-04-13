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
import {
  group,
  healthBubble,
  home,
  plus,
  poppedBubble2,
  twoPeople,
} from '../assets';
import {Heading, StyledText} from '../components';
import {useSpringHeart} from '../util/animations';

const GameIntro = ({introAllSeen, navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.background}>
        <Heading> How to WIN</Heading>

        <StyledText style={styles.vertical20}>
          Start the week with a new challenge and 3 bubbles
        </StyledText>
        <View style={styles.rowIcons}>
          <Animated.Image
            source={healthBubble}
            style={{...styles.image, transform: [{scale: springValue}]}}
          />
          <Animated.Image
            source={healthBubble}
            style={{...styles.image, transform: [{scale: springValue}]}}
          />
          <Animated.Image
            source={healthBubble}
            style={{...styles.image, transform: [{scale: springValue}]}}
          />
        </View>
        <View style={styles.row}>
          <Heading color={colors.primary} style={styles.challenge}>
            Challenge
          </Heading>
          <View style={styles.imageContainer}>
            <Image
              style={{...styles.plusImage, tintColor: colors.primary}}
              source={plus}
            />
          </View>
        </View>

        <Heading style={styles.centerHeading}>
          Don’t burst any bubbles by breaking social distance!
        </Heading>
        <View style={styles.rowIcons}>
          <Image source={twoPeople} style={{tintColor: colors.primary}} />
          <Image source={group} style={{tintColor: colors.primary}} />
          <Image source={home} style={{tintColor: colors.primary}} />
          <Image source={poppedBubble2} style={styles.poppedBubble} />
        </View>

        <StyledText style={styles.vertical20}>
          Keep your bubbles safe by Sunday and get rewards!
        </StyledText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rules')}
          style={styles.buttonStyle}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            What’s social distancing?
          </Heading>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  buttonStyle: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    borderRadius: 30,
    borderWidth: 1.4,
    marginVertical: 10,
    elevation: 1.8,
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 1,
  },

  image: {width: 60, height: 60},

  vertical20: {paddingVertical: 20},
  poppedBubble: {width: 40.7, height: 40, margin: 2},
  imageContainer: {
    borderColor: '#d8031c',
    borderRadius: 50,
    borderWidth: 1.4,
    elevation: 1.8,
  },
  plusImage: {
    width: 20,
    height: 20,
    margin: 4,
  },
  centerHeading: {paddingVertical: 20, fontSize: 22, marginHorizontal: 26},
  challenge: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingHorizontal: 10,
  },
});

export default GameIntro;
