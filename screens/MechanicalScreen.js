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
          showTheThing: false
      };
  }

  toggle = () => {
      this.setState({showTheThing: !this.state.showTheThing});
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
            cy="290"
            r="10"
            fill="red"
            onPress={this.toggle}
          />
          { this.state.showTheThing &&
            <Text
                x="220"
                y="300"
                textAnchor="middle"
                fontWeight="bold"
                fontSize="16"
                fill="blue"
                onPress={() => navigate('TestVHF', {})}
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