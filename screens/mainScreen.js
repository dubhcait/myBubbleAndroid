import {useTheme} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {award, goodDeed, leaderboard} from '../assets';
import {Heading, LifeCount, StyledText} from '../components';
import {useSpringHeart} from '../util/animations';
import {Context} from '../util/context';

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Heading style={styles.marginV10}>MyBubble</Heading>

        <TouchableOpacity
          onPress={() => navigation.navigate('SetHome')}
          style={styles.button}>
          <Heading
            color={'#9fcbee'}
            style={{...styles.buttonHeading, ...styles.padding2}}>
            set home location
          </Heading>
        </TouchableOpacity>

        <View style={styles.card}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Bubbles remaining:
          </Heading>

          <View style={styles.rowIcons}>
            <LifeCount lifeCount={state.lives} springValue={springValue} />
          </View>
        </View>
        <View style={styles.card}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Active Challenge:
          </Heading>
          <View style={styles.marginV20}>
            <StyledText>Signup for an online course</StyledText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.rowIcons}>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={leaderboard} style={styles.leaderboard} />
          <StyledText>Leaderboard</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={goodDeed} style={styles.goodDeed} />
          <StyledText>Good Deed</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate('Congratulations')}>
          <Image source={award} style={styles.award} />
          <StyledText>My Rewards</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {backgroundColor: '#ffffff'},
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
  button: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    borderRadius: 20,
    borderWidth: 1.4,
    marginVertical: 10,
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  padding2: {padding: 2},
  leaderboard: {
    tintColor: '#01016f',
    width: 53,
    height: 46,
    marginVertical: 10,
  },
  award: {
    tintColor: '#01016f',
    width: 53,
    height: 46,
    marginVertical: 10,
  },
  goodDeed: {width: 54, height: 46, marginVertical: 10},
  marginV20: {marginVertical: 20},
  marginV10: {marginVertical: 10},
});

export default MainScreen;
