import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  essentials,
  exercising,
  helping,
  work,
  facecover,
  soap,
  wash,
} from '../assets';
import {Heading, StyledText} from '../components';

const Exiting = ({navigation}) => {
  const {colors} = useTheme();
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
          paddingVertical: 20,
        }}>
        <Heading> Aaand where do you think you’re going?</Heading>

        <View style={styles.rowIcons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={essentials} style={{tintColor: colors.primary}} />
            <StyledText style={{width: 160}}>Picking up essentials</StyledText>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={exercising} style={{tintColor: colors.primary}} />
            <StyledText style={{width: 160}}>Going to exercise</StyledText>
          </View>
        </View>
        <View style={styles.rowIcons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={helping} style={{tintColor: colors.primary}} />
            <StyledText style={{width: 160}}>Gotta go to work</StyledText>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={work} style={{tintColor: colors.primary}} />
            <StyledText style={{width: 160}}>Taking care of someone</StyledText>
          </View>
        </View>

        <StyledText style={{paddingVertical: 20}}>
          Remember: only go out if absolutely necessary:
        </StyledText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={styles.buttonStyle}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              padding: 1,
            }}>
            It’s important, promise!
          </Heading>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
});

const ReEntering = ({navigation}) => {
  const {colors} = useTheme();
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
          paddingVertical: 20,
        }}>
        <Heading>Welcome back home!</Heading>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={facecover} style={{tintColor: colors.primary}} />
          <StyledText style={{width: 160}}>
            Clean/discard face covering
          </StyledText>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={wash} style={{tintColor: colors.primary}} />
          <StyledText style={{width: 160}}>Wash your hands</StyledText>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={soap} style={{tintColor: colors.primary}} />
          <StyledText style={{width: 160}}>
            Clean what you brought home
          </StyledText>
        </View>

        <StyledText style={{paddingVertical: 20}}>
          Remember: clean this phone surface too!
        </StyledText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={styles.buttonStyle}>
          <Heading
            color={colors.primary}
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              padding: 1,
            }}>
            Done!
          </Heading>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export {ReEntering, Exiting};
