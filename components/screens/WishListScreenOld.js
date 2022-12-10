import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import React from 'react';

function WishListScreenOld ({navigation}){
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
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

export default WishListScreenOld;