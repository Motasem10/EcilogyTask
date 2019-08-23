
import img from '../../img/bg.png'
//'.. /src/img/bg.png'
import React from 'react';
import {

  View,
  Text,
  ImageBackground

} from 'react-native';


// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import BackgroundImage from '../../component/BackGroundImage/backgroundImage';

// Generate required css

const Welcome=()=>{
    
    
    return(
  <View style={{ backgroundColor: '#71c043',display:'flex',flex:10,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
  <Text style={{ color: 'white', fontSize: 'bold', fontSize: 50, marginTop: '15%',marginBottom:'10%' }}>Welcome</Text>
        <View style={{ width: 150, height: 150, borderRadius: 150/2,margin:10,display:'flex',alignItems:'center',justifyContent:
        'center', backgroundColor: 'white', padding: 10 }}>
        {/* <Icon name="leaf" size={40} color='#71c043' style={{top:0,   position: 'absolute',top:'70%',right:'40%'}}  />s */}
        <Icon style={{transform:[{rotate:'-50deg'}],zIndex:-10,position:'absolute'}} name="leaf" size={80} color='#71c043'   />
       
        </View>
        <Text  style={{ color: 'white', fontSize: 'bold', fontSize: 40 }}>ECILOGY</Text>
  
        <BackgroundImage  style={{sdisplay:'flex',alignItems:'center' }} >
        </BackgroundImage>
  </View>
  )}



export default Welcome;