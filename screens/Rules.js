import React from 'react';
import {
  Animated,
  Image,
  SectionList,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {distance2, groupNegative, house2, virus} from '../assets';
import {Heading, StyledText, Underlay, Touchable, Card} from '../components';
import {useSpringHeart} from '../util/animations';
import {useTheme} from '@react-navigation/native';

const KeepYourDistanceRule = ({navigation}) => {
  const {colors} = useTheme();
  let spinValue = useSpringHeart();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView>
      <View style={styles.virusContainer}>
        <View style={styles.virus1}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.tintColor,
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View style={styles.iconImageContainer}>
          <Image
            source={distance2}
            style={{
              ...styles.virus,
            }}
          />
        </View>

        <View style={styles.virus2}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.tintColor,
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View style={styles.virus3}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.tintColor,
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
      </View>

      <Card backgroundColor={colors.background}>
        <Heading style={styles.marginVertical}>Keep your distance!</Heading>

        <StyledText style={styles.marginVertical}>
          Getting closer than 6ft increases your risk of getting germs on you
          (gross)!
        </StyledText>

        <StyledText>
          A perfect excuse to avoid that person you ghosted!
        </StyledText>
      </Card>
      <Touchable
        borderColor={colors.border}
        onPress={() => navigation.navigate('Groups')}
        marginTop={40}>
        <Heading style={styles.buttonHeading}>...I'm listening</Heading>
      </Touchable>
    </ScrollView>
  );
};

const GroupsRule = ({navigation}) => {
  const {colors} = useTheme();
  let spinValue = useSpringHeart();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.virusContainer}>
        <View style={styles.virus1}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View style={styles.iconImageContainer}>
          <Image
            source={groupNegative}
            style={{
              ...styles.tintColor,
              ...styles.virus,
            }}
          />
        </View>
        <View style={styles.virus2}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>

        <View style={styles.virus3}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
      </View>
      <Card backgroundColor={colors.text}>
        <Heading color={colors.card} style={styles.marginVertical}>
          Avoid groups!
        </Heading>
        <StyledText color={colors.card} style={styles.marginVertical}>
          Don’t be around more than 1 other person at a time
        </StyledText>
        <StyledText color={colors.card}>
          (except for the people you live with)!
        </StyledText>
      </Card>
      <Touchable
        borderColor={colors.border}
        onPress={() => navigation.navigate('StayHome')}
        marginTop={80}>
        <Heading color={colors.card} style={styles.buttonHeading}>
          ...aaaand?
        </Heading>
      </Touchable>
    </ScrollView>
  );
};

const StayHomeRule = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View>
      <View style={styles.stayHomeRuleContainer}>
        <Image source={house2} style={styles.house} />
      </View>
      <Heading>Stay home!</Heading>
      <View>
        <SectionList
          style={styles.sectionContainer}
          sections={[
            {
              title: ' Only go out if you have to:',
              data: [
                '- Get groceries',
                '- Go to work',
                '- Get some solo exercise',
              ],
            },
          ]}
          renderItem={({item}) => <StyledText>{item}</StyledText>}
          renderSectionHeader={({section}) => (
            <StyledText>{section.title}</StyledText>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>

      <Touchable
        borderColor={colors.border}
        onPress={() => navigation.navigate('WeeklyChallenge')}
        marginTop={80}>
        <Heading style={styles.buttonHeading}>Ok, got it!</Heading>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01016f',
  },
  buttonHeading: {
    fontSize: 20,
    paddingVertical: 1,
    paddingHorizontal: 16,
  },
  house: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flex: 1,
    tintColor: '#d8031c',
  },
  stayHomeRuleContainer: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 20,
  },
  virus: {width: '100%', height: '100%', resizeMode: 'contain'},
  sectionContainer: {marginVertical: 40},
  tintColor: {tintColor: '#d8031c'},
  virusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 340,
    zIndex: 1,
    marginHorizontal: 8,
    marginBottom: -20,
  },
  virus1: {
    width: 24,
    height: 26,
    alignSelf: 'flex-end',
    margin: 18,
  },
  virus2: {
    width: 34,
    height: 36,
    alignSelf: 'flex-start',
    transform: [{scaleX: -1}],
    margin: 8,
  },
  virus3: {
    width: 30,
    height: 32,
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 30,
  },
  iconImageContainer: {
    width: 160,
    height: 90,
    alignSelf: 'center',
    zIndex: 3,
  },
  marginVertical: {marginVertical: 20},
});

export {KeepYourDistanceRule, GroupsRule, StayHomeRule};
