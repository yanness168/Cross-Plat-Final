import 'react-native-gesture-handler' ;
import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/screens/MainScreen';
import WishListScreen from './components/screens/WishListScreen'
import ContactUsScreen from './components/screens/ContactUsScreen';
import Header from './components/header';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'lightgrey',
          width: 200,
          drawerType: 'slide',
          swipeEnabled: true,
          swipeEdgeWidth: 50,
          swipeMinDistance: 60,
          fontSize: 20
        },
        headerStyle: {
          height: 90,
        },
      }}  
      useLegacyImplementation initialRouteName="Main">
            <Drawer.Screen name="Main" component={MainScreen}/>
            <Drawer.Screen name="WishList" component={WishListScreen}/>
            <Drawer.Screen name="ContactUs" component={ContactUsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
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

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <MainScreen/>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
// });