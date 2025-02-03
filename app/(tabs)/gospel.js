/* Ofe */
/* Gospel Page [gospel.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

export default function GospelScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gospelHeader}>
        <Text style={styles.title}>El Evangelio</Text>
        <Text style={styles.subtitle}>(The Gospel)</Text>
        <View style={styles.listContainer}>
          <FlatList
          data={[
            {key: 'Creation'},
            {key: 'Fall'},
            {key: 'Jesus Coming to Earth'},
            {key: 'The Cross'},
            {key: 'Three Days Later'},
            {key: 'Ascension'},
            {key: 'His Return'},
            {key: 'What does this mean for you?'},
          ]}
          renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
          />
      </View>
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
  listContainer: {
    paddingTop: 25,
  },
  listItem: {
    padding: 10,
    margin: 10,
    fontSize: 26,
    fontWeight: '400',
    backgroundColor: '#fff',
  }
});
