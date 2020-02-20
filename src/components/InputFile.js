import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default function InputFile ({onChangeFile}) {
	return (
		<View>
			{/* <input 
				type="file" 
				id="fileinput" 
				onChange={onChangeFile}
				style={{ display: 'none' }} 
			/> */}
				
					<TouchableOpacity style={s.touchBox} onPress={onChangeFile}>
						<Text variant="h4">Drop or select a keyfile here.</Text>
					</TouchableOpacity>
		</View>
	)
}

const s = StyleSheet.create({
	touchBox: {
		borderWidth: 2,
		borderRadius: 8,
		borderStyle: 'dashed',
		padding: 10,
		margin: 10,
		minHeight: 100,
		justifyContent: 'center'
	},
})