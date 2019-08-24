import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {IndecatorBar,BackgroundImage} from '../../component';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                { name: 'plastic', icon: 'database', weight: '90', income: '100' },
                { name: 'glass', icon: 'flask', weight: '100', income: '200' },
                { name: 'organic', icon: 'apple-alt', weight: '51', income: '300' },
                { name: 'metal', icon: 'utensils', weight: '12', income: '500' },
                { name: 'paper', icon: 'file-alt', weight: '10', income: '50' },
                { name: 'other', icon: 'plus-circle', weight: '1', income: '100' },
            ],
            current: 0,
            total:1000,
        }
    }

    render() {
        const { sections, current,total } = this.state;
        const {weight,name,income}=sections[current];
         
        return (
            <View style={styles.view}>
                <BackgroundImage style={styles.background}>
                </BackgroundImage>

                <View style={styles.box}>
                    <View style={styles.accounting}>
                        <View>
                            <Text style={{...styles.largeFonts}}>{weight} Kg  {this.total}</Text>
                            <Text style={{...styles.gray,...styles.smallFont}} >{name}</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{...styles.green,...styles.largeFonts}}>+ {income}$</Text>
                            <Text style={{...styles.smallFont,...styles.gray}} >income</Text>
                        </View>
                      
                    

                    </View>
                    <IndecatorBar width={income/total} ></IndecatorBar>
                    <View style={styles.sections}>
                            {this.state.sections.map((section,index) =>{ 
                                
                                return(<TouchableOpacity 
                            onPress={()=>this.setState({current:index})}
                            style={{...styles.section,backgroundColor:current==index?'#5dc148':'white'}}
                            >
                            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                    <Icon color={current==index?'white':'#65c246'} size={20} name={section.icon}></Icon>
                                    <Text style={{...styles.label,color:current==index?'white':'black'}}>{section.name}</Text>
                               </View>
                            </TouchableOpacity>)})}
                        </View>


                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#71c043',
        display: 'flex', flex: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }
    , background: {
        display: 'flex',
        alignItems: 'center',
        flex: 10,
        zIndex: -20

    }, box: {
        width: '80%',
        position: 'absolute',
        height: '60%',
        top: '35%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
        alignContent:'center',
        alignItems:'center'

        

    },
    accounting:{
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
width:'100%'


    },
    sections: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'


    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        width: '40%',
        borderWidth: 1,
        borderColor: '#b4b4b4',
        margin: 5,
    }, label: {
        fontWeight: 'bold'
    },
    //text ======
smallFont:{
fontWeight:'bold',
},
largeFonts:{
    fontWeight:'bold',
    fontSize:20,
},
gray:{
    color:'#a9a9a9',

},
green:{
    color:'green'
}
})


export default Home;