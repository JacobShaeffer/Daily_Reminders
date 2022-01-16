import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function ListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={styles.floating}><Text>+</Text></View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 70,
    width: 70,
    borderRadius: 35,
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
});

export default ListScreen;