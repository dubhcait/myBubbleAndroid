import React from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {healthBubble, virus} from '../assets';
import {Heading, StyledText} from '../components';
import {
  default as useSpinVirus,
  default as useSpringHeart,
} from '../util/useSpringHeart';

const InitialScreen = ({navigation}) => {
  let springValue = useSpringHeart();
  let spinValue = useSpinVirus();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 100,
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
              width: 38,
              height: 40,
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
        <Heading style={{marginTop: 20, fontSize: 38}}>YOUR MISSION</Heading>

        <StyledText
          style={{
            marginTop: 20,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Keep you and your loved ones safe as we battle <Text>COVID-19</Text>
        </StyledText>
        <View style={styles.rounded}>
          <StyledText
            color={'#9fcbee'}
            numberOfLines={1}
            style={{
              marginTop: 70,
              marginHorizontal: 30,
              textAlign: 'center',
            }}>
            Stay in your “bubble” each week{' '}
          </StyledText>
          <StyledText
            color={'#9fcbee'}
            numberOfLines={1}
            style={{
              marginBottom: 10,
              marginHorizontal: 10,
              textAlign: 'center',
            }}>
            - a safe social distance to earn rewards
          </StyledText>

          <TouchableOpacity
            style={{
              marginHorizontal: 86,
              marginVertical: 10,
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Intro')}>
            <View
              style={{
                width: 70,
                height: 70,
                margin: 10,
              }}>
              <Animated.Image
                source={healthBubble}
                style={{
                  width: '100%',
                  height: '100%',
                  transform: [{scale: springValue}],
                }}
              />
            </View>
            <Heading
              color={'#9fcbee'}
              style={{
                textTransform: 'uppercase',
                fontSize: 22,
                margin: 4,
                letterSpacing: 1.4,
              }}>
              Start
            </Heading>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rounded: {
    backgroundColor: '#01016f',
    borderTopLeftRadius: 175,
    borderTopRightRadius: 175,
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
  },
});

{
  /* <Link to="/game">
<Text>Text</Text>
</Link> */
}

export default InitialScreen;
