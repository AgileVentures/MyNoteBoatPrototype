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

export default class MechanicalScreen extends React.Component {
  static navigationOptions = {
    title: 'Mécanique',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showTestVHF: false,
          showLifeJackets: false,
          showRaft: false
      };
  }

  toggleTestVHF = () => {
      this.setState({showTestVHF: !this.state.showTestVHF});
  };
  toggleLifeJackets = () => {
      this.setState({showLifeJackets: !this.state.showLifeJackets});
  };
  toggleRaft = () => {
    this.setState({showRaft: !this.state.showRaft});
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
            cx="190"
            cy="330"
            r="10"
            fill="red"
            onPress={this.toggleTestVHF}
          />
          { this.state.showTestVHF &&
            <G x="190" y="300" onPress={() => navigate('TestVHF', {})}>
              <Rect
                width="80"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
               textAnchor="start"
               fontWeight="bold"
               fontSize="16"
               fill="blue"
              >Test VHF</Text>
            </G>
          }

          <Circle
            cx="140"
            cy="280"
            r="10"
            fill="green"
            onPress={this.toggleLifeJackets}
          />
          { this.state.showLifeJackets &&
            <G x="140" y="250" onPress={() => navigate('LifeJackets', {})}>
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
              >Inspection de Brassières</Text>
            </G>
          }

          <Circle
            cx="100"
            cy="240"
            r="10"
            fill="red"
            onPress={this.toggleRaft}
          />
          { this.state.showRaft &&
            <G x="100" y="210" onPress={() => navigate('Raft', {})}>
              <Rect
                width="140"
                height="20"
                fill="rgba(250, 250, 250, 0)"
              />
              <Text
               textAnchor="start"
               fontWeight="bold"
               fontSize="16"
               fill="blue"
              >Contrôle du radeau</Text>
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
