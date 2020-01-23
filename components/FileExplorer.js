import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BreadcrumbsText from './BreadcrumbsText';
import Colors from '../Colors';
import DirListItem from './DirListItem';

const FileExplorer = ({ data, style }) => {
	return (
		<View id="fileExplorer" style={[style, s.fileExplorer]}>
			<BreadcrumbsText style={s.breadcrumbs}> >breadcrumbs>>dir1>>sub1 </BreadcrumbsText>
			<FlatList id="dirlist" style={s.dirlist}
				data={data}
				keyExtractor={item => item.key}
				renderItem={ ({item}) => (
					<DirListItem item={item} onPressItem={()=>console.log('you pressed:'+item.key)} />
				)}
			/> 
	</View>
	)
}

const s = StyleSheet.create({
	fileExplorer: {},
	breadcrumbs: {},
	dirlist: {},

})

export default FileExplorer