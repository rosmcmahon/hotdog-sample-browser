import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FileExplorer from '../components/FileExplorer';


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


const BrowseScreen =  (props) => {

	// const currentDirectory = useState <- relative to wallet root
	// current dirlist - always has '..', 
	// props.selection = current file ??

	return (
		<View style={s.browseScreen}>

		<View id="buttonContainer" style={s.buttonContainer}>
			<View style={s.button}><Button title="new folder" onPress={()=>console.log('pressed')} /></View>
			<View style={s.button}><Button title="upload file" onPress={()=>console.log( 'pressed'+(StatusBar.currentHeight || 0) )} /></View>
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