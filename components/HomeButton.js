import React from 'react-native';
const {
  Component,
  Image,
  TouchableOpacity
} = React;

export default class HomeButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={{ uri: require('../assets/images/splash.png') }}
          style={[{ width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}