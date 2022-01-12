import { TouchableHighlight, StyleSheet, Text } from 'react-native';

export default function Keypad(props) {
	return (
		<TouchableHighlight
			style={{
				...style.keypad,
				backgroundColor: props.value.match(/[C,CE]/)
					? '#B71C1C'
					: props.value.match(/[0-9]/)
					? '#424242'
					: '#2E7D32',
			}}
			onPress={props.handleClick}
		>
			<Text style={style.keypadText}>{props.value}</Text>
		</TouchableHighlight>
	);
}
const style = StyleSheet.create({
	keypad: {
		flex: 1,
		borderRadius: 10,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		margin: 10,
	},
	keypadText: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold',
	},
});
