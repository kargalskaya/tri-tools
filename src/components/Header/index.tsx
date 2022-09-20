import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>-TRI-TOOLS-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    width: '100%',

    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
});
