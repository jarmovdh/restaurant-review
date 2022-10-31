/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const AddReview = ({navigation}) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Icon name="close" size={20} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          style={styles.input}
          placeholder="Name (optional)"
          value={name}
          onChangeText={newName => setName(newName)}
        />
        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => {
            return (
              <TouchableOpacity
                onPress={() => setReview({rating: i})}
                style={styles.starButton}
                keys={i}>
                <Icon
                  name="star"
                  style={{color: review.rating >= i ? '#FFD64C' : '#CCCCCC'}}
                  size={30}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Review"
          value={review}
          onChangeText={() => setReview({review})}
          multiline={true}
          numberOfline={5}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {padding: 5},
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});
export default AddReview;
