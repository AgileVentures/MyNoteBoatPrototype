import React from 'react';
import { AsyncStorage, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var WindlassTest = t.struct({
  installed: t.String,              // a required string
  checked: t.String,               // a required string
  cost: t.maybe(t.String)     // an optional string
});

const options = {
  // fields: {
  //   installed: {
  //     config: {
  //       format: date => format(date, "DD-MM-YYYY")
  //     }
  //   }
  // }
};

export default class WindlassTestScreen extends React.Component {
  static navigationOptions = {
    title: 'Essai du Guindeau',
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
    AsyncStorage.getItem('@MyNoteBoatStore:WindlassTest').then((value) => {
      if (value === null){ value = "{}" }
      this.setState({
        isLoading: false,
        value: JSON.parse(value)
      });
    });
  }

  async loadStoredData() {
    var value = "{}"
    try {
      value = await AsyncStorage.getItem('@MyNoteBoatStore:WindlassTest');
      if (value !== null){
        console.log("loaded some data");
        console.log(value);
      }
    } catch (error) {
      value = "{}"
      console.log("could not retrieve data")
      console.log(error)
    }
    return JSON.parse(value);
  }

  async onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log("received form input");
      console.log(value); // value here is an instance of Person
      try {
        await AsyncStorage.setItem('@MyNoteBoatStore:WindlassTest', JSON.stringify(value));
      } catch (error) {
        console.log("could not save data")
        console.log(error)
      }
    }
  };

  // onChange(value) {
  //   this.setState({value});
  // }

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    return (
      <View style={styles.container}>
        <Text>Inspection visuelle du guideau. </Text>
        <Text>Inspection visuelle de la commande du guideau et du système de secours.</Text>
        <Text>Essai de guideau. Dévirer et virer l’ancre.</Text>
        <Text>Contrôle du système de saisissage de l’ancre.</Text>
         <Text style={{fontWeight: "bold"}}>Last Control:</Text><Text> 23 mai 2017</Text>
         <Text style={{fontWeight: "bold"}}>Fréquence:</Text><Text> 1 / an avant la mise à l’eau</Text>
         <Text style={{fontWeight: "bold"}}>Today:</Text><Text> {new Date().toLocaleDateString('fr-FR')}</Text>
         <Form
          ref="form"
          type={WindlassTest}
          value={this.state.value}
          // onChange={this.onChange}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
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
    justifyContent: 'center',
    marginTop: 50,
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
