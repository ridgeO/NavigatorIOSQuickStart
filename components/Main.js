'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

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
        <Text>Main Page</Text>
        <TouchableHighlight
          onPress={() => this.returnToLanding()}
        >
          <Text>Press to Go back to Landing</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Main;
