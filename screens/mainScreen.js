import {useTheme} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  award,
  bluetooth,
  bubble3,
  goodDeed,
  leaderboard,
  locationIcon,
} from '../assets';
import {Card, Heading, LifeCount, RowIcons, Touchable} from '../components';
import {useSpringHeart} from '../util/animations';
import {Context} from '../util/context';

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const springValue = useSpringHeart();
  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={bubble3} style={styles.backgroundBubble} />
        <Heading color="#93CCF2" style={styles.heading}>
          MyBubble
        </Heading>

        <RowIcons style={{width: '100%'}}>
          <TouchableOpacity
            style={styles.setHome}
            onPress={() => navigation.navigate('SetHome')}>
            <Image source={locationIcon} style={styles.homeImage} />
            <Heading color={colors.card} style={styles.smallHeading}>
              Set location
            </Heading>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.setHome}
            onPress={() => navigation.navigate('BluetoothPg')}>
            <Image source={bluetooth} style={styles.homeImage} />
            <Heading color={colors.card} style={styles.smallHeading}>
              Bluetooth
            </Heading>
          </TouchableOpacity>
        </RowIcons>
        <Card backgroundColor={colors.card}>
          <Heading color={'#ffffff'} style={styles.buttonHeading}>
            Bubbles remaining:
          </Heading>

          <RowIcons>
            <LifeCount lifeCount={state.lives} springValue={springValue} />
          </RowIcons>
        </Card>
        <Card backgroundColor={'#E6F5FF'}>
          <Heading color={'#93CCF2'} style={styles.buttonHeading}>
            Active Challenge:
          </Heading>
          <View style={styles.marginV20}>
            <Touchable
              borderColor="#A061BE"
              backgroundColor="#A061BE"
              color="#ffffff">
              <Heading color="#ffffff" style={styles.buttonContent}>
                Signup for an online course
              </Heading>
            </Touchable>
          </View>
        </Card>

        <Card backgroundColor={colors.background}>
          <RowIcons>
            <TouchableOpacity style={styles.buttonColumn}>
              <Image source={leaderboard} style={styles.leaderboard} />
              <Heading style={styles.smallHeading} color={colors.card}>
                Leaderboard
              </Heading>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonColumn}>
              <Image source={goodDeed} style={styles.goodDeed} />
              <Heading style={styles.smallHeading} color={colors.card}>
                Good Deed
              </Heading>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonColumn}
              onPress={() => navigation.navigate('Congratulations')}>
              <Image source={award} style={styles.award} />
              <Heading style={styles.smallHeading} color={colors.card}>
                My Rewards
              </Heading>
            </TouchableOpacity>
          </RowIcons>
        </Card>
      </ScrollView>
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
    width: 30,
    height: 30.46,
    tintColor: '#93CCF2',
    marginVertical: 10,
  },
  award: {
    width: 26.4,
    height: 30,
    marginVertical: 10,
    tintColor: '#93CCF2',
  },
  goodDeed: {width: 30, height: 31, marginVertical: 10, tintColor: '#93CCF2'},
  marginV20: {marginVertical: 20, alignSelf: 'center'},
  marginV10: {marginVertical: 10},
  heading: {fontSize: 50, lineHeight: 63, marginTop: 60},
  setHome: {
    elevation: 1.8,
    zIndex: 4,
    marginTop: 60,
    borderColor: '#9fcbee',
    marginBottom: -30,
    borderRadius: 20,
    borderWidth: 1.4,
    backgroundColor: '#ffffff',
    width: 128,
    height: 32,
  },
  smallHeading: {
    fontSize: 16,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  buttonContent: {fontSize: 21, letterSpacing: 0},
  homeImage: {
    tintColor: '#9fcbee',
    alignSelf: 'center',
    marginTop: -26,
    width: 15,
    height: 21,
  },
  backgroundBubble: {
    height: 180,
    width: 180,
    zIndex: -2,
    top: 2,
    left: 10,
    position: 'absolute',
  },
});

export default MainScreen;
