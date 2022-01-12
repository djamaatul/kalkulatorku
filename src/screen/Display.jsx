import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import Keypad from '../components/Keypad';

export default function Display() {
	const [output, setOutput] = useState('');
	const keypad = [
		['C', 'CE', '(', ')'],
		[1, 2, 3, '%'],
		[4, 5, 6, '*'],
		[7, 8, 9, '/'],
		[0, '-', '+', '='],
	];

	const handleClick = (value) => {
		switch (value) {
			case 'C':
				setOutput('');
				break;
			case 'CE':
				setOutput(output.substring(0, output.length - 1));
				break;
			case '=':
				setOutput(eval(output).toString());
				break;

			default:
				setOutput(output + value);
				break;
		}
	};
	return (
		<View>
			<View style={style.title}>
				<Text style={style.titleText}>Kalkulatorku</Text>
			</View>
			<View style={style.output}>
				<Text style={style.outputText}>{output}</Text>
			</View>
			<View style={style.keypadContainer}>
				{keypad.map((e, index) => {
					return (
						<View style={style.keypadRow} key={index}>
							{e.map((val, index) => {
								return (
									<Keypad
										key={index}
										value={val.toString()}
										handleClick={() => handleClick(val.toString())}
									/>
								);
							})}
						</View>
					);
				})}
			</View>
		</View>
	);
}
const style = StyleSheet.create({
	title: {
		paddingLeft: 20,
	},
	titleText: {
		color: '#E0E0E0',
		fontSize: 25,
		fontWeight: 'bold',
	},
	output: {
		backgroundColor: '#9E9E9E',
		height: 50,
		margin: 20,
		borderRadius: 10,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 20,
		borderWidth: 1,
		borderColor: 'white',
	},
	outputText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	keypadContainer: {
		margin: 20,
	},
	keypadRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
