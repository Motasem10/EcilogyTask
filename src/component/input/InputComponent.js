import React from 'react';
import { View, Text, TextInput, StyleSheet ,} from 'react-native'
//import {} from 'reac-native-el'
const InputGroup = ({label,placeHolder,style,secureTextEntry,inputStyle,onChangeText,value,name}) => {

    return (
        <View style={{...styles.view,...style}}>
            <Text style={styles.label}>{label}   </Text>
            <TextInput style={{...styles.input,...inputStyle}} 
             secureTextEntry={secureTextEntry} onChangeText={(e)=>onChangeText(name,e)} value={value} ></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        width: '80%',
marginTop:20
    },
    label: {
        color: 'gray',
        fontSize:18,
        margin:0,
        padding:0,
fontWeight:'bold',

    }
    ,
    input: {
fontWeight:'bold',
        borderBottomColor: '#bbe68e',
        borderBottomWidth: 1,
      margin:0,
      padding:5

    }

})
export default InputGroup;