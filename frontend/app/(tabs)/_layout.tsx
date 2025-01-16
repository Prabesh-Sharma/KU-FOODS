import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='Cart' options={{title:'Cart'}}/>
        <Tabs.Screen name='Profile' options={{title:'Profile'}}/>
        <Tabs.Screen name='Search' options={{title:'Search'}}/>
        <Tabs.Screen/>

    </Tabs>
  )
}

export default _layout