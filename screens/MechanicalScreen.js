import React from 'react';
import { AsyncStorage, Dimensions, Text as NativeText, StyleSheet, View } from 'react-native';
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
          showWindlassTest: false,
          showRudderCommandTest: false,
          showClutchTest: false,
          showEngineTest: false,
          isLoading: true
      };
  }

  componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:ClutchTest:editable').then((value) => {
      if (value === null){ value = '{ "Condition": "red" }' }
      this.setState({
        isLoading: false,
        ClutchTestColour: JSON.parse(value).Condition
      });
    });
  }

  toggleWindlassTest = () => {
      this.setState({showWindlassTest: !this.state.showWindlassTest});
  };
  toggleRudderCommandTest = () => {
      this.setState({showRudderCommandTest: !this.state.showRudderCommandTest});
  };
  toggleClutchTest = () => {
    this.setState({showClutchTest: !this.state.showClutchTest});
  };
    toggleEngineTest = () => {
      this.setState({showEngineTest: !this.state.showEngineTest});
  };

  render() {
    if (this.state.isLoading) {
      return <View><NativeText>Loading...</NativeText></View>;
    }
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
            onPress={this.toggleWindlassTest}
          />
          { this.state.showWindlassTest &&
            <G x="190" y="300" onPress={() => navigate('WindlassTest', {})}>
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
              >Essai du Guindeau</Text>
            </G>
          }

          <Circle
            cx="140"
            cy="280"
            r="10"
            fill="green"
            onPress={this.toggleRudderCommandTest}
          />
          { this.state.showRudderCommandTest &&
            <G x="140" y="250" onPress={() => navigate('RudderCommandTest', {})}>
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
              >Essai de la Commande du Gouvernail</Text>
            </G>
          }

          <Circle
            cx="100"
            cy="240"
            r="10"
            fill={this.state.ClutchTestColour}
            onPress={this.toggleClutchTest}
          />
          { this.state.showClutchTest &&
            <G x="100" y="210" onPress={() => navigate('ClutchTest', {})}>
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
              >"Essai de l'embrayage"</Text>
            </G>
          }

          <Circle
            cx="80"
            cy="320"
            r="10"
            fill="orange"
            onPress={this.toggleEngineTest}
          />
          { this.state.showEngineTest &&
            <G x="80" y="290" onPress={() => navigate('EngineTest', {})}>
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
              >Essai du Moteur</Text>
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
