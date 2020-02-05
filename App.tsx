import React from 'react';
import { StyleSheet, View,
	Platform, StatusBar, // to provide padding for Android statusbar
	SafeAreaView // to provide padding for iOS statusbar
} from 'react-native';
import BrowseScreen from './src/containers/BrowseScreen'
import Colors from './src/utility/Colors'

export default function App() {
  //const selectedFile/Node = useState('') // txID this gets passed back from fileExplorer

  return (
		<SafeAreaView style={s.appScreen}>
			<View key="header"></View>

			<BrowseScreen onFileSelect={() => console.log('onFileSelect triggered')} />
			
			<View key="footer"></View>
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
