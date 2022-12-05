import { StyleSheet, Image, View, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ()=>{
    
    return(
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require("../../assets/images/Apple-logo.png")}/>
        <Image style={styles.ham} source={require("../../assets/images/hamburger.png")}/>
      </View>
    )
}

export default Header;