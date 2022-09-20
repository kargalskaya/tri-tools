import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header';
import Menu from './src/components/Menu';
import Timer from './src/components/Timer';
import Main from './src/screens/main';
import Calcs from './src/screens/calcs';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Menu />
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="stopwatch" component={Timer} />
          <Stack.Screen name="calcs" component={Calcs} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // height: '100%',
    // width: '100%',

    borderWidth: 1,
    borderColor: '#fff',
  },
});
