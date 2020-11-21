import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }

};

const styles = StyleSheet.create({
    container : {
      color: 'red',
    }
});
