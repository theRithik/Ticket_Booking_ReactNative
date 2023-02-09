
import * as React from 'react';
import Header from './header'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './details';
import Final from './final';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Header}
          options={{title: 'Ticket Booking'}}
        />
        <Stack.Screen name="Details" component={Details}  />
        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

