import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Stars from 'components/Stars';

const RestaurantInfo = ({navigation}) => {
  const restaurant = navigation.getParam('restaurant');

  return (
    <ScrollView style={styles.root}>
      <View>
        <Text>Info</Text>
        <View style={styles.info}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.adress}>{restaurant.adress}</Text>
          <Stars rating={restaurant.rating} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  adress: {
    color: 'grey',
    marginBottom: 5,
  },
});

export default RestaurantInfo;
