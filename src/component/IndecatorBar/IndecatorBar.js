import React from 'react';
import { View, StyleSheet } from 'react-native';


// Generate required css

const IndecatorBar = ({style,width}) => {
    return (
      
                <View style={{ ...styles.control,...style }}>
                    <View style={{...styles.bar,width:`${ ((width*100)+5) + '%'}`}}>
                    <View style={styles.controlButton}></View>
                    </View>
                   </View>
              
    )
}
const styles = StyleSheet.create({
   
    control: {
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '60%',
        overflow: 'visible',
        //justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    },
    bar: {
        width: '0%',
        backgroundColor: '#77b360',
        height:5,
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end'    ,
          

    },
    controlButton:{
width:20,
height:20,
borderRadius:20,
backgroundColor:'#4eba4a',


    }
    
})


export default IndecatorBar;