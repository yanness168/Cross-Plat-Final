import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import styles from './styles';
import ipads from '../productList/ipads';
import WListItem from './listItem';
import * as Progress from 'react-native-progress';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const WishList = (props) => {
  //method used to filter the list based off it's liked status
  const filter = () => {
    var filteredData = ipads
      .filter((item) => item.liked == true)
      .map(({ name, catchyLine, price, modalInfo, liked, url, wishList }) => ({
        name,
        catchyLine,
        price,
        modalInfo,
        liked,
        url,
        wishList,
      }));
      //sets the filtered data here
    setListData(filteredData);
  };
  //use effect disabled for now for testing purposes
  // useEffect(() => {

  //   filter()
  //   updateProg()
  
    
  // },[counter])
  // const updateProg = () => {
  //   setProgress(prog)
  //   console.log(prog)
  // }
   const incrementCounter = () => {
    setCounter(counter + 1);
    console.log(counter)
  };
  //counter for use state
  const [counter, setCounter] = useState(0)
  //use state to alter data, defaults to ipads array
  const [listData, setListData] = useState(ipads);
  //const [progress, setProgress] = useState(prog)

  //progress for the progress bar
  //gets progress by diving length of current list data by base list length
  var prog = listData.length/ipads.length;
  
  //const getting screen width for use in progress bar
  const barWidth = Dimensions.get("screen").width;
  return (
    <View style={styles.appleContainer}>
      <View style={{alignItems: "center"}}>
        <Text> List Progress </Text>
        <Progress.Bar progress={prog} width={barWidth * 0.75} 
        //multiplied by 0.75 to take up 75% of the screen only
        />
      </View>
      <FlatList
        //pretty much same code as in the main screen for flatlist
        data={listData}
        renderItem={({ item }) => <WListItem ipad={item} />}
        keyExtractor={({ item }, index) => index.toString()}
      />
      <View style={styles.btn1Container}>
        <TouchableOpacity
          style={styles.button1}
          hitSlop={{ top: 40, left: 20, right: 20, bottom: 20 }}
          pressRetentionOffset={20}
          onPress={()=> {
            filter()
            //updateProg()
          }
          //incrementCounter()
          }>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WishList;
