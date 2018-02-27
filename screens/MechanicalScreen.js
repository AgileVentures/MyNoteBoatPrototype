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
      AsyncStorage.getItem('@MyNoteBoatStore:WindlassTest:editable').then((value) => {
        if (value === null){ value = '{ "Condition": "red" }' }
          this.setState({
            isLoading: false,
            WindlassTestColour: JSON.parse(value).Condition
          });
        AsyncStorage.getItem('@MyNoteBoatStore:RudderCommandTest:editable').then((value) => {
          if (value === null){ value = '{ "Condition": "red" }' }
            this.setState({
              isLoading: false,
              RudderCommandTestColour: JSON.parse(value).Condition
            });
          AsyncStorage.getItem('@MyNoteBoatStore:EngineTest:editable').then((value) => {
            if (value === null){ value = '{ "Condition": "red" }' }
              this.setState({
                isLoading: false,
                EngineTestColour: JSON.parse(value).Condition
              });
            });
          });
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
            cx="170"
            cy="290"
            r="10"
            fill={this.state.WindlassTestColour}
            onPress={this.toggleWindlassTest}
          />
          { this.state.showWindlassTest &&
            <G x="170" y="260" onPress={() => navigate('WindlassTest', {})}>
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
            cx="125"
            cy="245"
            r="10"
            fill={this.state.RudderCommandTestColour}
            onPress={this.toggleRudderCommandTest}
          />
          { this.state.showRudderCommandTest &&
            <G x="20" y="215" onPress={() => navigate('RudderCommandTest', {})}>
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
            cx="90"
            cy="200"
            r="10"
            fill={this.state.ClutchTestColour}
            onPress={this.toggleClutchTest}
          />
          { this.state.showClutchTest &&
            <G x="90" y="170" onPress={() => navigate('ClutchTest', {})}>
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
              >Essai de l'embrayage</Text>
            </G>
          }

          <Circle
            cx="80"
            cy="290"
            r="10"
            fill={this.state.EngineTestColour}
            onPress={this.toggleEngineTest}
          />
          { this.state.showEngineTest &&
            <G x="50" y="300" onPress={() => navigate('EngineTest', {})}>
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
