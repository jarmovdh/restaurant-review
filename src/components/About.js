/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const About = () => {
  return (
    <View style={{flex: 1, padding: 40}}>
      <Text>About Restaurant Review</Text>
      <Icon name="qrcode" color="#0066CC" size={100} style={styles.icon} />
      <Text style={styles.text}>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.{' '}
      </Text>
      <Text style={styles.text}>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {fontSize: 14, color: '#444', marginTop: 20},
});

export default About;
