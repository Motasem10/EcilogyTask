import React from 'react';
import { View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const CheckBoxComponent = ({checked}) => {

    return (
        <View style={styles.view} >
           {checked && <Icon style={styles.icon} name='check' size={20}></Icon>}
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
width:30,
height:30,
borderColor:'#9e9e9e82',
display:'flex',
justifyContent:'flex-start',
alignContent:'flex-start',
borderWidth:2,

overflow:"visible",
margin:30,



    },
    icon:{
    position:'absolute',
    color: '#7ebd62',
    fontWeight:"100",
marginLeft:5,
    transform:[{scale:1.9}],
   
  marginBottom:30,
  
    },
    label: {
        
     
        margin:0,
        padding:0,
fontWeight:'bold',




    }
    ,
    input: {
fontWeight:'bold',
        borderBottomColor: '#bbe68e',
        borderBottomWidth: 1,
        padding:0,

    }

})
export default CheckBoxComponent;