import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ToastAndroid } from 'react-native';

function ContactUsScreen ({navigation}){
    const [formStatus, setFormStatus] = React.useState('Submit');
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const Seperator = () =>{
        return <View style={styles.seperator}></View>
    }
    
    const buttonConfig = [
        {text:"Yes", onPress:()=>{ToastAndroid.show("Thank You "+JSON.stringify(name), ToastAndroid.SHORT),
        setFormStatus('Submit')}},
        {text:"No", onPress:()=>{}}
    ]
    const submit = () => {
        Alert.alert("Attention", "Are you sure to submit?",buttonConfig);
        setFormStatus('Submitting...');
        setEmail('');
        setName('');
        setMessage('');
    }
    
    return(
        <View style={styles.container}>
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
    }
})

export default ContactUsScreen;