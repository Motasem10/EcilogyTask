import React from 'react';
import {  StyleSheet,View } from 'react-native';


// Generate required css

const RadioButton = ({style,selected}) => {
    return (
      
     <View style={{...styles.button,backgroundColor:selected?'#5cc145':'white' ,...style}}>
      
     </View>         
              
    )
}
const styles = StyleSheet.create({
   button:{
       height:20,
       width:20,
       borderRadius:20,
       borderWidth:2,
       borderColor:'#5cc145',
       justifyContent:'center',
       alignItems:'center',
       margin:10,
   }

   
})


export default RadioButton;