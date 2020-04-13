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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          paddingVertical: 20,
        }}>
        <Heading> How to WIN</Heading>

        <StyledText style={{paddingVertical: 20}}>
          Start the week with a new challenge and 3 bubbles
        </StyledText>
        <View style={styles.rowIcons}>
          <Animated.Image
            source={healthBubble}
            style={{width: 60, height: 60, transform: [{scale: springValue}]}}
          />
          <Animated.Image
            source={healthBubble}
            style={{width: 60, height: 60, transform: [{scale: springValue}]}}
          />
          <Animated.Image
            source={healthBubble}
            style={{width: 60, height: 60, transform: [{scale: springValue}]}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              paddingHorizontal: 10,
            }}>
            Challenge
          </Heading>
          <View
            style={{
              borderColor: '#d8031c',
              borderRadius: 50,
              borderWidth: 1.4,
              elevation: 1.8,
            }}>
            <Image
              style={{
                tintColor: colors.primary,
                width: 20,
                height: 20,
                margin: 4,
              }}
              source={plus}
            />
          </View>
        </View>

        <Heading
          style={{paddingVertical: 20, fontSize: 22, marginHorizontal: 26}}>
          Don’t burst any bubbles by breaking social distance!
        </Heading>
        <View style={styles.rowIcons}>
          <Image source={twoPeople} style={{tintColor: colors.primary}} />
          <Image source={group} style={{tintColor: colors.primary}} />
          <Image source={home} style={{tintColor: colors.primary}} />
          <Image
            source={poppedBubble2}
            style={{width: 40.7, height: 40, margin: 2}}
          />
        </View>

        <StyledText style={{paddingVertical: 20}}>
          Keep your bubbles safe by Sunday and get rewards!
        </StyledText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rules')}
          style={styles.buttonStyle}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              padding: 1,
            }}>
            What’s social distancing?
          </Heading>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default GameIntro;
