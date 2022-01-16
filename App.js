import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './Screens/ListScreen';
import NewReminderScreen from './Screens/NewReminderScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="NewReminder" component={NewReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;