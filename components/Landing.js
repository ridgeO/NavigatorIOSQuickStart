'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles.js'
import Main from './Main.js';
import Right from './Right.js';
import Left from './Left.js';

class Landing extends Component {
  constructor(props){
    super(props);
  }

  openMain() {
    // This is how you add new routes to the navbar via push/pop/replace/etc
    this.props.navigator.push({
      // When you push a route, much like in the initial setup you add the title and component
      title: 'Main Page',
      component: Main,
      // This is an optional parameter used to add a button to the navbar of the view you are navigating to
      // rightButtonTitle for right, and leftButtonTitle for left. From there onRightButtonPress and onLeftButtonPress
      // are used to add navigation functions to these buttons as defined elsewhere.
      rightButtonTitle: 'Right',
      onRightButtonPress: () => this.openRight(),
      leftButtonTitle: 'Left',
      onLeftButtonPress: () => this.openLeft()
      // Here you can set optional parameters in addition to the route.
    });
  }

  openRight() {
    this.props.navigator.push({
      title: 'Right Page',
      component: Right
    });
  }

  openLeft() {
    this.props.navigator.push({
      title: 'Left Page',
      component: Left
    });
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.pageText}>Landing Page</Text>
        <TouchableHighlight
          // In this instance the navigation function openMain() is being called on the press of a button in the view.
          onPress={() => this.openMain()}
          style={styles.button}
          underlayColor='#24CE84'
        >
          <Text style={styles.buttonText}>Press for Main Page</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Landing;
