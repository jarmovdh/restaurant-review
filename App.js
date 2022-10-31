import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';
import About from 'components/About';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={RestaurantList}
        options={{headerShown: false}}
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
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#E6F0FA',
        }}>
        <Tab.Screen
          name="List"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} name="list" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} name="info-circle" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
