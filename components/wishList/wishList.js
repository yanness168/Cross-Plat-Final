import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./styles";
import ipads from "../productList/ipads";
import WListItem from "./listItem";
import * as Progress from "react-native-progress";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/actions/index";
import { useIsFocused } from "@react-navigation/native";


const WishList = () => {
  console.log(listData)
  //Pulls data from state
  const wData = useSelector((store) => store.changeList.value)
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  //Method to clear state array, used in clear button
  const handleClearAll = (e) => {
    dispatch(clearItems());
  };
 
  //updates list upon change to state data
  useEffect(() => {
    console.log("focuse check:")
    console.log(isFocused)
    if(isFocused){
      setListData(wData);
    }
    console.log("data check:")
    console.log(wData)
    setListData(wData);
  },[isFocused, wData])

  //use state to alter data, defaults to ipads array
  const [listData, setListData] = useState(wData);
  //const [progress, setProgress] = useState(prog)

  //progress for the progress bar
  //gets progress by diving length of current list data by base list length
  var prog = listData.length / ipads.length;

  //const getting screen width for use in progress bar
  const barWidth = Dimensions.get("screen").width;
  return (
    <View style={styles.appleContainer}>
      <View style={{ alignItems: "center" }}>
        <Text> List Progress </Text>
        <Progress.Bar
          progress={prog}
          width={barWidth * 0.75}
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
          onPress={
            () => {
              //Call function to clear state array
              handleClearAll();
            }
          }
        >
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default WishList;
