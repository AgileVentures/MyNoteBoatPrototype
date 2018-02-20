import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryStack, VictoryArea } from 'victory-native';
import Svg, {
    Circle,
    Path,
    Rect,
    G,
    Text,
    ClipPath,
    Defs
} from 'react-native-svg';
import { Font } from 'expo';

export default class ImageMapScreen extends React.Component {
  static navigationOptions = {
    title: '<Svg />',
  };

  constructor () {
      super(...arguments);
      this.state = {
          showTheThing: false
      };
  }

  toggle = () => {
      this.setState({showTheThing: !this.state.showTheThing});
  };


  render() {
    return (
      <View style={styles.container}>
        <Svg
            height="100"
            width="100"
        >
          <Circle
            style="display: none;"
            visibility="hidden"
            cx="50%"
            cy="50%"
            r="38%"
            fill="red"
            onPress={this.toggle}
          />
        </Svg>

        { this.state.showTheThing &&
        <Svg width={Dimensions.get('window').width} height={50}>
          <Text
            fill="#fff"
            stroke="#000"
            fontSize={15}
            fontFamily={Font.processFontFamily('space-mono')}
            x={25}
            y={15}
            style="width:0, height:0"
            visibility="hidden">
            drawn with react-native-svg
          </Text>
        </Svg>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});