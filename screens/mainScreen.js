import {useTheme} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {award, goodDeed, home, leaderboard} from '../assets';
import {Card, Heading, LifeCount, RowIcons, StyledText} from '../components';
import {useSpringHeart} from '../util/animations';
import {Context} from '../util/context';

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Heading>MyBubble</Heading>

        <TouchableOpacity
          style={styles.setHome}
          onPress={() => navigation.navigate('SetHome')}>
          <Image source={home} style={styles.homeImage} />
          <Heading color={colors.card} style={styles.smallHeading}>
            Set location
          </Heading>
        </TouchableOpacity>
        <Card backgroundColor={colors.card}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Bubbles remaining:
          </Heading>

          <RowIcons>
            <LifeCount lifeCount={state.lives} springValue={springValue} />
          </RowIcons>
        </Card>
        <Card backgroundColor={colors.background}>
          <Heading color={colors.primary} style={styles.buttonHeading}>
            Active Challenge:
          </Heading>
          <View style={styles.marginV20}>
            <StyledText>Signup for an online course</StyledText>
          </View>
        </Card>
      </ScrollView>
      <RowIcons>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={leaderboard} style={styles.leaderboard} />
          <Heading style={styles.smallHeading}>Leaderboard</Heading>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonColumn}>
          <Image source={goodDeed} style={styles.goodDeed} />
          <Heading style={styles.smallHeading}>Good Deed</Heading>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonColumn}
          onPress={() => navigation.navigate('Congratulations')}>
          <Image source={award} style={styles.award} />
          <Heading style={styles.smallHeading}>My Rewards</Heading>
        </TouchableOpacity>
      </RowIcons>
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
  buttonColumn: {
    flexDirection: 'column',
    alignContent: 'stretch',
    alignItems: 'center',
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
  setHome: {
    elevation: 1.8,
    zIndex: 4,
    marginTop: 40,
    borderColor: '#9fcbee',
    paddingHorizontal: 8,
    marginBottom: -30,
    borderRadius: 20,
    borderWidth: 1.4,
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    marginLeft: 34,
  },
  smallHeading: {
    color: '#9fcbee',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  homeImage: {
    tintColor: '#9fcbee',
    alignSelf: 'center',
    marginTop: 8,
    width: 38,
    height: 33,
  },
});

export default MainScreen;
