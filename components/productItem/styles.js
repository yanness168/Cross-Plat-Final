import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    appleContainer:{
        width:'100%', 
        height: Dimensions.get('window').height
      },
      titles:{
        marginTop: '20%',
        width: "100%",
        alignItems: 'center'
      },
      bigT:{
        fontSize: 40,
        fontWeight: '500',
        color: 'white'
      },
      subT:{
        fontSize: 16,
        color: "lightgrey",
        marginHorizontal: 20,
        textAlign: "center"
      },
      image:{
        width:'100%',
        height:'100%',
        // To let text flow above
        position: 'absolute'
      },
      bottonContainer:{
        position: 'absolute',
        bottom: 50,
        width: "100%"
      }
});

export default styles;