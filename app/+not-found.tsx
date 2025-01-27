/* Ofe */
/* Error/Not Found Page [+not-found.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Stack, Link} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{title: 'Page Not Found'}} />
      <View style={styles.container}>
        <Text style={styles.text}>
            We could not find the page you were looking for!
            We are extremely sorry! Click the button below to go back to the home page.

            Thank you and have a blessed day!

            -JBruce
            Creator of Ofe
        </Text>
        <Link href="/" style={styles.button}>
          Go back to the home page
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#000'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    fontSize: 20,
    borderRadius: 10,
    borderColor: '#000',
  },
});

