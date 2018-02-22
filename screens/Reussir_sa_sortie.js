import React, {  Component  } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, Alert } from 'react-native';

import CheckBox from 'react-native-check-box';

export default class Reussir_sa_sortie extends Component {
    static navigationOptions = {
      title: 'Réussir sa sortie',
    };

    constructor () {
        super(...arguments);
        this.state = {
            checked: false
        };
 
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.line}/>
                    <Text style={styles.heading}>respecter</Text>
                    <View style={styles.line}/>

                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"les privilèges "}
                        />
                    </View>, 
                    <View key={1}style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"les vitesses"}
                        />
                    </View>,
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"les zones de navigation"}
                        />
                    </View>
                    ]}
                    <View style={styles.line}/>
                    <Text style={styles.heading}>confort de la navigation</Text>
                    <View style={styles.line}/>
                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"emporter eau et nourriture"}
                        />
                    </View>,
                    <View key={1} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"emporter d’autres vêtements"}
                        />
                    </View>,                    
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"prévenir de votre départ"}
                        />
                    </View>,
                    <View key={3} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"écourter la sortie si nécessaire"}
                        />
                    </View>
                    ]}

                </ScrollView>
            </View>

            );

        }

   
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.9,
        backgroundColor: 'navy',
    },
    heading: {
        fontWeight: "bold",
        textShadowRadius: 25,
        textShadowColor: "navy"

    }
})