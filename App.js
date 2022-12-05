import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import Header from './components/header';
import IpadList from './components/productList/ipadList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {/* <AppleProduct name={'iPad Air'}
      catchyLine={"Serious performance in a thin and light design."}
      price={"● From $799"}
      url={require('./assets/images/ipad_air.png')}/> */}

      <IpadList/>

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