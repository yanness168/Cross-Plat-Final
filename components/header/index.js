import { StyleSheet, Image, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ()=>{
    
    return(
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require("../../assets/images/Apple-logo.png")}/>
        {/* <TouchableOpacity onPress={() => console.log("Press")} style={{ backgroundColor: "transparent" }}>
            <Image style={styles.ham} source={require("../../assets/images/hamburger.png")}/>
        </TouchableOpacity> */}
      </View>
    )
}

export default Header;