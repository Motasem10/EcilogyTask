

import React, { Fragment } from 'react';
import {
  StatusBar,

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
    setTimeout(()=>this.setState({welcome:false}),1000);
  }
render(){
  return (
    <Fragment >
 
      <StatusBar barStyle='dark-content' />
  {this.state.welcome?<Welcome></Welcome>: <RootNavigator></RootNavigator>}
    </Fragment >
  );
};}

export default App;
