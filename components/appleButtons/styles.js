import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    btn1Container:{
        width: '90%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "yellow",
        flexDirection: "row",
    },
    btn2Container:{
        width: '96%',
        padding: 5,
        //backgroundColor: "blue",
    },
    button1:{
        height:40,
        width: "90%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        marginRight:10,
    },
    button2:{
        height:40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b48c4f',
        marginRight:10,
    },
    text:{
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    heartV:{
        //backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        paddingBottom: 20
    },
    modalView: {
        top: 300,
        margin: 15,
        backgroundColor: "#FFF7FF",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    magicText:{
        textAlign: "left",
        lineHeight: 25,
        fontSize:14
    }

});

export default styles;