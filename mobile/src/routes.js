import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import DetailPage from '../src/pages/Detail';
import IncidentPage from '../src/pages/Incidents';

export default function Routs(){
    return (
      <NavigationContainer>
        
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Incidents" component={IncidentPage}/>
          <AppStack.Screen name="Details" component={DetailPage}/>
        </AppStack.Navigator>
      
      </NavigationContainer>
    );
}