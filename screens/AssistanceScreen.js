import React from 'react';
import { Image as NativeImage, Text as NativeText, TouchableOpacity, StyleSheet, View } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import NavigationBar from 'react-native-navbar';

export default class AssistanceScreen extends React.Component {

    static navigationOptions = {
        title: 'Assistance',
      };
    
    constructor () {
        super(...arguments);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
        });
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
            
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <ResponsiveImage 
                    source={{uri: 'http://julien.grimonet.fr/images/en_construction.png'}} 
                    initWidth="360" initHeight="129"/>
            </View> 
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <ResponsiveImage 
                    source={{uri: 'https://i.giphy.com/media/4ROqHzXxBIIGk/giphy.webp'}} 
                    initWidth="360" initHeight="201"/>
            </View> 

        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
