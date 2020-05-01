import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  group,
  healthBubble2,
  home,
  plus,
  poppedBubble2,
  twoPeople,
} from '../assets';
import {Card, Heading, RowIcons, StyledText, Touchable} from '../components';
import {useSpringHeart} from '../util/animations';

const GameIntro = ({introAllSeen, navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.background}>
        <Heading> How to WIN</Heading>
        <Card backgroundColor={colors.card} zIndex={0}>
          <StyledText color={'#FFFFFF'}>
            Start the week with a new challenge and 3 bubbles
          </StyledText>
          <RowIcons>
            <Animated.Image
              source={healthBubble2}
              style={{...styles.image, transform: [{scale: springValue}]}}
            />
            <Animated.Image
              source={healthBubble2}
              style={{...styles.image, transform: [{scale: springValue}]}}
            />
            <Animated.Image
              source={healthBubble2}
              style={{...styles.image, transform: [{scale: springValue}]}}
            />
          </RowIcons>

          <View style={styles.row}>
            <Heading color={'#FFFFFF'} style={styles.challenge}>
              Challenge
            </Heading>
            <View style={styles.imageContainer}>
              <Image
                style={{...styles.plusImage, tintColor: '#FFFFFF'}}
                source={plus}
              />
            </View>
          </View>
        </Card>
        <Card backgroundColor={colors.background} zIndex={4}>
          <StyledText>
            Don’t burst any bubbles by breaking social distance!
          </StyledText>
          <RowIcons>
            <Image source={twoPeople} style={{tintColor: '#ff8480'}} />
            <Image source={group} style={{tintColor: '#ff8480'}} />
            <Image source={home} style={{tintColor: '#ff8480'}} />
            <View style={styles.bubbleWrap}>
              <Image source={poppedBubble2} style={styles.poppedBubble} />
            </View>
          </RowIcons>

          <StyledText>
            Keep your bubbles safe by Sunday and get rewards!
          </StyledText>
        </Card>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Rules')}
          marginTop={20}>
          <Heading c color="#ffffff" style={styles.buttonHeading}>
            What’s social distancing?
          </Heading>
        </Touchable>
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
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 1,
  },

  image: {width: 60, height: 60},
  poppedBubble: {
    width: 42.7,
    height: 42,
  },
  bubbleWrap: {
    width: 42.7,
    height: 42,
    borderRadius: 50,
    elevation: 3,
  },
  plusImage: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  challenge: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default GameIntro;
