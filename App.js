import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={RestaurantList}
          options={{title: null}}
        />
        <Stack.Screen
          name="Restaurant Info"
          component={RestaurantInfo}
          options={{
            headerStyle: {backgroundColor: '#0066CC', color: '#FFF'},
            headerTintColor: '#FFF',
            headerTitleStyle: {
              color: '#FFF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
