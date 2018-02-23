import React from 'react';
import { Image as NativeImage, Text as NativeText, TouchableOpacity, StyleSheet, View } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import NavigationBar from 'react-native-navbar';

export default class DetenteScreen extends React.Component {


    static navigationOptions = {
        title: 'Détente',
      };
    
    constructor () {
        super(...arguments);
        this.state = {
            isLoading: true
        };
    }


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
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
