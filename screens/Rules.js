import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  View,
} from 'react-native';
import {distance2, groupNegative, house2, meow, virus} from '../assets';
import {Card, Heading, StyledText, Touchable} from '../components';
import {useSpringHeart} from '../util/animations';

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
        marginTop={60}>
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
  let springValue = useSpringHeart();
  return (
    <View>
      <StyledText style={styles.houseCat}>
        Who knew your house cat was onto something...
      </StyledText>
      <View style={styles.stayHomeRuleContainer}>
        <View style={styles.house} />
        <Image source={house2} style={styles.house} />
        <Animated.Image
          source={meow}
          style={{...styles.speakBubble, transform: [{scale: springValue}]}}
        />
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
        marginTop={40}>
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
    width: 86,
    flex: 1,
    height: 86,
    tintColor: '#d8031c',
  },
  speakBubble: {
    width: 70,
    flex: 1,
    height: 70,
    marginBottom: 28,
  },
  stayHomeRuleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    marginBottom: 10,
  },
  virus: {width: '100%', height: '100%', resizeMode: 'contain'},
  sectionContainer: {marginVertical: 40},
  houseCat: {marginTop: 60, marginBottom: 30},
  tintColor: {tintColor: '#d8031c'},
  virusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
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
