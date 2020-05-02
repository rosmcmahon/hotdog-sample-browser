import React, { useState } from 'react';
import { StyleSheet, View,
	Platform, StatusBar, // to provide padding for Android statusbar
	SafeAreaView // to provide padding for iOS statusbar
} from 'react-native';
import BrowseScreen from './src/containers/BrowseScreen'
import Colors from './src/utility/Colors'
import Header from './src/containers/Header';
import { JWKInterface } from './src/types/wallet';



export default function App() {
	//const selectedFile/Node = useState('') // txID this gets passed back from fileExplorer
	const [wallet, setWallet] = useState<JWKInterface>()

  return (
		<SafeAreaView style={s.appScreen}>
			<Header onSetWallet={(w: JWKInterface)=>setWallet(w)}  />

			<BrowseScreen  wallet={wallet} />
			
			<View key="footer"></View>
		</SafeAreaView>
  );
}

const s = StyleSheet.create({
	appScreen: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
		backgroundColor: '#242424',
		alignItems: 'center',
		
	},
	text: {
		color: Colors.secondary,
	},

	
});
