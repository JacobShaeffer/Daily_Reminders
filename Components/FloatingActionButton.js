import React from 'react';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

function FloatingActionButton ({ onPress }) {
	return (
		<TouchableOpacity style={styles.floating} onPress={ onPress }>
			<Icon name='plus-circle' size={70} color='red' />
		</TouchableOpacity>
		// <Button title="test" onPress={onPressed} >
		// </Button>
	);
}

export default FloatingActionButton;

const styles = StyleSheet.create({
	floating: {
		position: 'absolute',
		// backgroundColor: 'blue',
		// height: 70,
		// width: 70,
		// borderRadius: 35,
		bottom: 20,
		right: 20,
		alignItems: 'center',
	},
});