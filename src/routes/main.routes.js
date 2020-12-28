import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import NoteCreator from '../pages/NoteCreator'

const Stack = createStackNavigator()

export default function HomeRoutes() {
    return (

        <Stack.Navigator 
            initialRouteName="Página Inicial" 
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Página Inicial" component={Home} />
            <Stack.Screen name="Criador de Notas" component={NoteCreator} />
        </Stack.Navigator>
        
    );
}