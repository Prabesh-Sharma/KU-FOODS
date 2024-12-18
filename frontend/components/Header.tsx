import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="leftcircleo" size={24} color="black" />
      <View>
        <Text style={styles.headerText}></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
  },
})
export default Header
