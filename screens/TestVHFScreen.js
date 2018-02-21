import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var TestVHF = t.struct({
  installed: t.Date,              // a required date
  checked: t.Date,               // a required date
  cost: t.maybe(t.String),     // an optional string
  rememberMe: t.Boolean        // a boolean
});

var options = {}; // optional rendering options (see documentation)


export default class TestVHFScreen extends React.Component {
  static navigationOptions = {
    title: 'Test VHF',
  };

  constructor (props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  };

  render() {
    return (
      <View style={styles.container}>
         <Form
          ref="form"
          type={TestVHF}
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
