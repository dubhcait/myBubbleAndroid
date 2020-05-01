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
import {cross, distance2, groupNegative, house, meow} from '../assets';
import {Card, Heading, StyledText, Touchable, Underlay} from '../components';
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
      <Underlay bubbles={true}>
        <View style={styles.virusContainer}>
          <View style={styles.iconImageContainer}>
            <Image
              source={distance2}
              style={{
                ...styles.virus,
              }}
            />
          </View>
        </View>

        <Card>
          <Heading style={styles.marginVertical}>Keep your distance!</Heading>

          <StyledText style={{...styles.groupsParagraph, marginLeft: 30}}>
            Getting closer than 6ft increases your risk of getting germs on you
            (gross)!
          </StyledText>

          <StyledText style={{...styles.groupsParagraph, marginLeft: 30}}>
            A perfect excuse to avoid that person you ghosted!
          </StyledText>
        </Card>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Groups')}
          marginTop={60}>
          <Heading color="#ffffff" style={styles.buttonHeading}>
            ...I'm listening
          </Heading>
        </Touchable>
      </Underlay>
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
      <Underlay bubbles={true}>
        <View>
          <View style={styles.iconImageContainer}>
            <Image
              source={cross}
              style={{
                ...styles.virus,
                ...styles.cross,
              }}
            />
            <Image
              source={groupNegative}
              style={{
                ...styles.virus,
              }}
            />
          </View>
        </View>
        <Card>
          <Heading card="#9fcbee" style={styles.marginVertical}>
            Avoid groups!
          </Heading>
          <StyledText card="#9fcbee" style={styles.groupsParagraph}>
            Don’t be around more than 1 other person at a time except for the
            people you live with!
          </StyledText>
        </Card>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('StayHome')}
          marginTop={100}>
          <Heading color="#ffffff" style={styles.buttonHeading}>
            ...aaaand?
          </Heading>
        </Touchable>
      </Underlay>
    </ScrollView>
  );
};

const StayHomeRule = ({navigation}) => {
  const {colors} = useTheme();
  let springValue = useSpringHeart();
  return (
    <ScrollView style={styles.container}>
      <Underlay bubbles={true}>
        <View>
          <StyledText style={styles.houseCat}>
            Who knew your house cat was onto something...
          </StyledText>
          <View style={styles.stayHomeRuleContainer}>
            <View style={styles.house} />
            <Image source={house} style={styles.house} />
            <Animated.Image
              source={meow}
              style={{...styles.speakBubble, transform: [{scale: springValue}]}}
            />
          </View>
          <Card>
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
              borderColor="#A061BE"
              backgroundColor="#A061BE"
              color="#ffffff"
              marginTop={30}
              onPress={() => navigation.navigate('WeeklyChallenge')}>
              <Heading color="#ffffff" style={styles.buttonHeading}>
                Ok, got it!
              </Heading>
            </Touchable>
          </Card>
        </View>
      </Underlay>
    </ScrollView>
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
    width: 140,
    flex: 1,
    height: 130,
  },
  speakBubble: {
    width: 40,
    flex: 1,
    height: 84,
    marginBottom: 18,
  },
  stayHomeRuleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  virus: {width: '100%', height: '100%', resizeMode: 'contain'},
  sectionContainer: {marginVertical: 10},
  houseCat: {marginTop: 60, marginBottom: 20, marginHorizontal: 40},
  tintColor: {tintColor: '#d8031c'},
  virusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
    marginHorizontal: 8,
    marginBottom: -20,
  },

  iconImageContainer: {
    width: 180,
    height: 180,
    marginTop: 10,
    alignSelf: 'center',
    zIndex: 3,
  },
  marginVertical: {marginVertical: 20},
  groupsParagraph: {marginVertical: 10, width: 300},
  cross: {
    position: 'absolute',
    top: 20,
    zIndex: 12,
  },
});

export {KeepYourDistanceRule, GroupsRule, StayHomeRule};
