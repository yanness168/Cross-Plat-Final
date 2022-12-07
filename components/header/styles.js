import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer:{
        position: 'absolute',
        top: 0,
        zIndex: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 15,
        margin: 10
    },
    logo:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    ham:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
});

export default styles;