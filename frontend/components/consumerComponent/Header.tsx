import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const Header = () => {
  return (
    <SafeAreaView style={styles.mainStyle}>
      {/* Left icon */}
      <TouchableOpacity>
        <View style={styles.barStyle}>
          <Feather
            name="bar-chart-2"
            size={30}
            color="black"
            weight="regular"
          />
        </View>
      </TouchableOpacity>

      {/* Center content (map pin + text) */}
      <View>
        <TouchableOpacity style={styles.centerContainer}>
          <Feather name="map-pin" size={20} color="black" weight="regular" />
          <View>
            <Text>Chardobato,Humla</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Right image */}
      <TouchableOpacity>
        <Image
          source={require('../../assets/motorcycle-delivery-4449.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainStyle: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensure left, center, and right are spaced properly
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  barStyle: {
    transform: [{ rotate: '90deg' }],
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Makes sure the center section takes the remaining space
    justifyContent: 'center', // Centers the content horizontally
  },
  //   locationTextContainer: {
  //     marginLeft: 5,
  //     display: 'flex', // Space between location text and chevron
  //     flexDirection: 'row',
  //     // justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25, // Make the image circular
  },
})

export default Header
