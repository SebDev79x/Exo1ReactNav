import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Image 
              style={styles.pics}
      source = {require('./assets/ra.png')}/>
          
   
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
   name="home"
   component={HomeScreen}
   options={{
     tabBarLabel: 'Home',
     tabBarIcon: ({ color, size }) => (
       <Ionicons name="home" color={color} size={size} />
     ),
   }}      />
      <Tab.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pics : {
    width:200,
    height:200
  }
});

/* const miscImages = (props) =>{
  const {pics} = props
  return (
    <View style = {styles.container}>
      <Image 
              style={styles.pics}
<Image 
              style={styles.pics}
      source = {require('./assets/ra.png')}/>    </View>
  )
} */
