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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            width: 340,
            height: 420,
            zIndex: 3,
            transform: [{scale: shrinkValue}],
          }}>
          <Image
            style={{
              tintColor: colors.primary,
              width: 51.5,
              height: 45,
              alignSelf: 'center',
            }}
            source={award}
          />
          <Heading color={'#9fcbee'} style={{marginVertical: 40}}>
            Well Done!
          </Heading>

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

          <Animated.Text
            style={{
              opacity: fadeValue,
              transform: [{translateX: grow}],
              fontSize: 20,
              marginVertical: 40,
              marginHorizontal: 20,
              color: '#9fcbee',
              fontFamily: 'Dosis-Bold',
              fontStyle: 'normal',
              textAlign: 'center',
            }}>
            You have 3 lives after the week. What’s poppin’? Not you!
          </Animated.Text>
        </Animated.View>
      </ScrollView>
      <View style={{backgroundColor: 'transparent', zIndex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            borderColor: '#d8031c',
            borderRadius: 20,
            borderWidth: 1.4,
            marginVertical: 40,
            marginHorizontal: 96,
          }}>
          <Heading
            color={'#9fcbee'}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              paddingVertical: 1,
            }}>
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
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});

export default WellDone;
