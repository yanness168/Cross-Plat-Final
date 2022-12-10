import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  appleContainer: {
    width: '100%',
    height: '100%',
    //height: Dimensions.get('window').height,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
    top: -30,
    flex: 1,
    flexWrap: 'wrap'
  },
  clearText: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  li:{
    height: 50,
    //marginTop: 10,
    //paddingVertical: 20,
    //paddingHorizontal: 20,
    backgroundColor: 'white'
  },

  info: {
    marginLeft: 10,
  },
  button1: {
    height: 80,
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0D70C',
    
  },
  btn1Container: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: "#F0D70C",
  },
  coverImage: {
    width: 75,
    height: 75,
    top: 5,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: -15, height: -15 },
    shadowOpacity: 0.1,
  },
  titles: {
    marginTop: '20%',
    width: '100%',
    alignItems: 'center',
  },
  listItem: {
    //marginTop: 10,
    //paddingVertical: 20,
    //paddingHorizontal: 20,
    width: "100%",
    //height: "100%",
    backgroundColor: '#E5E5E5',
    
    flexDirection: 'row',
  },
  buttonStyle:{
    width: '100%',
    height: 115,
    backgroundColor: 'pink',
    top: 14
  },
  
  bigT: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  subT: {
    top: -30,
    fontSize: 16,
    color: '#E3A36A',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    // To let text flow above
    position: 'absolute',
  },
  bottonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  
});

export default styles;
