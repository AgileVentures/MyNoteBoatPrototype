import React, {  Component  } from 'react';
import { StyleSheet, ScrollView, View, Image, Alert } from 'react-native';

import CheckBox from 'react-native-check-box';

export default class Preparer_le_bateauScreen extends Component {
    static navigationOptions = {
      title: 'Preparer_le_bateau',
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
                    {[
                    <View key={0}style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"Relever le moteur"}
                        />
                    </View>, 
                    <View key={1}style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"Mettre le(s) nâbles(s)"}
                        />
                    </View>,
                    <View key={2} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"2 aussières à poste"}
                        />
                    </View>,
                    <View key={3} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"passer la marche arrière"}
                        />
                    </View>,
                    <View key={4} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"larguer la sangle de hissage"}
                        />
                    </View>,
                    <View key={5} style={styles.item}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => this.setState({ checked: !this.state.checked })}
                            isChecked={this.state.checked}
                            leftText={"filer avec les aussières"}
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
        backgroundColor: '#48BBEC'
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})