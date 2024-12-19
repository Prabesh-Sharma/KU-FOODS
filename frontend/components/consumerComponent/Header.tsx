import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

const Header = () => {
  const fun = () => {
    Alert.alert('BACK BUTTON')
  }
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <AntDesign
          name="leftcircleo"
          size={24}
          color="black"
          style={styles.icon}
          onPress={() => fun()}
        />
        <Text style={styles.headerText}>Welcome Here</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search...Saimon...Search...."
        placeholderTextColor="grey"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 16,
    backgroundColor: 'lightgrey', // Base color
    // backgroundImage: 'linear-gradient(to right, lightgreen, red)', // Mixed gradient
    height: 120, // Adjust height to fit content
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Space between top row and search bar
  },
  icon: {
    marginRight: 10, // Spacing between the icon and text
    fontSize: 40,
    color: 'black',
  },
  headerText: {
    width: '100%', // Added missing comma
    fontSize: 30,
    fontWeight: '400',
    color: '#2d2e32',
    letterSpacing: 1,
    alignContent: 'center',
  },
  searchBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 14,
    color: 'black',
  },
})

export default Header
