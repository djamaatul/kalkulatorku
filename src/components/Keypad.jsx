import { TouchableHighlight, StyleSheet, Text } from 'react-native';

export default function Keypad(props) {
	return (
		<TouchableHighlight
			style={{ ...style.keypad, backgroundColor: props.type == 'number' ? '#2E7D32' : '#424242' }}
			onPress={() => props.handleClick(props.value)}
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
		fontSize: 40,
		fontWeight: 'bold',
	},
});
