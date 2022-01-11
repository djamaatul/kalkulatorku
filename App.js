import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Display from './src/screen/Display';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<Display />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#212121',
		paddingTop: 50,
	},
});
