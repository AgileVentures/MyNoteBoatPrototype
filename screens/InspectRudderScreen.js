import React from 'react';
import { AsyncStorage, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Conditions = t.enums({
  green: 'Tres Bon Etat',
  orange: 'Correc I',
  red: 'Defecteux'
});

var InspectRudder = t.struct({
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

export default class InspectRudderScreen extends React.Component {
  static navigationOptions = {
    title: 'Inspection du gouvernail',
  };

  constructor (props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  state = {
    isLoading: true
  };

  componentDidMount() {
    AsyncStorage.getItem('@MyNoteBoatStore:InspectRudder:editable').then((value) => {
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
        await AsyncStorage.setItem('@MyNoteBoatStore:InspectRudder:editable', JSON.stringify(value));
        await AsyncStorage.setItem('@MyNoteBoatStore:InspectRudder:fixed', new Date().toLocaleDateString('fr-FR'));
      } catch (error) {
        console.log("could not save data")
        console.log(error)
      }
      navigate('HullAndRigging', {})
    }
  };

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    const { navigate } = this.props.navigation;
    return (
      <View>
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
      <Text style={styles.heading}>Inspection de la batterie</Text>
         <Text style={styles.itemText}>Inspection visuelle du gouvernail.</Text>
         <Text style={styles.itemText}>Rechercher une déformation ou des Contrôle le jeu de la mèche dans l’axe.</Text>
         <Text style={styles.itemText}>Inspection visuelle des paliers.</Text>
         <View style={styles.lineItem}>
           <Text style={{fontWeight: "bold"}}>Last Control:</Text><Text style={styles.itemText}> 23 mai 2017</Text>
           </View>
           <View style={styles.lineItem}>
           <Text style={{fontWeight: "bold"}}>Fréquence:</Text><Text style={styles.itemText}> 1 / an avant la mise à l’eau</Text>
           </View>
           <View style={styles.lineItem}>
           <Text style={{fontWeight: "bold"}}>Today:</Text><Text style={styles.itemText}> {new Date().toLocaleDateString('fr-FR')}</Text>
           </View>
        <Form
          ref="form"
          type={InspectRudder}
          value={this.state.value}
          // onChange={this.onChange}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Valider</Text>
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
  },
  lineItem: {
    flexGrow: 1, 
    // justifyContent: 'center', 
    // alignItems: 'center', 
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,

  },
  itemKeys: {
    fontWeight: "bold",
    fontSize: 15
  },
  itemText: {
    fontSize: 15
  }, 
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10
  }
});
