import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import AppleBtns from '../appleButtons/btn'

const AppleProduct = ()=>{


    return(
        <View style={styles.appleContainer}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/ipad_pro.png')}
          style={styles.image}/>

        <View style={styles.titles}>
            <Text style={styles.bigT}>iPad Pro</Text>
            <Text style={styles.subT}>Supercharged by M2 chip</Text>
            <Text style={styles.subT}>● From $1,099</Text>
        </View>
        <AppleBtns/>
      </View>
    )
}

export default AppleProduct;