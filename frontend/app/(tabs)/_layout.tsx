import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const Layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor:'purple',
        tabBarStyle:{
          backgroundColor:'white'
        }
        ,
        headerShown:false
      }}
    >
      <Tabs.Screen name="index" options={{title:'Home',
      tabBarIcon:({color,focused})=>(
        focused?(<Ionicons name="home" size={24} color={color} />):(<Ionicons name="home-outline" size={24} color="black" />)
      )
        
      }}/>
        <Tabs.Screen name='Cart' options={{title:'Cart',
          tabBarIcon:({color,focused})=>(
            focused?(<Ionicons name="cart" size={30}  color={color} />):(<Ionicons name="cart-outline" size={30} color="black" />)
          )
        }} />
        <Tabs.Screen name='Orders' options={{title:"ORders",
          tabBarIcon:({color,focused})=>focused?(<MaterialCommunityIcons name="clipboard-list" size={24} color={color} />):(<MaterialCommunityIcons name="clipboard-list-outline" size={24} color="black" />)
        }}/>
        <Tabs.Screen name='Profile' options={{title:'Profile',
          tabBarIcon:({color,focused})=>focused?(<FontAwesome5 name="user-alt" size={24} color={color} />):(<FontAwesome5 name="user" size={24} color="black" />)
        }}/>


    </Tabs>
  )
}

export default Layout