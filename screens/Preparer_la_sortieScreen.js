import React, {  Component  } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, Alert } from 'react-native';

import CheckBox from 'react-native-check-box';

export default class Preparer_la_sortieScreen extends Component {
    static navigationOptions = {
      title: 'Préparer sa sortie',
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
                    <Text style={styles.heading}>A la maison</Text>
                    <View style={styles.line}/>

                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"programmer sa sortie en prévoyant un refuge"}
                        />
                    </View>, 
                    <View key={1}style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"étudier la météo"}
                        />
                    </View>,
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"calculer la distance"}
                        />
                    </View>,
                    <View key={3} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"calculer le carburant"}
                        />
                    </View>,
                    <View key={4} style={styles.item}>
                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={() => this.setState({ checked: !this.state.checked })}
                        isChecked={this.state.checked}
                        leftText={"calculer les marées"}
                    />
                </View>
                    ]}
                    <View style={styles.line}/>
                    <Text style={styles.heading}>au port</Text>
                    <View style={styles.line}/>
                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"confirmer la météo"}
                        />
                    </View>,
                    <View key={1} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"contrôler les permis"}
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
        backgroundColor: '#CBE8FB'
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