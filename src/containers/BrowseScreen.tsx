import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FileExplorer from '../components/FileExplorer';
import Colors from '../utility/Colors';
import { Inode, InodeStatus } from '../storage/Inode'
import { doArweave } from '../storage/StorageArweave'


const DATA= [
	{key:'..', title:'..'},
	{key:'folder1', title:'folder1'},
	{key:'folder2', title:'folder2'},
	{key:'folder3', title:'folder3'},
	{key:'file1', title:'file1'},
	{key:'file2', title:'file2'},
	{key:'file3', title:'file3'},
	{key:'file4', title:'file4'},
	{key:'file5', title:'file5'},
]



const BrowseScreen =  ({wallet}) => {

	// const currentDirectory = useState <- relative to wallet root
	// current dirlist - always has '..', 
	// props.selection = current file ??

	const onPressNewFolder = () =>{
		
		console.log('onPressNewFolder')
	}

	return (
		<View style={s.browseScreen}>

		<View style={s.buttonContainer}>
			<View style={s.button}><Button color={Colors.primary} title="new folder" onPress={onPressNewFolder} /></View>
			<View style={s.button}><Button color={Colors.onPrimary} title="upload file" onPress={()=>console.log( 'pressed upload')} /></View>
		</View>

		<FileExplorer data={DATA} style={s.fileExplorer}  />

	</View>
	)
}

const s = StyleSheet.create({
	browseScreen: {
		width: '100%',
		maxWidth: 768,
		alignItems: "stretch",
		padding: 15,
		
		flex: 1,
	},
	buttonContainer: {
		flexDirection: "row",
		width: '100%',
		justifyContent: "space-evenly",
		paddingVertical: 15,
	},
	button: {
		width: '40%',
	},
	fileExplorer: {
		flex: 1,
		maxHeight: 768,
		borderWidth: 1,
	},

})

export default BrowseScreen