import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.t1}>Main Content Here </Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.t1}>content Here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: 'lightgrey',
    margin: 3,
  },
  box1: {
    width: '90%',
    height: '30%',
    marginTop: 80,
    marginHorizontal: 20,
    borderWidth: 2,
    padding: 0,
  },
  t1: {
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
    paddingTop: 60,
    textAlign: 'center',
    margin: 0,
  },
  box2: {
    width: '90%',
    height: '30%',
    marginTop: 50,
    marginHorizontal: 20,
    borderWidth: 2,
    padding: 0,
    margin: 0,
  },
})

export default FoodBody
