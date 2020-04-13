import React from 'react';
import {
  Animated,
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {distance2, groupNegative, house2, virus} from '../assets';
import {Heading, StyledText, Underlay} from '../components';
import {useSpringHeart} from '../util/animations';

const KeepYourDistanceRule = ({navigation}) => {
  let spinValue = useSpringHeart();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Underlay>
      <View style={styles.distanceContainer}>
        <View style={styles.distanceAnimationContainer}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.tintColor,
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
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
      </View>
      <View style={styles.distanceImageContainer}>
        <Image
          source={distance2}
          style={{
            ...styles.virus,
            ...styles.flex,
          }}
        />
      </View>
      <Heading>Keep your distance!</Heading>

      <StyledText style={styles.keepYourDistanceText}>
        Getting closer than 6ft increases your risk of getting germs on you
        (gross)!
      </StyledText>

      <StyledText>
        A perfect excuse to avoid that person you ghosted!
      </StyledText>

      <TouchableOpacity
        onPress={() => navigation.navigate('Groups')}
        style={styles.buttonStyle}>
        <Heading style={styles.buttonHeading}>...I'm listening</Heading>
      </TouchableOpacity>
    </Underlay>
  );
};

const GroupsRule = ({navigation}) => {
  let spinValue = useSpringHeart();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Underlay background={'#01016f'} bubbles={false}>
      <View style={styles.groupsRuleContainer}>
        <View style={styles.virus3}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>

        <View style={styles.virus4}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
        <View style={styles.groupImageContainer}>
          <Image
            source={groupNegative}
            style={{
              ...styles.tintColor,
              ...styles.virus,
              ...styles.flex,
            }}
          />
        </View>
        <View style={styles.virus5}>
          <Animated.Image
            source={virus}
            style={{
              ...styles.virus,
              transform: [{rotate: spin}],
            }}
          />
        </View>
      </View>

      <Heading color={'#9fcbee'}>Avoid groups!</Heading>
      <StyledText color={'#9fcbee'} style={styles.marginVN20}>
        Don’t be around more than 1 other person at a time
      </StyledText>
      <StyledText color={'#9fcbee'}>
        (except for the people you live with)!
      </StyledText>
      <TouchableOpacity
        onPress={() => navigation.navigate('StayHome')}
        style={styles.buttonStyle}>
        <Heading color={'#9fcbee'} style={styles.buttonHeading}>
          ...aaaand?
        </Heading>
      </TouchableOpacity>
    </Underlay>
  );
};

const StayHomeRule = ({navigation}) => {
  return (
    <Underlay>
      <View style={styles.stayHomeRuleContainer}>
        <Image source={house2} style={styles.house} />
      </View>
      <Heading style={styles.stayHomeRuleHeadding}>Stay home!</Heading>

      <SectionList
        style={styles.stayHomeRulesection}
        sections={[
          {
            title: ' Only go out if you have to:',
            data: [
              '- Getting groceries',
              '- Going to work',
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

      <TouchableOpacity
        onPress={() => navigation.navigate('WeeklyChallenge')}
        style={styles.buttonStyle}>
        <Heading style={styles.buttonHeading}>Ok, got it!</Heading>
      </TouchableOpacity>
    </Underlay>
  );
};

const styles = StyleSheet.create({
  bubbleImage: {
    width: 60,
    height: 60,
  },
  buttonStyle: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    marginTop: -20,
    borderRadius: 30,
    borderWidth: 1.4,
    elevation: 1.8,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  stayHomeRuleContainer: {width: 90, height: 90, alignSelf: 'auto'},
  stayHomeRuleHeadding: {marginVertical: -80},
  stayHomeRulesection: {maxHeight: 120},
  virus: {width: '100%', height: '100%', resizeMode: 'contain'},
  groupsRuleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    zIndex: 4,
  },
  tintColor: {tintColor: '#d8031c'},
  distanceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    zIndex: 4,
    marginBottom: -230,
    marginTop: -40,
  },
  distanceAnimationContainer: {
    width: 24,
    height: 26,
    alignSelf: 'flex-end',
    margin: 18,
  },
  virus1: {
    width: 34,
    height: 36,
    alignSelf: 'flex-start',
    transform: [{scaleX: -1}],
    margin: 8,
  },
  virus2: {
    width: 30,
    height: 32,
    alignSelf: 'baseline',
    margin: 30,
  },
  virus3: {
    width: 34,
    height: 36,
    alignSelf: 'flex-end',
  },
  virus4: {
    width: 44,
    height: 46,
    alignSelf: 'flex-start',
    transform: [{scaleX: -1}],
    margin: 10,
  },
  virus5: {
    width: 30,
    height: 32,
    alignSelf: 'flex-end',
    margin: 17,
  },
  distanceImageContainer: {
    width: 206,
    height: 90,
    alignSelf: 'auto',
  },
  flex: {flex: 1},
  groupImageContainer: {
    width: 300,
    height: 80,
    marginVertical: -60,
    alignSelf: 'auto',
  },
  marginVN20: {marginVertical: -20},
  keepYourDistanceText: {marginVertical: -30, marginHorizontal: 20},
});

export {KeepYourDistanceRule, GroupsRule, StayHomeRule};
