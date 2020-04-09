import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, ScrollView, StyleSheet, View} from 'react-native';
import {group, home, twoPeople} from '../assets';
import {Heading, PrimaryButton, StyledText} from '../components';
import useSpringHeart from '../util/useSpringHeart';
const WeeklyChallenge = ({navigation}) => {
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
          justifyContent: 'space-evenly',

          backgroundColor: '#ffffff',
          paddingVertical: 30,
        }}>
        <Heading>THIS WEEK’S CHALLENGE</Heading>
        <Animated.View
          style={{width: 60, height: 60, transform: [{scale: springValue}]}}>
          <StyledText>Signup for an online course </StyledText>
          <StyledText>Have a videochat with a friend</StyledText>
        </Animated.View>
        <StyledText>And don’t break the social distance rules!</StyledText>

        <View style={styles.rowIcons}>
          <Image source={twoPeople} style={{tintColor: colors.primary}} />
          <Image source={group} style={{tintColor: colors.primary}} />
          <Image source={home} style={{tintColor: colors.primary}} />
        </View>

        <Heading>TO EARN:</Heading>

        <StyledText>A free month of Netflix</StyledText>

        <PrimaryButton
          text="Challenge accepted!"
          onPress={() => navigation.navigate('Intro')}
        />
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
});

export default WeeklyChallenge;
