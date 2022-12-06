import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer:{
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: 'space-between',
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