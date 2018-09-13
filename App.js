import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from './components/ListItem';

export default class App extends React.Component {
	state = {
		data: [
			{ key: 'App' },
			{ key: 'Games' },
			{ key: 'Movies' },
			{ key: 'Books' },
			{ key: 'Newspapers' }
		]
	};
	render() {
		const { container } = styles;
		return (
			<View style={container}>
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => <ListItem text={item.key} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 2,
		backgroundColor: '#fff',
		marginTop: 30,
		borderWidth: 1,
		borderColor: '#333'
	}
});
