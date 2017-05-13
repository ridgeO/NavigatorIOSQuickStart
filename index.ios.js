'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Landing from './components/Landing.js';

export default class NavigatorIOSQuickStart extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Landing,
          title: 'Landing Page'
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('NavigatorIOSQuickStart', () => NavigatorIOSQuickStart);
