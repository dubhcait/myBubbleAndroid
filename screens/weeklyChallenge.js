import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  CheckBox,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {group, home, twoPeople, plus, award} from '../assets';
import {Heading, StyledText} from '../components';
import useSpringReward from '../util/useSpringReward';
import useShrinkingView from '../util/useShrinkingView';
import useFadeInText from '../util/useFadeInText';

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
        <Animated.View
          style={{
            width: 340,
            height: 340,
            zIndex: 3,
            transform: [{scale: shrinkValue}],
            backgroundColor: '#01016f',
            paddingTop: 40,
          }}>
          <Image
            style={{
              tintColor: colors.primary,
              width: 51.5,
              height: 45,
              marginTop: 10,
              alignSelf: 'center',
            }}
            source={award}
          />
          <Heading color={'#9fcbee'} style={{paddingTop: 20}}>
            THIS WEEK’S CHALLENGE
          </Heading>
          <View style={styles.objectives}>
            <Animated.Text
              style={{
                opacity: fadeValue,
                transform: [{translateX: grow}],
                paddingRight: 10,
                fontSize: 16,
                paddingTop: 10,
                color: '#9fcbee',
                fontFamily: 'Lato-Regular',
                fontStyle: 'normal',
              }}>
              Signup for an online course
            </Animated.Text>
            <Animated.Image
              style={{
                tintColor: colors.primary,
                width: 20,
                height: 20,
                opacity: fadeValue,
                marginTop: 10,
                transform: [{translateX: grow}],
              }}
              source={plus}
            />
          </View>
          <View style={styles.objectives}>
            <Animated.Text
              style={{
                opacity: fadeValue,
                transform: [{translateX: grow}],
                paddingRight: 10,
                paddingVertical: 10,
                fontSize: 16,
                color: '#9fcbee',
                fontFamily: 'Lato-Regular',
                fontStyle: 'normal',
              }}>
              Have a videochat with a friend
            </Animated.Text>
            <Animated.Image
              style={{
                tintColor: colors.primary,
                width: 20,
                height: 20,
                opacity: fadeValue,
                transform: [{translateX: grow}],
              }}
              source={plus}
            />
          </View>
          <Animated.Text
            style={{
              opacity: fadeValue,
              transform: [{translateX: grow}],
              paddingVertical: 20,
              paddingLeft: 20,
              fontSize: 16,
              color: '#9fcbee',
              fontFamily: 'Lato-Regular',
              fontStyle: 'normal',
            }}>
            And don’t break the social distance rules!
          </Animated.Text>
        </Animated.View>
        <Heading color={'#9fcbee'} style={{marginTop: 20}}>
          TO EARN:
        </Heading>
        <Animated.View style={{transform: [{scale: springValue}]}}>
          <StyledText color={'#9fcbee'}>A free month of Netflix</StyledText>
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
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
              padding: 1,
            }}>
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
});

export default WeeklyChallenge;
