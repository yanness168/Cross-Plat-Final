import React from 'react';
import { Keyboard, StyleSheet, Text, View, Button, Image, TextInput, Alert, ToastAndroid, Animated } from 'react-native';

function ContactUsScreen ({navigation}){
    const [formStatus, setFormStatus] = React.useState('Submit');
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const initial = React.useRef(new Animated.Value(0)).current;

    const Seperator = () =>{
        return <View style={styles.seperator}></View>
    }
    
    const buttonConfig = [
        {text:"Yes", onPress:()=>{Keyboard.dismiss(),
        ToastAndroid.show("Thank You "+JSON.stringify(name), ToastAndroid.SHORT),
        setFormStatus('Submit')
        setEmail('');
        setName('');
        setMessage('');
        Animated.sequence([
            Animated.timing(initial, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
              }),
            Animated.timing(initial, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false,
            }),
        ]).start();

    }},
        {text:"No", onPress:()=>{setFormStatus('Submit')}}
    ]
    const submit = () => {
        Alert.alert("Attention", "Are you sure to submit?",buttonConfig);
        setFormStatus('Submitting...');
    }
    
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.fadingContainer,{opacity: initial}]}>
                <Image style={styles.logo} source={require("../../assets/images/thank.png")}/>
            </Animated.View>
            <Text style={{fontWeight:"bold",margin:10, fontSize: 36}}>LEAVE YOUR PRECIOUS OPINION</Text>
          <View style={styles.form}>
            <TextInput style={styles.input} underlineColorAndroid = "transparent"
            placeholder = "Enter Your Name" keyboardType="text" value={name} onChangeText={(e)=>setName(e)} required/>

            <TextInput style={styles.input} underlineColorAndroid = "transparent"
            placeholder = "Enter Your Email" keyboardType="email" value={email} onChangeText={(e)=>setEmail(e)} required/>

            <TextInput style={[styles.input,{height: 80}]} underlineColorAndroid = "transparent"
            placeholder = "Enter Your Message to Us" keyboardType="text" value={message} onChangeText={(e)=>setMessage(e)} 
            multiline={true} numberOfLines={4} required/>

            <Button type="submit" title={formStatus} onPress={submit}/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 3,
        borderColor: "transparent",
        borderBottomColor: "#b48c4f",
        borderRadius:15,
        marginVertical:15,
        borderColor: 2,
        width: 300,
        height: 50
    },
      form:{
        margin:10
    },
    seperator:{
        margin:5
    },
    logo:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})

export default ContactUsScreen;