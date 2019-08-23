import React from 'react';
import { StyleSheet,Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ButtontCustom = ({buttonColor,icon,title}) => {

    return (
  <TouchableOpacity style={styles.button}><Text style={styles.text}>{title +'    '}</Text>{icon && <Icon color={styles.text.color} size={styles.text.fontSize} name={icon}></Icon>}</TouchableOpacity>)
}


const styles = StyleSheet.create({
    button:{
     height:30,
     width:'70%',
     padding:30,
     display:'flex',
     backgroundColor:'rgb(156,216,100)',
   flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:20

    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }

})
export default ButtontCustom;