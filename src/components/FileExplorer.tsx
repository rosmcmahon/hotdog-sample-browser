import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BreadcrumbsText from './BreadcrumbsText';
import DirListItem from './DirListItem';

export interface IItem {
	key: string,
	title: string
	type: 'dir' | 'file'
}

const FileExplorer = ({ data, style }) => {
	return (
		<View key="fileExplorer" style={[style, s.fileExplorer]}>
			<BreadcrumbsText style={s.breadcrumbs}> >breadcrumbs>>dir1>>sub1 </BreadcrumbsText>
			<FlatList style={s.dirlist}
				data={data}
				keyExtractor={(item: IItem) => item.key}
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