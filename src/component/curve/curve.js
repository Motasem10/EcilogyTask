import React from 'react';
import {

  StyleSheet,

  View,


} from 'react-native';
const Curve=({style})=>{

  
    return(     <View style={{textAllign:'center',display:'flex',alignContent:'center',alignItems:'center',...style}}>
    <View style={{...styles.view,...style}}>
    </View>
    </View>)
}

const styles = StyleSheet.create({
    view:{
      backgroundColor:'#6bbe43',
      marginTop:'auto',

      width:90,
      height:90,
      borderColor:'black',
   borderBottomEndRadius:90,
   borderBottomStartRadius:90,
   transform:[{scaleX:5}]
  
    }
  });

  export default Curve;