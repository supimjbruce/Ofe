/* Ofe */
/* Create Journal Post Modal [createJournalPostModal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from "react";

export default function CreateJournalPost() {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonTitle}>+</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: '#295F4E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
  },

  buttonTitle: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  }
});