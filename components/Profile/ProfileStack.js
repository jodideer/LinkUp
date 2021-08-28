import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'

import Profile from './ProfileScreen'
import Map from '../Map/Maps'
//import { createStackNavigator, createAppContainer } from '@react-navigation';

const ProfileStack = createStackNavigator();
export default class StartMenue extends React.Component{
    render(){
        return(
            <NavigationContainer independent={true}>
                <ProfileStack.Navigator>
                    <ProfileStack.Screen name="Profile" component={Profile}/>
                    <ProfileStack.Screen name="Map" component={Map}/>
                </ProfileStack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'steelblue',
       padding: 50,
       flex: 1
   },
   placeIcon: {
    color: 'white',
    fontSize: 26,
  },
pad:{
    marginBottom:20,
},menu:{
    flexDirection:'row',
    position:'absolute',
    left:16,
   },
   
   user:{
       color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    fontFamily: 'righteous'
  },
  username:{
    color: '#FFF',
     fontSize: 28,
     fontWeight: 'bold',
     paddingBottom: 8,
     textAlign: 'center',
 fontFamily: 'righteous'
}, 
   
 
 });

/*

       justifyContent: 'center',
       alignItems: 'center',

   text:{
     color: 'white',
     fontSize: 30,
     marginBottom: 50,
     alignItems: 'center',
     fontFamily: 'righteous'
   },
 
*/