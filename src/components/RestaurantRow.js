/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Stars from 'components/Stars';
const RestaurantRow = ({restaurant, index, navigation}) => {
  return (
    <View
      key={restaurant.name}
      style={[{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}]}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={restaurant.rating} />
        </View>
        <View style={styles.nameAddress}>
          <Text>{restaurant.name}</Text>
          <Text style={styles.addressText}>{restaurant.address}</Text>
        </View>
        <View style={styles.edges}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate('Restaurant Info', {restaurant: restaurant})
            }
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  stars: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  nameAddress: {
    flex: 8,
    flexDirection: 'column',
  },
  addressText: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default RestaurantRow;
