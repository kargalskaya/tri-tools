import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Timer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
});
