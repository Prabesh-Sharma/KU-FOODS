import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RoleSelection from './screens/RoleSelection'
import Consumer from './screens/Consumer'
import DeliveryBoy from './screens/DeliveryBoy'
import { SocketProvider } from './context/SocketContext'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SocketProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RoleSelection">
          <Stack.Screen name="RoleSelection" component={RoleSelection} />
          <Stack.Screen name="Consumer" component={Consumer} />
          <Stack.Screen name="DeliveryBoy" component={DeliveryBoy} />
        </Stack.Navigator>
      </NavigationContainer>
    </SocketProvider>
  )
}

export default App
