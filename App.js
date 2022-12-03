import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import AppleProduct from './components/productItem/productItem'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppleProduct/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});