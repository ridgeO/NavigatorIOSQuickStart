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
    // This method is one of the simpler for navigation. The .pop() function removes the last
    // route added to the navigator and returns to the previous view as listed in the navigation.
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageText}>Main Page</Text>
        <TouchableHighlight
          // In this instance the navigation function returnToLanding() is being called on the press of a button in the view.
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
