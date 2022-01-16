import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function ListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

export default ListScreen;