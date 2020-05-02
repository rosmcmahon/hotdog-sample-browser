import React, { EventHandler, SyntheticEvent } from 'react'
import Modal from '../utility/PlatformImports'
import {StyleSheet, Text, Linking, Button, View, TouchableHighlight, Platform } from 'react-native'
import Colors from '../utility/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InputFile from './InputFile'

type IProps = {
	onClose: any
	open: boolean
	onChangeFile: any
}
export default function Login ({onClose, open, onChangeFile}:IProps) {

	let getTokens;
	if (Platform.OS === 'web') {
		getTokens = (
			<Text style={s.webButton}
				accessibilityRole="link"
				href="https://tokens.arweave.org"
				target="_blank"
			>
				GET A WALLET WITH SOME TOKENS
			</Text>
		)
	}
	else{
		getTokens = (
			<Button 
				color={Colors.secondary}
				onPress={ ()=> 
					Linking.openURL('https://tokens.arweave.org').catch((err) => console.error('An error occurred', err)) 
				}
				title="Get a wallet with some tokens"
			/>
		)
	}

	return (
		<Modal 
				animationType="slide"
				transparent={true}
				visible={open}
				onRequestClose={onClose}
				onDismiss={onClose}
			>
			<View style={s.modal}>
				<View style={{alignItems: 'flex-end'}} >
					<TouchableHighlight onPress={onClose} >
						<MaterialCommunityIcons name='close-box'  size={32}  /> 
					</TouchableHighlight>
				</View>
				<View style={s.modalContent}>
					<Text style={s.dialogTitle} >Sign in with Arweave wallet key file</Text>
					<InputFile onChangeFile={onChangeFile} />
					<Text  key="body1">
						Hotdog Samples live on the permaweb. Your short audio samples are saved to the permaweb forever.
						Permanency take a litte AR and some time to process, please be patient and pay attention to in-app indicators.
					</Text>
					<View style={s.button}>
						{getTokens}
					
					</View>
				</View>
			</View>
		</Modal>
	)
}

const s = StyleSheet.create({
	modal: {
		backgroundColor: 'white',
		margin: '10%',
		padding: '2%',
		flex: 1,
		borderRadius: 10,
	},
	modalContent: {
		alignItems: 'center',
		padding: '5%',
		
	},
	dialogTitle: {
		padding: '5%',
	},
	loginScreen: {
		width: '80%',
		maxWidth: 700,
		height: '80%',
		maxHeight: 700,
		padding: 15,
		margin: 10,
		
		flex: 1,
	},
	button: {
		width: '40%',
		paddingTop: '10%',
	},
	webButton: {
		backgroundColor: Colors.secondary,
		color: 'white',
		padding: 10,
		justifyContent: 'center'
	}

})