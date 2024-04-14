import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import Chats from '../Screens/Chats'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
            <Stack.Screen name='Chats' component={Chats} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator