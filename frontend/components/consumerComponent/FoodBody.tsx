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

const renderFoodCategories = ({ item, index }: { item: any; index: any }) => {
  const imageKey: any = item.name.toLowerCase()
  const colors = ['#B5DFB2', '#FFB668', '#ADDFFF', '#FFB6C1', '#FF746C']

  return (
    <TouchableOpacity>
      <View style={styles.categoryDiv}>
        <View
          style={[styles.CircleDiv, { backgroundColor: colors[index] }]}
        ></View>

        <View style={styles.textKoLagi}>
          <Text>{item.name}</Text>
        </View>

        {/* Image is inside the category div, it won't be clipped */}
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
    position: 'relative',
    height: 150,
    width: 200,
    backgroundColor: '#E2DFD2',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 20,
    marginRight: 20,
    overflow: 'hidden',
  },
  categoryImage: {
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    zIndex: 10,
  },
  textKoLagi: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
    left: 15,
  },
  CircleDiv: {
    height: 150,
    width: 150,
    borderRadius: 100,
    position: 'absolute',
    left: 60,
    top: 30,
    zIndex: 10,
  },
})

export default FoodBody
