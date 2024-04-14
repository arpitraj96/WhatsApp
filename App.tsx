import { View, Text } from 'react-native'
import React from 'react'
import Splash from './Components/Screens/Splash'
import Chats from './Components/Screens/Chats'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Splash />
    </View>
  )
}