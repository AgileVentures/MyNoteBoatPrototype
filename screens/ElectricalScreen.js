import React from 'react';
import { AsyncStorage, Dimensions, Image as NativeImage, Text as NativeText, TouchableOpacity, StyleSheet, View } from 'react-native';
import Svg, {
    Circle,
    Path,
    Rect,
    G,
    Text,
    ClipPath,
    Defs,
    Image
} from 'react-native-svg';
import { Font } from 'expo';

import NavigationBar from 'react-native-navbar';
export default class ElectricalScreen extends React.Component {
  static navigationOptions = {
    title: 'Electricité',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showInspectBattery: false,
          showTestNavLights: false,
          isLoading: true
      };
  }

  componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:InspectBattery:editable').then((value) => {
      if (value === null){ value = '{ "Condition": "red" }' }
      this.setState({
        InspectBatteryColour: JSON.parse(value).Condition
      });
      AsyncStorage.getItem('@MyNoteBoatStore:TestNavLights:editable').then((value) => {
        if (value === null){ value = '{ "Condition": "red" }' }
        this.setState({
          isLoading: false,
          TestNavLightsColour: JSON.parse(value).Condition
        });
      });
    });
  }

  toggleInspectBattery = () => {
      this.setState({showInspectBattery: !this.state.showInspectBattery});
  };
  toggleTestNavLights = () => {
      this.setState({showTestNavLights: !this.state.showTestNavLights});
  };

  render() {
    if (this.state.isLoading) {
      return <View><NativeText>Loading...</NativeText></View>;
    }
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <NavigationBar
        tintColor="#1C87B2"
        title={<NativeImage
                 source={require('../assets/images/mynoteboat.png')}
                />
              }
        leftButton={<TouchableOpacity onPress={() => navigate('Main', {})}>
                <NativeImage
                 source={require('../assets/images/splash-64.png')}
                />
              </TouchableOpacity>}
      />
        <Svg
            height="800"
            width="480"
        >
          <Image
            x="35"
            y="5"
            height="350"
            width="244"
            preserveAspectRatio="xMidYMid"
            href={require('../assets/images/mynoteboat-sailboat.png')}
          />
          <Circle
            cx="120"
            cy="255"
            r="10"
            fill={this.state.InspectBatteryColour}
            onPress={this.toggleInspectBattery}
          />
          { this.state.showInspectBattery &&
            <G x="110" y="225" onPress={() => navigate('InspectBattery', {})}>
              <Rect
                width="180"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
               textAnchor="start"
               fontWeight="bold"
               fontSize="16"
               fill="blue"
              >Inspection de la batterie</Text>
            </G>
          }

          <Circle
            cx="245"
            cy="320"
            r="10"
            fill={this.state.TestNavLightsColour}
            onPress={this.toggleTestNavLights}
          />
          { this.state.showTestNavLights &&
            <G x="205" y="270" onPress={() => navigate('TestNavLights', {})}>
              <Rect
                width="120"
                height="40"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
                  textAnchor="start"
                  fontWeight="bold"
                  fontSize="16"
                  fill="blue"
              >Essai des feux</Text>
              <Text
                  x="5"
                  y="20"
                  textAnchor="start"
                  fontWeight="bold"
                  fontSize="16"
                  fill="blue"
              >de navigation</Text>
            </G>
          }

        </Svg>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
