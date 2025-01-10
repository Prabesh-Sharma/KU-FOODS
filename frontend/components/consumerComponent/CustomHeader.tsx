import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/deliveryBoy.jpg')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    height: 80,
    width: '100%',
    padding: 5,
    backgroundColor: 'gray',
  },

  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
})

export default CustomHeader
