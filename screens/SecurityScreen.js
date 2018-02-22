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

export default class SecurityScreen extends React.Component {
  static navigationOptions = {
    title: 'Sécurité',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showLifeRaftControl: false,
          showLiferingControl: false,
      };
  }

  toggleLiferingControl = () => {
      this.setState({showLiferingControl: !this.state.showLiferingControl});
  };
  toggleLifeRaftControl = () => {
      this.setState({showLifeRaftControl: !this.state.showLifeRaftControl});
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
            onPress={this.toggleLiferingControl}
          />
          { this.state.showLiferingControl &&
            <G x="80" y="290" onPress={() => navigate('LiferingControl', {})}>
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
              >Contrôl de la Bouée Couronne</Text>
            </G>
          }

          <Circle
            cx="100"
            cy="240"
            r="10"
            fill="green"
            onPress={this.toggleLifeRaftControl}
          />
          { this.state.showLifeRaftControl &&
            <G x="100" y="210" onPress={() => navigate('LifeRaftControl', {})}>
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
              >Contrôl du radeau</Text>
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
