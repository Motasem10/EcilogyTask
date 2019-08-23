

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground

} from 'react-native';
import RootNavigator from './src/pages/rootNavigator';
import Welcome from './src/pages/welcomePage/welcomePage';


class App extends React.Component  {
  constructor(){
    super();
    this.state={
      welcome:true,
    }
  }
  componentDidMount=()=>{
    setTimeout(()=>this.setState({welcome:false}),2);
  }
render(){
  return (
    <Fragment >
 
      <StatusBar barStyle='dark-content' />
  {this.state.welcome?<Welcome></Welcome>: <RootNavigator></RootNavigator>}
    </Fragment >
  );
};}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#6bbe43',
    width:90,
    height:90,
    borderColor:'black',
 borderBottomEndRadius:90,
 borderBottomStartRadius:90,
 transform:[{scaleX:5}]

  }
});

export default App;
