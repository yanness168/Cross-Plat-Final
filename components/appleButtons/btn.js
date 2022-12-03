import { StyleSheet, Text, View, Button, Modal, Alert, TouchableHighlight, Image, Animated} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

const AppleBtns = ()=>{
    const [heartName, setHeartName] = React.useState(false);

    const initial = React.useRef(new Animated.Value(10)).current;

    const Heart = (props) =>{
        return <Animated.View style={[styles.heartV,{top: props.Top, transform: [{ rotate: props.Rotate }]}]}>
                <Icon name={getName} size={40} color={getColor} style={[styles.heart]}/>
        </Animated.View>
    }

    const magicMove = ()=>{
        setHeartName(value=>!value)
        //console.log(heartName)
        Animated.sequence([
            Animated.timing(initial, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
            Animated.timing(initial, {
            toValue: 10,
            duration: 500,
            useNativeDriver: false,
          }),
          ]).start();
    }

    const popModal = () =>{
        return
    }

    const getName = heartName === false ? "hearto" : "heart";
    const getColor = heartName === false ? 'grey' : "lightpink";
    const getUnderlayColor = heartName === false ? "lightpink" : '#FFFFFF';
    

    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
            <View style={styles.btn1Container}>
                <TouchableHighlight
                style={styles.button1}
                // set color after being touched
                underlayColor={getUnderlayColor}
                // set the effective clickable area
                hitSlop={{top: 40, left: 20, right: 20, bottom: 20}}
                // set the starting area for no effect
                pressRetentionOffset={20}
                //Must add "onPress()" to show color change
                onPress={magicMove}>
                    <Text style= {styles.text}>Add To Wishlist</Text>
                </TouchableHighlight>

                <Heart Top={initial} Rotate = {initial.interpolate({inputRange:[0,1], outputRange:['0deg','360deg']})}/>
            </View>

            
            <View style={styles.btn2Container}>
                <TouchableHighlight
                style={styles.button2}
                // set color after being touched
                underlayColor= '#FFFFFFA6'
                // set the effective clickable area
                hitSlop={{top: 40, left: 20, right: 20, bottom: 20}}
                // set the starting area for no effect
                pressRetentionOffset={20}
                //Must add "onPress()" to show color change
                onPress={popModal}>
                    <Text style= {[styles.text,{color:'#FFFFFF'}]}>Learn more about the magic</Text>
                </TouchableHighlight>
            </View>
        </View>
        
       
    )
}

export default AppleBtns;