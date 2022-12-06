import { StyleSheet, Text, View, Button, Modal, Alert, TouchableHighlight, Image, Animated, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

const AppleBtns = (props)=>{
    const {modalInfo} = props;
    const toList = modalInfo.map(m => (<Text style={styles.magicText}>{m}</Text>));

    const [heartName, setHeartName] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const initial = React.useRef(new Animated.Value(10)).current;

    const Heart = (props) =>{
        return (
        <Animated.View style={[styles.heartV,{top: props.Top, transform: [{ rotate: props.Rotate }]}]}>
                <Icon name={getName} size={40} color={getColor} style={[styles.heart]}/>
        </Animated.View>)
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
            toValue: 5,
            duration: 500,
            useNativeDriver: false,
          }),
          ]).start();
    }

    const getName = heartName === false ? "hearto" : "heart";
    const getColor = heartName === false ? 'grey' : "lightpink";
    const getUnderlayColor = heartName === false ? "lightpink" : '#FFFFFF';
    

    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center", marginBottom: 20}}>
            <View style={{bottom: 100, position: 'absolute', width: "100%"}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View>
                    <View style={styles.modalView}>
                        {toList}
                        <Button onPress={() => setModalVisible(!modalVisible)} title="GREAT!"/>
                    </View>
                </View>
                </Modal>
            </View>

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
                onPress={() => setModalVisible(true)}>
                    <Text style= {[styles.text,{color:'#FFFFFF'}]}>Learn more about the magic</Text>
                </TouchableHighlight>
            </View>
        </View>
        
       
    )
}

export default AppleBtns;