/* Ofe */
/* Welcome Modal [welcomeModal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';

export default function WelcomeModal() {

const [isModalVisible, setModalVisible] = useState(true);

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>X</Text> {/*Style and program this like Figma design*/}
            </Pressable>
            <Text style={styles.modalTitle}>OFE</Text>
            <Text style={styles.modalParagraphTitle}>Welcome!<br></br>
            <br></br>
                We hope that this app helps spur on many great gospel conversations <br></br>
                with thosein your life!<br></br>
                <br></br>
                To keep track of your conversations and prayer requests, consider creating an account below!</Text>
                <br></br>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Create Account</Text>
            </Pressable>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Log in</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
      </View>

    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    
    modalContent: {
      maxHeight: '80%',
      maxWidth: '50%',
      minHeight: '30%',
      minWidth: '30%',
      backgroundColor: '#D9D9D9',
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },

    modalTitle: {
      fontFamily: 'PirataOne-Regular',
      fontSize: 125,
      fontWeight: 'bold',
      color: '#295F4E',
      letterSpacing: 7,
      textShadowColor: "rgba(0,0,0,0.25)",
      textShadowOffset: {width: 6, height: 6},
      textShadowRadius: 5,
      shadowOpacity: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    modalParagraphTitle: {
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
    },

    buttonAlign: {
      alignItems: 'center',
    },

    closeButton: {
      height: 50,
      width: 150,
      maxHeight: 100,
      maxWidth: 300,
      backgroundColor: '#8ECDDD',
      borderRadius: 23,
      paddingTop: 15, /* Padding is the space inside of the element :) */
      paddingBottom: 15,
      paddingLeft: 5,
      margin: 25, /* Space OUTSIDE of the element */
      textAlign: 'center',
    },

    closeButtonText: {
      fontSize: 16,
      textAlign: 'center',
    },

  });