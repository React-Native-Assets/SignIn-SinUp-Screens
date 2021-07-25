import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import SignInScreen from '../Components/SignInScreen/SignInScreen';
import SignUpScreen from '../Components/SignUpScreen/SignUpScreen';
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Login to account" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Creat New Account" component={SignUpScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator