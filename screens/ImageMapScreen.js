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
            cy="290"
            r="5"
            fill="red"
            onPress={this.toggle}
          />
          { this.state.showTheThing &&
            <Text
                x="200"
                y="300"
                textAnchor="middle"
                fontWeight="bold"
                fontSize="16"
                fill="blue"
            >Test VHF</Text>
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