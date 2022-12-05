import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../header';
//import * as Progress from 'react-native-progress';
import IpadList from '../productList/ipadList';

function MainScreen ({navigation}){
    const [isHide, setIsHide] = React.useState(true);
    setTimeout(() => setIsHide(false), 5000);
    return(
        <View>
            <Header/>
            {!isHide ? <IpadList/> : null}
        </View>
    );
}


export default MainScreen;