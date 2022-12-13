import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/actions/index";
import styles from './styles';
//Import for Swipeable list
import { ListItem } from '@rneui/themed';
//Import for broken heart image in swipe menu
const heartImg = require('../../assets/images/wishListImages/Broken_heart.svg.png');

const WListItem = (props) => {

  const dispatch = useDispatch()
  //Removes specified ipad from the array
  const handleRemove = (e) => {
    dispatch(removeItem(props.ipad));
  };
  //Props being pulled from ipads on wishlist component
  var { name, price, wishList } = props.ipad;
  return (
    <ListItem.Swipeable
      //Styling for content that gets reviewed when swiping to the left
      rightStyle={styles.li}
      //content being rendered when swiping to the left
      rightContent={(reset) => (
        <TouchableOpacity
          onPress={() => {
            //need redux code here to adjust liked true/false state
            handleRemove()
            reset();
          }}
          
          style={styles.buttonStyle}>
          <View >
            <Image
              //Broken heart image rendred on swipe 
              
              source={heartImg}
              style={{ width: 50, height: 40, top: 30, left: 25}}
            />
          </View>
          <View style={{ top: 35, left: 17 }}>
            
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Unlike
            </Text>
          </View>
        </TouchableOpacity>
      )}>
        
      <View style={styles.listItem}
      //formatting structure of the ipads being rendered in the list
      >
        <Image source={wishList} style={styles.coverImage} />
        <View style={styles.info}>
          <Text
            style={{
              fontSize: 20,
              color: '#101010',
              marginTop: 60,
              fontWeight: '700',
              top: -30,
              flex: 1,
              flexWrap: 'wrap',
            }}>
            {name}
          </Text>
          <Text style={styles.subT}>{price}</Text>
        </View>
      </View>
    </ListItem.Swipeable>
  );
};

export default WListItem;
