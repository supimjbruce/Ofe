/* Ofe */
/* Gospel Page [gospel.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function GospelScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gospelHeader}>
        <Text style={styles.title}>El Evangelio</Text>
        <Text style={styles.subtitle}>(The Gospel)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0ECE2',
  },
  gospelHeader: {
    flex: 1,
    alignContent: 'flex-start',
    paddingTop: 30,
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#949494',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
