import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../utility/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IItem } from './FileExplorer';


interface IProps {
	item: IItem
	onPressItem: any
}

const DirListItem = ({ item, onPressItem }:IProps) => {
	return (
		<TouchableOpacity onPress={onPressItem} style={s.touchable}>
			{item.type==='dir' ?
				<MaterialCommunityIcons name='folder'  size={32} color={Colors.onSurface} /> 
				:
				<MaterialCommunityIcons name='music-box-outline'  size={32} color={Colors.onSurface} /> 
			}
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
		fontSize: 22,
	},

})

export default DirListItem
