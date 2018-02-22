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

export default class HullAndRiggingScreen extends React.Component {
  static navigationOptions = {
    title: 'Coque et Gréement',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showInspectRudder: false
      };
      this.state = {
          showInspectHull: false
      };
      this.state = {
          showInspectKeel: false
      };
  }

  toggleInspectRudder = () => {
      this.setState({showInspectRudder: !this.state.showInspectRudder});
  };
  toggleInspectHull = () => {
      this.setState({showInspectHull: !this.state.showInspectHull});
  };
    toggleInspectKeel = () => {
      this.setState({showInspectKeel: !this.state.showInspectKeel});
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
            cx="80"
            cy="320"
            r="10"
            fill="orange"
            onPress={this.toggleInspectRudder}
          />
          { this.state.showInspectRudder &&
            <G x="80" y="290" onPress={() => navigate('InspectRudder', {})}>
              <Rect
                width="185"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
                  textAnchor="start"
                  fontWeight="bold"
                  fontSize="16"
                  fill="blue"
              >Inspection du gouvernail</Text>
            </G>
          }

          <Circle
            cx="130"
            cy="360"
            r="10"
            fill="green"
            onPress={this.toggleInspectHull}
          />
          { this.state.showInspectHull &&
            <G x="130" y="330" onPress={() => navigate('InspectHull', {})}>
              <Rect
                width="170"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
                  textAnchor="start"
                  fontWeight="bold"
                  fontSize="16"
                  fill="blue"
              >Inspection de la Coque</Text>
            </G>
          }

          <Circle
            cx="170"
            cy="400"
            r="10"
            fill="green"
            onPress={this.toggleInspectKeel}
          />
          { this.state.showInspectKeel &&
            <G x="170" y="370" onPress={() => navigate('InspectKeel', {})}>
              <Rect
                width="170"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
                  textAnchor="start"
                  fontWeight="bold"
                  fontSize="16"
                  fill="blue"
              >Inspection des Boulons de Quille</Text>
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
