import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import SecurityScreen from '../screens/SecurityScreen';
import MechanicalScreen from '../screens/MechanicalScreen';
import HullAndRiggingScreen from '../screens/HullAndRiggingScreen';
import ElectricalScreen from '../screens/ElectricalScreen';

export default TabNavigator(
  {
    Security: {
      screen: SecurityScreen,
    },
    Mechanical: {
      screen: MechanicalScreen,
    },
    Electrical: {
      screen: ElectricalScreen,
    },
    HullAndRigging: {
      screen: HullAndRiggingScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Security':
            iconName =
              Platform.OS === 'ios'
                ? `ios-help-buoy${focused ? '' : '-outline'}`
                : 'md-help-buoy';
            break;
          case 'Mechanical':
            iconName = Platform.OS === 'ios' ? `ios-construct${focused ? '' : '-outline'}` : 'md-construct';
            break;
          case 'Electrical':
            iconName = Platform.OS === 'ios' ? `ios-flash${focused ? '' : '-outline'}` : 'md-flash';
            break;
          case 'HullAndRigging':
            iconName =
              Platform.OS === 'ios' ? `ios-boat${focused ? '' : '-outline'}` : 'md-boat';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
