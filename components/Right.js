'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from '../styles.js'

class Right extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageText}>Right Page</Text>
      </View>
    );
  }
}

export default Right;
