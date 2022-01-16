import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FloatingActionButton from '../Components/FloatingActionButton';

function ListScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<FloatingActionButton onPress={() => navigation.navigate('NewReminder')}/>	
			<StatusBar style='auto'/>
		</View>
	);
}


export default ListScreen;