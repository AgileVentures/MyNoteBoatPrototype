import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class TestVHFScreen extends React.Component {
  static navigationOptions = {
    title: 'Test VHF',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={()=>alert('entered text')}/>
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
