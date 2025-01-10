import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather'

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/motorcycle-delivery-4449.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <View style={styles.middleHeader}>
          <Text>ChardoBato,Humla</Text>
          <TouchableOpacity>
            <Feather name="map-pin" size={20} color="purple" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="person-outline"
            size={30}
            color="blue"
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  safeArea: {
    height: 80,
    width: '100%',
    padding: 5,
  },
  imageStyle: {
    height: 50,
    width: 50,
    marginLeft: 5,
  },
  inputStyle: {
    borderRadius: 15,
    backgroundColor: '#ccc',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  middleHeader: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
  },
})

export default CustomHeader
