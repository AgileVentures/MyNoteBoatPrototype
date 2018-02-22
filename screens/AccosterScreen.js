import React, {  Component  } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, Alert } from 'react-native';

import CheckBox from 'react-native-check-box';

export default class AccosterScreen extends Component {
    static navigationOptions = {
      title: 'Accoster',
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
                    <Text style={styles.heading}>Préparer l’accostage</Text>
                    <View style={styles.line}/>

                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"décrire la manoeuvre"}
                        />
                    </View>, 
                    <View key={1}style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"préparer 2 amarres et pare-battage"}
                        />
                    </View>,
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"arrondir le long du quai"}
                        />
                    </View>,
                    <View key={3} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"battre en arrière pour stopper"}
                        />
                    </View>
                    ]}
                    <View style={styles.line}/>
                    <Text style={styles.heading}>Accoster</Text>
                    <View style={styles.line}/>
                    {[
                    <View key={0} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"tourner l’amarre avant"}
                        />
                    </View>,
                    <View key={1} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"tourner l’amarre arrière"}
                        />
                    </View>,                    
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"finir l’amarrage puis stopper"}
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