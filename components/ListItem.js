import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

class ListItem extends Component {
	state = {
		showIcon: false,
		bgColor: '#fff'
	};
	onButtonPress = () => {
		if (!this.state.showIcon) {
			this.setState({
				showIcon: !this.state.showIcon,
				bgColor: '#efefef'
			});
		} else {
			this.setState({
				showIcon: !this.state.showIcon,
				bgColor: '#fff'
			});
		}
	};
	renderIcon = () => {
		if (this.state.showIcon) {
			return <Icon name="triangle-right" color="#262626" size={20} />;
		}
	};
	render() {
		const { itemViewStyle, itemTextStyle } = styles;

		return (
			<TouchableOpacity onPress={() => this.onButtonPress()}>
				<View
					style={[
						itemViewStyle,
						{ backgroundColor: this.state.bgColor }
					]}
				>
					<Text style={itemTextStyle}>{this.props.text}</Text>
					{this.renderIcon()}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = {
	itemViewStyle: {
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: '#333',
		backgroundColor: '#fff',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between'
	},
	itemTextStyle: {
		fontSize: 20
	}
};

export default ListItem;
