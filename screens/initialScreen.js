import React, {useEffect, useRef} from 'react';
import {Heading, StyledText, Underlay, PrimaryButton} from '../components';
import {healthBubble} from '../assets';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import useSpringHeart from '../util/useSpringHeart';

const InitialScreen = ({navigation}) => {
  const springValue = useSpringHeart();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Underlay style={{flex: 1}}>
        <Heading style={{marginTop: 140, fontSize: 38}}>YOUR MISSION</Heading>

        <StyledText
          style={{
            marginTop: 20,
            marginBottom: 20,
            textAlign: 'center',
            color: '#01016f',
          }}>
          Keep you and your loved ones safe as we battle <Text>COVID-19</Text>
        </StyledText>
        <View style={styles.rounded}>
          <StyledText
            numberOfLines={1}
            style={{
              marginTop: 70,
              marginHorizontal: 30,
              textAlign: 'center',
              color: '#9fcbee',
            }}>
            Stay in your “bubble” each week{' '}
          </StyledText>
          <StyledText
            numberOfLines={1}
            style={{
              marginBottom: 10,
              marginHorizontal: 10,
              textAlign: 'center',
              color: '#9fcbee',
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
              style={{
                textTransform: 'uppercase',
                fontSize: 22,
                color: '#9fcbee',
                margin: 4,
                letterSpacing: 1.4,
              }}>
              Start
            </Heading>
          </TouchableOpacity>
        </View>
      </Underlay>
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
