import React from 'react';
import {Heading, StyledText, Underlay} from '../components';
import {healthBubble} from '../assets';
import {
  Text,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const InitialScreen = () => (
  <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <Heading color="white">YOUR MISSION</Heading>

    <StyledText>
      Keep you and your loved ones safe as we battle <Text>COVID-19</Text>
    </StyledText>
    <Image source={healthBubble} />
    <View style={styles.rounded}>
      <StyledText>
        Stay in your “bubble” each week - a <Text>safe social distance</Text> to
        earn rewards
      </StyledText>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  rounded: {
    backgroundColor: 'grey',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});

{
  /* <Link to="/game">
<Text>Text</Text>
</Link> */
}

export default InitialScreen;
