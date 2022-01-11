import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import Keypad from '../components/Keypad';

export default function Display() {
	const [output, setOutput] = useState('1234');
	const keypad = [
		[1, 2, '-', '+'],
		[3, 4, '/', '*'],
		[5, 6, '%', '='],
		[7, 8, 9, 0],
	];

	const handleClick = (value) => {
		setOutput(output + value);
	};

	return (
		<View>
			<View style={style.title}>
				<Text style={style.titleText}>Kalkulatorku</Text>
			</View>
			<View style={style.output}>
				<Text style={style.outputText}>{output}</Text>
			</View>
			{keypad.map((e, index) => {
				return (
					<View style={style.keypadRow} key={index}>
						{e.map((val) => {
							let typee = typeof val;
							return (
								<Keypad
									value={val.toString()}
									type={typee !== 'number' ? 'number' : 'operator'}
									handleClick={handleClick}
								/>
							);
						})}
					</View>
				);
			})}
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
	},
	outputText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	keypadRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 20,
	},
});
