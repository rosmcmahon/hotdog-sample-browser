import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../utility/Colors';

const BreadcrumbsText = ({ style, children }) => {
	return (
		<Text style={[ style, s.breadcrumbs ]}>{children}</Text>
	)
}

const s = StyleSheet.create({

	breadcrumbs: {
		backgroundColor: Colors.onSurface,
		color: Colors.surface,
		margin: 5,
	},

})

export default BreadcrumbsText