import React from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Conditions = t.enums({
  green: 'Tres Bon Etat',
  orange: 'Correc I',
  red: 'Defecteux'
});

var LifeRaftControl = t.struct({
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

export default class LifeRaftControlScreen extends React.Component {
  static navigationOptions = {
    title: 'Contrôl du radeau',
  };

  constructor (props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  state = {
    isLoading: true
  };

  componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:LifeRaftControl:editable').then((value) => {
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
        await AsyncStorage.setItem('@MyNoteBoatStore:LifeRaftControl:editable', JSON.stringify(value));
        await AsyncStorage.setItem('@MyNoteBoatStore:LifeRaftControl:fixed', new Date().toLocaleDateString('fr-FR'));
      } catch (error) {
        console.log("could not save data")
        console.log(error)
      }
      navigate('Security', {})
    }
  };

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    return (
      <ScrollView style={styles.container}>
         <Text>Inspection du visuel de la coquille du radeau et du bout de déclenchement de la bouteille.</Text>
         <Text>Vérification de la fin de validité de l’inspection. </Text>
         <Text>Contrôle du bon saisissage de l’ensemble sur son berceau.</Text>
         <Text style={{fontWeight: "bold"}}>Last Control:</Text><Text> 23 mai 2017</Text>
         <Text style={{fontWeight: "bold"}}>Fréquence:</Text><Text> 1 / an avant la mise à l’eau</Text>
         <Text style={{fontWeight: "bold"}}>Today:</Text><Text> {new Date().toLocaleDateString('fr-FR')}</Text>
         <Form
          ref="form"
          type={LifeRaftControl}
          value={this.state.value}
          // onChange={this.onChange}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}


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
