import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    btn1Container:{
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "yellow",
        flexDirection: "row",
    },
    btn2Container:{
        width: '96%',
        padding: 10,
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
    }

});

export default styles;