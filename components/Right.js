'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Right extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Right Page</Text>
      </View>
    );
  }
}

export default Right;
