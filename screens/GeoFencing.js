import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  essentials,
  exercising,
  facecover,
  helping,
  soap,
  wash,
  work,
} from '../assets';
import {Heading, StyledText, Touchable} from '../components';

const Exiting = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Heading color="#ffffff">
          Aaand where do you think you’re going?
        </Heading>

        <View style={styles.rowIcons}>
          <View style={styles.Tile}>
            <Image
              source={essentials}
              style={{
                tintColor: '#93CCF2',
                backgroundColor: '#ffffff',
                borderRadius: 20,
              }}
            />
            <StyledText color="#ffffff" style={styles.TextWidth}>
              Picking up essentials
            </StyledText>
          </View>
          <View style={styles.Tile}>
            <Image
              source={exercising}
              style={{
                tintColor: '#93CCF2',
                backgroundColor: '#ffffff',
                borderRadius: 20,
              }}
            />
            <StyledText color="#ffffff" style={styles.TextWidth}>
              Going to exercise
            </StyledText>
          </View>
        </View>
        <View style={styles.rowIcons}>
          <View style={styles.Tile}>
            <Image
              source={helping}
              style={{
                tintColor: '#93CCF2',
                backgroundColor: '#ffffff',
                borderRadius: 20,
              }}
            />
            <StyledText color="#ffffff" style={styles.TextWidth}>
              Gotta go to work
            </StyledText>
          </View>
          <View style={styles.Tile}>
            <Image
              source={work}
              style={{
                tintColor: '#93CCF2',
                backgroundColor: '#ffffff',
                borderRadius: 20,
              }}
            />
            <StyledText color="#ffffff" style={styles.TextWidth}>
              Taking care of someone
            </StyledText>
          </View>
        </View>

        <StyledText color="#ffffff" style={styles.paddingV20}>
          Remember: only go out if absolutely necessary:
        </StyledText>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Home')}>
          <Heading color="#ffffff" style={styles.buttonHeading}>
            It’s important, promise!
          </Heading>
        </Touchable>
      </View>
    </ScrollView>
  );
};

const ReEntering = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          backgroundColor: '#ffffff',
          paddingVertical: 20,
        }}>
        <Heading>Welcome back home!</Heading>

        <View style={styles.Tile}>
          <Image source={facecover} style={{tintColor: '#FF9090'}} />
          <StyledText style={styles.TextWidth}>
            Clean/discard face covering
          </StyledText>
        </View>

        <View style={styles.Tile}>
          <Image source={wash} style={{tintColor: '#FF9090'}} />
          <StyledText style={styles.TextWidth}>Wash your hands</StyledText>
        </View>
        <View style={styles.Tile}>
          <Image source={soap} style={{tintColor: '#FF9090'}} />
          <StyledText style={styles.TextWidth}>
            Clean what you brought home
          </StyledText>
        </View>

        <StyledText style={styles.paddingV20}>
          Remember: clean this phone surface too!
        </StyledText>
        <Touchable
          borderColor="#A061BE"
          backgroundColor="#A061BE"
          color="#ffffff"
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonStyle}>
          <Heading c color="#ffffff" style={styles.buttonHeading}>
            Done!
          </Heading>
        </Touchable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#FF9090',
    paddingVertical: 20,
  },
  bubbleImage: {
    width: 60,
    height: 60,
  },
  buttonStyle: {
    borderColor: '#d8031c',
    marginHorizontal: 46,
    borderRadius: 30,
    borderWidth: 1.4,
    marginVertical: 10,

    elevation: 1.8,
  },
  rowIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  buttonHeading: {
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 1,
  },
  paddingV20: {paddingVertical: 20, paddingLeft: 40, width: 400},
  TextWidth: {width: 160},
  Tile: {justifyContent: 'center', alignItems: 'center'},
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {ReEntering, Exiting};
