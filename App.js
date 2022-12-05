import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/native-stack';
import Header from './components/header';
import IpadList from './components/productList/ipadList';
import * as Progress from 'react-native-progress';
// import MainScreen from './components/screenc/MainScreen';

// const Stack = createStackNavigator();

export default function App() {
  const [isHide, setIsHide] = React.useState(true);
  setTimeout(() => setIsHide(false), 3000);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {!isHide ? <IpadList/> : <Progress.CircleSnail color={['lightgrey']} indeterminate={true} style={{alignSelf: "center", margin:12}} loading={true}/>}
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