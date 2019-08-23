import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignIn from './signin/signin';
import Welcome from './welcomePage/welcomePage';
import Income from './income/incomePage';
import Home from './home/home';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 
  Bell:Income,
  Welcome:Welcome ,
  Home:Home,
  Signin: SignIn,
  Menu:()=>(<View><Text>Menu</Text></View>),

 
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
    let IconComponent = Icon;
      let iconName;
      if (routeName === 'Welcome') {
        iconName ='leaf';
     
      } else if (routeName === 'Settings') {
        iconName = `man`;
      }
      else if(routeName==='Bell'){
        iconName='bell'
      }
      else if(routeName==='Home'){
        iconName='recycle'
      }
      else if(routeName==='Signin'){
        iconName='user'
      }
      else if(routeName==='Menu'){
        iconName='bars'
      }


      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },  } 
    
    
    ), tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      showLabel:false
    } 
    ,}, );
const RootNavigator= createAppContainer(TabNavigator);
export default RootNavigator;