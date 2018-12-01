import React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Where?</Text>
        <View style={styles.locationWrapper}>
        <TouchableHighlight style={styles.primaryButton}>
          <Button title="At my current location" color="#fff" />
        </TouchableHighlight>
          <Button title="somewhere else" color="#fff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#5893d1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 40,
    color: '#fff',
    marginBottom: 20,    
  },

  primaryButton: {
    backgroundColor: '#523da5',
    padding: 5,
    borderRadius: 5,
  }
});

// $bgr-dark: #523da5;
// $field-bgr: #dd90a5;