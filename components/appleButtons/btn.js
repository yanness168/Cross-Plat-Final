import { StyleSheet, Text, View, Button, Modal, Alert, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

const AppleBtns = ()=>{
    const magicMove = ()=>{
        return (
            console.log('jini')
        )
    }
    return(
        <View>
            <View style={styles.btnContainer}>
                <TouchableHighlight
                style={styles.button}
                // set color after being touched
                underlayColor="#b44f77"
                // set the effective clickable area
                hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
                // set the starting area for no effect
                pressRetentionOffset={20}
                //Must add "onPress()" to show color change
                onPress={magicMove}>
                
                <Text style= {styles.text}>Add To Wishlist</Text>
                </TouchableHighlight>
            </View>

            <View style={{width: "30%"}}>
                <Icon name="hearto" size={40} color="#FFFFFFA6" style={{marginLeft: 300}}/>
            </View>
            
        </View>
       
    )
}

export default AppleBtns;