import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Curve,Button,InputGroup,CheckBox,RadioButton} from '../../component';



class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            name: '',
            email: '',
            password: ''
        }
    }

    handelChange = (state, value) => {
        console.log({ value });
        this.setState((prev) => ({
            [state]: value
        }))

    }

    render() {
        return (
            <View style={styles.view}>
                <Curve style={{ marginBottom: 30 }}/>
                <InputGroup label='Your Name' name='name' value={this.state.name} onChangeText={this.handelChange} placeHolder='Name' />
                <InputGroup label='Your Email' name='email' value={this.state.email} placeHolder='Name' onChangeText={this.handelChange} />
                <InputGroup label='create Password' name='password' value={this.state.password} onChangeText={this.handelChange}
                    inputStyle={{ color: 'green', letterSpacing: 4, fontSize: 20 }} secureTextEntry={true} placeHolder='Name' />
                <TouchableOpacity
                    onPress={() => this.setState({ checked: !this.state.checked })}
                    style={styles.CheckBoxContainer}
                >

                    <CheckBox checked={this.state.checked}/>
                    <Text style={styles.text} >i gree with & conditions</Text>

                </TouchableOpacity>
                <Button title={'Sign In'}></Button>
                <View style={{marginTop:10,justifyContent:'space-between',flexDirection:'row'}}>
                <RadioButton />
                <RadioButton selected={true} />
                <RadioButton/>
                <RadioButton/>
            
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flex: 1,


        justifyContent: 'flex-start',
        alignItems: 'center',
        //marginTop:20

    },
    text: {
        fontWeight: 'bold'
    },
    CheckBoxContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    }

})
export default SignIn;