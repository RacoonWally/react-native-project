import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartAuthScreen from "../screens/StartAuthScreen";
import MainScreen from "../screens/MainScreen";

const PostNavigator = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <PostNavigator.Navigator>
                <PostNavigator.Screen
                    name="StartAuth"
                    component={StartAuthScreen}
                />
                <PostNavigator.Screen name="Main" component={MainScreen} />
            </PostNavigator.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation
