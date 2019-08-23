
import img from '../../img/bg.png'
//'.. /src/img/bg.png'
import React from 'react';
import {

  
  ImageBackground

} from 'react-native';


const BackgroundImage=({style,props})=>{
    
    
    return(

  
        <ImageBackground source={img} style={{ width: '100%', height: '100%',...style }} >
        </ImageBackground>
 
  )}



export default BackgroundImage;