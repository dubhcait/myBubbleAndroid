import React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {healthBubble2} from '../assets';
import {Heading, StyledText} from '../components';
import {useSpringHeart} from '../util/animations';

const InitialScreen = ({navigation}) => {
  let springValue = useSpringHeart();
  const {colors} = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.flex}>
        <Heading style={styles.heading} color={colors.card}>
          YOUR MISSION:
        </Heading>

        <StyledText style={styles.initialText} color={colors.card}>
          Keep you and your loved ones safe as we battle <Text>COVID-19</Text>
        </StyledText>
        <View style={styles.rounded}>
          <StyledText
            color={'#FFFFFF'}
            numberOfLines={1}
            style={styles.middleText}>
            Stay in your “bubble” each week{' '}
          </StyledText>
          <StyledText
            color={'#FFFFFF'}
            numberOfLines={1}
            style={styles.emphasisText}>
            - a safe social distance to earn rewards
          </StyledText>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Intro')}>
            <View style={styles.buttonView}>
              <Animated.Image
                source={healthBubble2}
                style={{
                  ...styles.fullsize,
                  transform: [{scale: springValue}],
                }}
              />
            </View>
            <Heading color={'#FFFFFF'} style={styles.buttonHeading}>
              Start
            </Heading>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rounded: {
    backgroundColor: '#93CCF2',
    borderTopLeftRadius: 175,
    borderTopRightRadius: 175,
    flex: 1,
    marginTop: 20,
    paddingTop: 70,
    alignSelf: 'stretch',
  },
  buttonHeading: {
    textTransform: 'uppercase',
    fontSize: 22,
    margin: 4,
    letterSpacing: 1.4,
  },
  fullsize: {width: '100%', height: '100%'},
  buttonView: {
    width: 70,
    height: 70,
    margin: 10,
  },
  button: {
    marginHorizontal: 86,
    marginVertical: 10,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  emphasisText: {
    marginBottom: 10,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  flex: {flex: 1},
  initialText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  middleText: {
    marginTop: 70,
    marginHorizontal: 30,
    textAlign: 'center',
  },
  img: {
    tintColor: '#d8031c',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  heading: {marginTop: 60, fontSize: 38},
});

export default InitialScreen;
