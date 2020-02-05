import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../utility/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DirListItem = ({ item, onPressItem }) => {
	return (
		<TouchableOpacity onPress={onPressItem} style={s.touchable}>
			<MaterialCommunityIcons name='music-box-outline'  size={32} color={Colors.onSurface} /> 
			<MaterialCommunityIcons name='folder'  size={32} color={Colors.onSurface} /> 
			<Text style={s.item}> {item.title}</Text>
		</TouchableOpacity> 
	)
}

const s = StyleSheet.create({
	touchable: {
		backgroundColor: Colors.surface,
		padding: 5,
		flexDirection: 'row',
	},
	item: {
		color: Colors.onSurface,
	},

})

export default DirListItem
