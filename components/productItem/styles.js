import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    appleContainer:{
        width:'100%', 
        height: '100%'
      },
      titles:{
        marginTop: '30%',
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
        color: "lightgrey"
      },
      image:{
        width:'100%',
        height:'100%',
        // To let text flow above
        position: 'absolute'
      }
});

export default styles;