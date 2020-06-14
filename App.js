import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Alarm from './screen/Alarm';
import Timer from './screen/Timer';
import Stopwatch from './screen/Stopwatch';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Alarm':
                iconName = 'ios-alarm';
                break;
              case 'Timer':
                iconName = 'ios-timer';
                break;
              case 'Stopwatch':
                iconName = 'ios-stopwatch';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen component={Alarm} name="Alarm" />
        <Tab.Screen component={Timer} name="Timer" />
        <Tab.Screen component={Stopwatch} name="Stopwatch" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
