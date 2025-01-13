import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'
import React from 'react'
import FoodItems from '../../utils/PopularItems.json'
import AntDesign from '@expo/vector-icons/AntDesign'

const images = {
  momo: require('../../assets/Popular/momo.png'),
  chowmein: require('../../assets/Popular/chowmein.png'),
  pasta: require('../../assets/Popular/pasta.png'),
  samosa: require('../../assets/Popular/samosa.png'),
  lassi: require('../../assets/Popular/lassi.png'),
  //   default: require('../../assets/Popular/default.png'), // Default image
}

const food = ({ item }: { item: any }) => {
  const colors = ['#D6ECFF', '#E4F6E1', '#FFE0A3', '#FFE1E6', '#D6ECFF']
  const imageKey = item.name

  const imageSource = images[imageKey]

  return (
    <TouchableOpacity>
      <View style={styles.mainDiv}>
        <View style={styles.topDiv}>
          <View
            style={{
              position: 'absolute',
              zIndex: 10,
              top: 200,
              left: 7,
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <AntDesign name="star" size={24} color="#FF9529" />
            <Text>
              {'  '}
              {item.rating}
            </Text>
          </View>
          <Image
            source={imageSource}
            style={[styles.photo, { backgroundColor: colors[item.index] }]}
          />
        </View>
        <View style={styles.bottomDiv}>
          <Text style={styles.foodName}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Popular = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 25, marginVertical: 20 }}>Popular</Text>
      <FlatList
        data={FoodItems}
        keyExtractor={(item) => item.name}
        renderItem={food}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainDiv: {
    height: 280,
    width: 250,
    // backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
    position: 'relative',
  },
  topDiv: {
    height: 230,
    width: 250,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomDiv: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 230,
    width: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  foodName: {
    fontSize: 20,
  },
})

export default Popular
