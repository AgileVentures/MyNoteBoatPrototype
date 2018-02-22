import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainScreen from './../screens/MainScreen';
import TestVHFScreen from './../screens/TestVHFScreen';
import LifeJacketsScreen from './../screens/LifeJacketsScreen';
import RaftScreen from './../screens/RaftScreen';

import LifeRaftControlScreen from './../screens/LifeRaftControlScreen';
import RudderInspectScreen from './../screens/RudderInspectScreen';
import InspectBatteryScreen from './../screens/InspectBatteryScreen';
import TestNavLightsScreen from './../screens/TestNavLightsScreen';
import InspectHullScreen from './../screens/InspectHullScreen';
import InspectKeelScreen from './../screens/InspectKeelScreen';
import InspectRudderScreen from './../screens/InspectRudderScreen';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Entretien: {
      screen: MainTabNavigator,
    },
    TestVHF: {
      screen: TestVHFScreen,
    },
    LifeJackets: {
      screen: LifeJacketsScreen,
    },
    Raft: {
      screen: RaftScreen,
    },
    LifeRaftControl: {
      screen: LifeRaftControlScreen,
    },
    RudderInspect: {
      screen: RudderInspectScreen,
    },
    InspectBattery: {
      screen: InspectBatteryScreen,
    },
    TestNavLights: {
      screen: TestNavLightsScreen,
    },
    InspectHull: {
      screen: InspectHullScreen,
    },
    InspectKeel: {
      screen: InspectKeelScreen,
    },
    InspectRudder: {
      screen: InspectRudderScreen,
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
