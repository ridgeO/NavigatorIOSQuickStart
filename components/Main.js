'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles.js'

class Main extends Component {
  constructor(props){
    super(props);
  }

  returnToLanding(){
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageText}>Main Page</Text>
        <TouchableHighlight
          onPress={() => this.returnToLanding()}
          style={styles.button}
          underlayColor='#24CE84'
        >
          <Text style={styles.buttonText}>Press to return to Landing</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Main;
