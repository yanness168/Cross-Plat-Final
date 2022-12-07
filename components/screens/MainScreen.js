import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import React from 'react';
import Header from '../header';
import * as Progress from 'react-native-progress';
import IpadList from '../productList/ipadList';

function MainScreen ({navigation}){
    const [isHide, setIsHide] = React.useState(true);
    setTimeout(() => setIsHide(false), 3000);
    return(
        <View style={styles.container}>
            {!isHide ? <Header/> : null}
            {!isHide ? <IpadList/> : <Progress.CircleSnail color={['lightgrey']} indeterminate={true} style={{alignSelf: "center", margin:12}} loading={true}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MainScreen;