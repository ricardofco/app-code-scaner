import React, { Component } from 'react';
import CONSTANTS from '../settings/app.constants';
import CONSTANTS_COLORS from '../settings/app.constants.colors';

import NavigationService from '../services/NavigationService';

//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/Camera';

const BasicStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: CONSTANTS.HOME_TITLE,
        headerStyle: {
          backgroundColor: CONSTANTS_COLORS.PRIMARY_COLOR
        },
        headerTintColor: CONSTANTS_COLORS.HEADER_TITLE_COLOR
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        title: CONSTANTS.DETAIL,
        headerStyle: {
          backgroundColor: "#000"
        },
        headerTintColor: "#fff"
      }
    }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Scan: BasicStack
    },
    {
      initialRouteName: 'Scan'
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
