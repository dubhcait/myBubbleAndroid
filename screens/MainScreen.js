import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  award,
  goodDeed,
  healthBubble,
  leaderboard,
  poppedBubble,
} from '../assets';
import {
  FlexColumn,
  FlexRow,
  Heading,
  StyledText,
  Underlay,
} from '../components';
import useSpringHeart from '../util/useSpringHeart';

// lifeCount

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();

  // const [status, setStatus] = useState('BubblePlus');

  // const LifeCount = ({lifeCount}) => {
  //   console.log(lifeCount);
  //   return lifeCount.map((i, k) => {
  //     if (k === 0) {
  //       if (i === 1) {
  //         return (
  //           <Image source={healthBubble} key={k} style={{height: 100 + 'px'}} />
  //         );
  //       }
  //       return <Image source={poppedBubble} key={k} />;
  //     }
  //     if (i === 1) {
  //       return (
  //         <Image
  //           source={healthBubble}
  //           key={k}
  //           style={{height: 100 + 'px', marginLeft: -28 + 'px'}}
  //         />
  //       );
  //     }
  //     return <Image source={poppedBubble} key={k} />;
  //   });
  // };

  return (
    <View style={styles.container}>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Heading style={{marginVertical: 10}}>MyBubble</Heading>
        <View style={styles.card}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
            }}>
            Bubbles remaining:
          </Heading>
          {/* <LifeCount lifeCount={lifeCount} /> */}

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
        </View>
        <View style={styles.card}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
            }}>
            Active Challenge:
          </Heading>
          <View style={{marginVertical: 20}}>
            <StyledText>Signup for an online course</StyledText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.rowIcons}>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image
            source={leaderboard}
            style={{
              tintColor: '#01016f',
              width: 53,
              height: 46,
              marginVertical: 10,
            }}
          />
          <StyledText>Leaderboard</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image
            source={goodDeed}
            style={{width: 54, height: 46, marginVertical: 10}}
          />
          <StyledText>Good Deed</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate('Congratulations')}>
          <Image
            source={award}
            style={{
              tintColor: '#01016f',
              width: 53,
              height: 46,
              marginVertical: 10,
            }}
          />
          <StyledText>My Rewards</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  card: {
    borderColor: '#d8031c',
    marginHorizontal: 8,
    padding: 20,
    borderRadius: 30,
    borderWidth: 1.4,
    marginVertical: 10,
    elevation: 1.8,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  buttonColumn: {
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'center',
  },
});

export default MainScreen;
