'use strict';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../styles.js'

class Left extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageText}>Left Page</Text>
      </View>
    );
  }
}

export default Left;
