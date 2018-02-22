import React from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Conditions = t.enums({
  green: 'Tres Bon Etat',
  orange: 'Correc I',
  red: 'Defecteux'
});

var RudderCommandTest = t.struct({
  Condition: Conditions,              // a required enum
  Commentary: t.maybe(t.String),               // a required string
  Price: t.maybe(t.String)     // an optional string
});

const options = {
  fields: {
    Condition: {
      nullOption: {value: '', text: "Répondre s'il vous plait"}
    }
  },
  auto: 'placeholders'
};

export default class RudderCommandTestScreen extends React.Component {
  static navigationOptions = {
    title: 'Essai de la commande de barre',
  };

  constructor (props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    // var value = await this.loadStoredData()
    // console.log('this is what we are setting');
    // console.log(value);
    // this.state = {
    //   value: value //{ checked: "recently",
    //            //installed: "long ago" }
    // };
  }

  state = {
    isLoading: true
  };

  componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:RudderCommandTest:editable').then((value) => {
      if (value === null){ value = "{}" }
      this.setState({
        isLoading: false,
        value: JSON.parse(value)
      });
    });
  }

  async onPress() {
    const { navigate } = this.props.navigation;
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log("received form input");
      console.log(value); // value here is an instance of Person
      try {
        await AsyncStorage.setItem('@MyNoteBoatStore:RudderCommandTest:editable', JSON.stringify(value));
        await AsyncStorage.setItem('@MyNoteBoatStore:RudderCommandTest:fixed', new Date().toLocaleDateString('fr-FR'));
      } catch (error) {
        console.log("could not save data")
        console.log(error)
      }
      navigate('Mechanical', {})
    }
  };

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavigationBar
          tintColor="#1C87B2"
          title={<Image 
                   source={require('../assets/images/mynoteboat.png')}
                  />
                }
          leftButton={<TouchableOpacity onPress={() => navigate('Main', {})}>
                  <Image 
                   source={require('../assets/images/splash-64.png')}
                  />
                </TouchableOpacity>}
        />
      <ScrollView style={styles.container}>
        <Text>Inspection visuelle de l’ensemble. </Text>
        <Text>S’assurer qu’il n’y a pas de jeu excessif entre les pièces mobiles.</Text>
        <Text>S’assurer qu’il n’y a pas de fuite si la commande est hydraulique. </Text>
        <Text>Essaye la barre sur les deux bords, s’assurer que le transmission est douce</Text>
        <Text style={{fontWeight: "bold"}}>Last Control:</Text><Text> 23 mai 2017</Text>
         <Text style={{fontWeight: "bold"}}>Fréquence:</Text><Text>Avant chaque sortie</Text>
         <Text style={{fontWeight: "bold"}}>Today:</Text><Text> {new Date().toLocaleDateString('fr-FR')}</Text>
         <Form
          ref="form"
          type={RudderCommandTest}
          value={this.state.value}
          // onChange={this.onChange}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>  
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
