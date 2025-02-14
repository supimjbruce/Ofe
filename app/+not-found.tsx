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
      <Stack.Screen options={{
        headerShown: false,
        title: 'Page Not Found'
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>
            We could not find the page you were looking for!
            <br></br>
            We are extremely sorry! Click the button below to go back to the home page.
            <br></br>

            Thank you and have a blessed day!
            <br></br>
            <br></br>
            -JBruce
            <br></br>
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
    backgroundColor: '#F0ECE2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#000'
  },

  button: {
    color: '#000',
    fontSize: 16,
    /*borderRadius: 10,
    borderColor: '#000',*/ /*<--- I want to style this like a button, figure this out */
    paddingBottom: 20,
  },
});

