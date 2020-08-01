import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FileExplorer from '../components/FileExplorer';
import Colors from '../utility/Colors';
import { IJwk } from '../utility/JwkUtils';
 

const DATA= [
	{key:'..', type: 'dir', title:'..'},
	{key:'folder1', type: 'dir', title:'default samples'},
	{key:'folder2', type: 'dir', title:'techno kit 1'},
	{key:'folder3', type: 'dir', title:'chillwave'},
	{key:'kick', title:'kick'},
	{key:'snare', title:'snare'},
	{key:'clap', title:'clap'},
	{key:'hihat-open', title:'hihat-open'},
	{key:'hihat-closed', title:'hihat-closed'},
]

type IProps = {
	wallet: IJwk
}
const BrowseScreen =  ({wallet}:IProps) => {

	// const currentDirectory = useState <- relative to wallet root
	// current dirlist - always has '..', 
	// props.selection = current file ??

	useEffect(()=>{
		if(wallet !== undefined){
			console.log('wallet changed')

			
		}
	},[wallet])

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