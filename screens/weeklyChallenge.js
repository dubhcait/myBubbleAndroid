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
import {group, home, twoPeople} from '../assets';
import {Heading, StyledText} from '../components';
import useSpringReward from '../util/useSpringReward';
const WeeklyChallenge = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringReward();
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
        <View>
          <View style={styles.objectives}>
            <CheckBox center disabled={true} title="Objective 1" />
            <StyledText>Signup for an online course</StyledText>
          </View>
          <View style={styles.objectives}>
            <CheckBox center disabled={true} title="Objective 2" />
            <StyledText>Have a videochat with a friend</StyledText>
          </View>
        </View>
        <StyledText>And don’t break the social distance rules!</StyledText>

        <View style={styles.rowIcons}>
          <Image source={twoPeople} style={{tintColor: colors.primary}} />
          <Image source={group} style={{tintColor: colors.primary}} />
          <Image source={home} style={{tintColor: colors.primary}} />
        </View>

        <Heading>TO EARN:</Heading>
        <Animated.View style={{transform: [{scale: springValue}]}}>
          <StyledText>A free month of Netflix</StyledText>
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.navigate('WeeklyChallenge')}
          style={{
            borderColor: '#d8031c',
            marginHorizontal: 46,
            borderRadius: 20,
            borderWidth: 1.4,
            marginVertical: 10,
          }}>
          <Heading
            style={{
              fontSize: 20,
              color: colors.primary,
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
  },
});

export default WeeklyChallenge;
