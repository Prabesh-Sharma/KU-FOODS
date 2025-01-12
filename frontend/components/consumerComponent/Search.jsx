import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons'

const Search = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Search for foods"
        placeholderTextColor="gray"
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: 'row',
    height: 45,
    borderColor: 'gray', // Fixed border color property
    borderWidth: 1, // Added border width for visibility
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#cbcbcb', // Slightly lighter background for a cleaner look
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: 'black',
    paddingVertical: 0, // Prevents extra vertical padding
  },
})

export default Search
