import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import AppleBtns from '../appleButtons/btn'

const AppleProduct = (props)=>{
    const {name, catchyLine, price, modalInfo, url} = props.ipad;

    return(
      <View style={styles.appleContainer}>
        <ImageBackground
          resizeMode="cover"
          source={url}
          style={styles.image}/>

        <View style={styles.titles}>
            <Text style={styles.bigT}>{name}</Text>
            <Text style={styles.subT}>{catchyLine}</Text>
            <Text style={styles.subT}>{price}</Text>
        </View>

        <View style={styles.bottonContainer}>
          <AppleBtns modalInfo = {modalInfo}/>
        </View>
      </View>
    )
}

export default AppleProduct;