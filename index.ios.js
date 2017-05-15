'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import Landing from './components/Landing.js';

export default class NavigatorIOSQuickStart extends Component {
  render() {
    return (
      // This sets up the Navigator for the whole app.
      <NavigatorIOS
        // This sets up the first component your app will render, and its title as displayed in the navbar.
        initialRoute={{
          component: Landing,
          title: 'Landing Page'
        }}
        // Here you can set optional parameters in addition to the route.
        // Uncomment the following to hide the navbar by default.
        // navigationBarHidden={true}
        // Uncomment the following to hide the line separator under the navbar.
        // shadowHidden={true}
        // Uncomment the following to change the default color used for buttons in the navbar.
        // tintColor='color'
        // Uncomment the following to change the default color used for navbar titles.
        // titleTextColor='color'
        // Unccoment the following to make the navbar translucent by default.
        // translucent={true}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('NavigatorIOSQuickStart', () => NavigatorIOSQuickStart);
