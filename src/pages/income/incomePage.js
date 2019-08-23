import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import BackgroundImage from '../../component/BackGroundImage/backgroundImage';
import ButtontCustom from '../../component/Button/Button';

// Generate required css

const Income = () => {
    return (
        <View style={styles.view}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: '45%', color: 'white' }}>Income</Text>
            <BackgroundImage style={styles.background}>
            </BackgroundImage>

            <View style={styles.box}>
           
                   
               
                <View style={styles.income}>
                    <View style={styles.circle}>
                        <Icon name='database' size={30} color='white' />
                    </View>
                    <Text style={{ fontWeight: 'bold', color: '#89ca48' }}>Plastic recycle</Text>
                </View>
                <View style={styles.income}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#128848e0' }}>+12.50 $</Text>
                    <Text style={{ color: '#a9a9a9', fontWeight: 'bold' }}>Income</Text>
                </View>

                <ButtontCustom title='CASH OUT' icon='arrow-right' />
            </View>
        </View>
    )
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
        alignItems: 'center'

    },

    circle: {
        backgroundColor: 'rgb(156,216,100)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 80
    },
    income: {
        display: 'flex',

        alignItems: 'center'
    }

    ,
 
})


export default Income;