import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NavigationTabNav from './NavigationTabNav';
import MainScreen from './../screens/MainScreen';
import WindlassTestScreen from './../screens/WindlassTestScreen';
import RudderCommandTestScreen from './../screens/RudderCommandTestScreen';
import ClutchTestScreen from './../screens/ClutchTestScreen';

import LifeRaftControlScreen from './../screens/LifeRaftControlScreen';
import LifeRingControlScreen from './../screens/LifeRingControlScreen';
// import RudderInspectScreen from './../screens/RudderInspectScreen';
import InspectBatteryScreen from './../screens/InspectBatteryScreen';
import TestNavLightsScreen from './../screens/TestNavLightsScreen';
import InspectHullScreen from './../screens/InspectHullScreen';
import EngineTestScreen from './../screens/EngineTestScreen';
import InspectKeelScreen from './../screens/InspectKeelScreen';
import InspectRudderScreen from './../screens/InspectRudderScreen';
import InspectClutchScreen from './../screens/InspectClutchScreen';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen, navigationOptions: { header: null }
    },
    Checklists: {
      screen: NavigationTabNav, navigationOptions: { header: null }
    },
    Entretien: {
      screen: MainTabNavigator, navigationOptions: { header: null }
    },
    Navigation: {
      screen: NavigationTabNav, navigationOptions: { header: null }
    },
    WindlassTest: {
      screen: WindlassTestScreen, navigationOptions: { header: null }
    },
    LifeRaftControl: {
      screen: LifeRaftControlScreen, navigationOptions: { header: null }
    },
    LifeRingControl: {
      screen: LifeRingControlScreen, navigationOptions: { header: null }
    },
    InspectBattery: {
      screen: InspectBatteryScreen, navigationOptions: { header: null }
    },
    TestNavLights: {
      screen: TestNavLightsScreen, navigationOptions: { header: null }
    },
    InspectHull: {
      screen: InspectHullScreen, navigationOptions: { header: null }
    },
    InspectKeel: {
      screen: InspectKeelScreen, navigationOptions: { header: null }
    },
    InspectRudder: {
      screen: InspectRudderScreen, navigationOptions: { header: null }
    },
    EngineTest: {
      screen: EngineTestScreen, navigationOptions: { header: null }
    },
    InspectClutch: {
      screen: InspectClutchScreen, navigationOptions: { header: null }
    },
    RudderCommandTest: {
      screen: RudderCommandTestScreen,
    },
    ClutchTest: {
      screen: ClutchTestScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
