'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Left extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Left Page</Text>
      </View>
    );
  }
}

export default Left;
