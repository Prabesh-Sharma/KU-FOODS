import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'
import FoodCategories from '../../utils/FoodCategories.json'

const images = {
  breakfast: require('../../assets/breakfast.png'),
  lunch: require('../../assets/lunch.png'),
  dinner: require('../../assets/dinner.png'),
  desserts: require('../../assets/dessert.png'),
  drinks: require('../../assets/drinks.png'),
}

const renderFoodCategories = ({ item }: { item: any }) => {
  const imageKey: any = item.name.toLowerCase()

  return (
    <TouchableOpacity>
      <View style={styles.categoryDiv}>
        <Text>{item.name}</Text>
        {images[imageKey] && (
          <Image source={images[imageKey]} style={styles.categoryImage} />
        )}
      </View>
    </TouchableOpacity>
  )
}

const FoodBody = () => {
  return (
    <View style={styles.mainDiv}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Categories</Text>
      <FlatList
        data={FoodCategories}
        renderItem={renderFoodCategories}
        keyExtractor={(item) => item.name}
        // style={styles.Flat}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainDiv: {
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 10,
    display: 'flex',
    overflow: 'scroll',
  },
  categoryDiv: {
    height: 150,
    width: 200,
    backgroundColor: '#E2DFD2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 20,
  },
  categoryImage: {
    height: 100,
    width: 100,
  },
})

export default FoodBody
