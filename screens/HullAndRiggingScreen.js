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

export default class HullAndRiggingScreen extends React.Component {
  static navigationOptions = {
    title: 'Coque et Gréement',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showInspectRudder: false,
          showInspectHull: false,
          showInspectKeel: false,
          isLoading: true
      };
  }

    componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:InspectRudder:editable').then((value) => {
      if (value === null){ value = '{ "Condition": "red" }' }
      this.setState({
        InspectRudderColour: JSON.parse(value).Condition
      });
      AsyncStorage.getItem('@MyNoteBoatStore:InspectHull:editable').then((value) => {
        if (value === null){ value = '{ "Condition": "red" }' }
        this.setState({
          isLoading: false,
          InspectHullColour: JSON.parse(value).Condition
        });
        AsyncStorage.getItem('@MyNoteBoatStore:InspectKeel:editable').then((value) => {
          if (value === null){ value = '{ "Condition": "red" }' }
          this.setState({
            isLoading: false,
            InspectKeelColour: JSON.parse(value).Condition
          });
        });
      });
    });
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
    if (this.state.isLoading) {
      return <View><NativeText>Loading...</NativeText></View>;
    }
    const { navigate } = this.props.navigation;
    return (
      <View>
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
            cy="315"
            r="10"
            fill={this.state.InspectRudderColour}
            onPress={this.toggleInspectRudder}
          />
          { this.state.showInspectRudder &&
            <G x="10" y="325" onPress={() => navigate('InspectRudder', {})}>
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
              >Inspection du Gouvernail</Text>
            </G>
          }

          <Circle
            cx="130"
            cy="355"
            r="10"
            fill={this.state.InspectHullColour}
            onPress={this.toggleInspectHull}
          />
          { this.state.showInspectHull &&
            <G x="70" y="365" onPress={() => navigate('InspectHull', {})}>
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
            cx="185"
            cy="405"
            r="10"
            fill={this.state.InspectKeelColour}
            onPress={this.toggleInspectKeel}
          />
          { this.state.showInspectKeel &&
            <G x="90" y="415" onPress={() => navigate('InspectKeel', {})}>
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
