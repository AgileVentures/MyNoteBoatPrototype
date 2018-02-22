import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
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

export default class ElectricalScreen extends React.Component {
  static navigationOptions = {
    title: 'Electricité',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showInspectBattery: false
      };
  }

  toggleInspectBattery = () => {
      this.setState({showInspectBattery: !this.state.showInspectBattery});
  };
  toggleTestNavLights = () => {
      this.setState({showTestNavLights: !this.state.showTestNavLights});
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Svg
            height="972"
            width="578"
        >
          <Image
            x="50"
            y="5"
            height="400"
            width="244"
            preserveAspectRatio="xMidYMid slice"
            href={require('../assets/images/mynoteboat-sailboat.png')}
          />
          <Circle
            cx="150"
            cy="300"
            r="10"
            fill="red"
            onPress={this.toggleInspectBattery}
          />
          { this.state.showInspectBattery &&
            <G x="150" y="270" onPress={() => navigate('InspectBattery', {})}>
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
            cx="290"
            cy="370"
            r="10"
            fill="green"
            onPress={this.toggleTestNavLights}
          />
          { this.state.showTestNavLights &&
            <G x="260" y="320" onPress={() => navigate('TestNavLights', {})}>
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
              >Tester les feux</Text>
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
