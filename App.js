import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,
	Platform, StatusBar, // to provide padding for Android statusbar
	SafeAreaView // to provide padding for iOS statusbar
} from 'react-native';
import BrowseScreen from './containers/BrowseScreen';
import Colors from './Colors';



export default function App() {

	//const selectedFile/Node = useState('') // txID?? this gets passed back from fileExplorer

	return (
		<SafeAreaView style={s.appScreen}>
			<View id="header"></View>

			<BrowseScreen onFileSelect={() => console.log('onFileSelect triggered')} />
			
			<View id="footer"></View>
		</SafeAreaView>
	);
}

const s = StyleSheet.create({
	appScreen: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
		backgroundColor: Colors.background,
		alignItems: 'center',
		
	},
	text: {
		color: Colors.secondary,
	},

	
});


