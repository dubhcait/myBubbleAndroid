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
import {Heading, StyledText, Touchable, Card, RowIcons} from '../components';
import {useSpringHeart} from '../util/animations';

const GameIntro = ({introAllSeen, navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.background}>
        <Heading> How to WIN</Heading>
        <Card backgroundColor={colors.card} zIndex={0}>
          <StyledText>
            Start the week with a new challenge and 3 bubbles
          </StyledText>
          <RowIcons>
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
          </RowIcons>

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
        </Card>
        <Card backgroundColor={colors.background} zIndex={4}>
          <StyledText>
            Don’t burst any bubbles by breaking social distance!
          </StyledText>
          <RowIcons>
            <Image source={twoPeople} style={{tintColor: colors.primary}} />
            <Image source={group} style={{tintColor: colors.primary}} />
            <Image source={home} style={{tintColor: colors.primary}} />
            <Image source={poppedBubble2} style={styles.poppedBubble} />
          </RowIcons>

          <StyledText>
            Keep your bubbles safe by Sunday and get rewards!
          </StyledText>
        </Card>
        <Touchable
          borderColor={colors.border}
          onPress={() => navigation.navigate('Rules')}
          marginTop={20}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
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
  poppedBubble: {width: 42.7, height: 42},
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
