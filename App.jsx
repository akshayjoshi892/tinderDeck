import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DisplayImage from './DisplayImage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{title: '',}}>
        <Drawer.Screen
          name="Home"
          component={DisplayImage}
          options={{drawerLabel: 'Home'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
