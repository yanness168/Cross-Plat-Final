import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import ipads from './ipads';
import AppleProduct from '../productItem/productItem';

const IpadList = (props)=>{
    
    return(
      <View style={styles.listContainer}>
        <FlatList
        data={ipads}
        renderItem={({item})=><AppleProduct ipad={item}/>}
        keyExtractor={({item}, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}/>
      </View>
    )
}

export default IpadList;