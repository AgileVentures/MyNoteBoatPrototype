import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NavigationTabNav from './NavigationTabNav';
import MainScreen from './../screens/MainScreen';
import WindlassTestScreen from './../screens/WindlassTestScreen';
// import LifeJacketsScreen from './../screens/LifeJacketsScreen';
// import RaftScreen from './../screens/RaftScreen';

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
      screen: MainScreen,
    },
    Checklists: {
      screen: NavigationTabNav,
    },
    Entretien: {
      screen: MainTabNavigator,
    },
    Navigation: {
      screen: NavigationTabNav,
    },
    WindlassTest: {
      screen: WindlassTestScreen,
    },
    LifeRaftControl: {
      screen: LifeRaftControlScreen,
    },
    LifeRingControl: {
      screen: LifeRingControlScreen,
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
    EngineTest: {
      screen: EngineTestScreen,
    },
    InspectClutch: {
      screen: InspectClutchScreen,
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
