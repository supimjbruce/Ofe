/* Ofe */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeModal from '../../components/welcomeModal';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <WelcomeModal></WelcomeModal>
    <Text style={styles.title}>OFE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C7B198',
  },
  title: {
    fontFamily: 'PirataOne-Regular',
    fontSize: 200,
    fontWeight: 'bold',
    color: '#295F4E',
    letterSpacing: 7,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: {width: 6, height: 6},
    textShadowRadius: 5,
    shadowOpacity: 0.25,
  },
});
