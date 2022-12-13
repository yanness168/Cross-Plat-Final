import { StyleSheet, Text, View, Button, Modal, Alert, TouchableHighlight, Image, Animated, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";
import ipads from '../productList/ipads';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/actions/index'
//{ addItem, removeItem, workingList}, 
const AppleBtns = (props)=>{
    //name, catchyLine, price, liked, url, wishList,
    const dispatch = useDispatch()
    const wData = useSelector((store) => store.changeList.value)
    const {modalInfo} = props;
    const toList = modalInfo.map(m => (<Text style={styles.magicText}>{m}</Text>));
    const [stateData, setStateData] = React.useState({});
    const [heartName, setHeartName] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [counter, setCounter] = React.useState(0)

    React.useEffect(()=>{
        heartName ? handleAdd() : handleRemove()
    },[counter])
    
    React.useEffect(()=>{
        filterState();
    },[wData])
    //Functions to add and remove items from state array
    const handleAdd = (e) => {
        dispatch(addItem(stateData))
    };
    const handleRemove = (e) => {
        dispatch(removeItem(stateData))
    };
    const initial = React.useRef(new Animated.Value(10)).current;
    //Method to filter ipad item based on modal info
    //Sets the state data to the filtered ipad so that it can be passed to the state array
    const filter = () => {
        var filteredData = ipads.filter((item) => item.modalInfo == modalInfo)
        console.log(filteredData);
        setStateData(filteredData);
    }
    //Sets the state of the heart button based on
    //Whether the item is in the state array or not
    const filterState = () => {
        var filteredStateData = wData.filter((item) => item.modalInfo == modalInfo)
        console.log(filteredStateData)
        if(filteredStateData.length == 0) {
            setHeartName(false);
        } else {
            setHeartName(true);
        }
        
    }

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
          filter()
          console.log(stateData)
          setCounter(counter + 1)
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



export default AppleBtns