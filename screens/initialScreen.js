import React from 'react';
import {Heading, StyledText, Underlay, PrimaryButton} from '../components';
import {healthBubble} from '../assets';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const InitialScreen = ({navigation}) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Underlay style={{flex: 1}}>
      <Heading style={{marginTop: 140}}>YOUR MISSION</Heading>

      <StyledText
        style={{
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'center',
          color: '#01016f',
        }}>
        Keep you and your loved ones safe as we battle <Text>COVID-19</Text>
      </StyledText>
      <View style={styles.rounded}>
        <StyledText
          numberOfLines={1}
          style={{
            marginTop: 70,
            marginHorizontal: 30,
            textAlign: 'center',
            color: '#9fcbee',
          }}>
          Stay in your “bubble” each week{' '}
        </StyledText>
        <StyledText
          numberOfLines={1}
          style={{
            marginBottom: 10,
            marginHorizontal: 10,
            textAlign: 'center',
            color: '#9fcbee',
          }}>
          - a safe social distance to earn rewards
        </StyledText>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            width: 160,
            height: 160,
          }}
          onPress={() => navigation.navigate('Intro')}>
          <ImageBackground
            source={healthBubble}
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Heading style={{textTransform: 'uppercase', fontSize: 46}}>
                Start
              </Heading>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </Underlay>
  </ScrollView>
);

const styles = StyleSheet.create({
  rounded: {
    backgroundColor: '#01016f',
    borderTopLeftRadius: 175,
    borderTopRightRadius: 175,
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
  },
});

{
  /* <Link to="/game">
<Text>Text</Text>
</Link> */
}

export default InitialScreen;
