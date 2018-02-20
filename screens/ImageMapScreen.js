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
          hover: false
      };
  }

  toggle = () => {
      this.setState({hover: !this.state.hover});
  };


  render() {
    return (
      <View style={styles.container}>
        <Svg
            height="100"
            width="100"
        >
          <Circle
            cx="50%"
            cy="50%"
            r="38%"
            fill="red"
            onPress={() => alert('Press on Circle')}
          />
        </Svg>

        <Svg height="120" width="120">
            <Defs>
                <ClipPath id="clip">
                    <Circle r="80" cx="50%" cy="50%"/>
                </ClipPath>
            </Defs>
            <G>
                <G>
                    <Path
                        d="M50,5L20,99L95,39L5,39L80,99z"
                        clipPath="url(#clip)"
                        stroke={this.state.hover ? 'rgba(10, 10, 10, 0.5)' : 'black'}
                        fill={this.state.hover ? 'pink' : 'red'}
                        strokeWidth="6"
                        delayPressIn={0}
                        onPressIn={this.toggle}
                        onPressOut={this.toggle}
                        x="0"
                        y="0"
                        scale="1.2"
                    />
                </G>
            </G>
        </Svg>

        <Svg width={Dimensions.get('window').width} height={50}>
          <Text
            fill="#fff"
            stroke="#000"
            fontSize={15}
            fontFamily={Font.processFontFamily('space-mono')}
            x={25}
            y={15}
            style="display:hidden;">
            drawn with react-native-svg
          </Text>
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