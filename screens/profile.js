/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,

} from 'react-native-paper';import { SafeAreaView } from 'react-native-safe-area-context';
import {MaterialIcon} from './Icons';


const ProfileScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection} >
          <View style={{flexDirection:'row'}}>
          <Avatar.Image
            source={{
                uri:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
            }}
            size={70}
            />
            <View style={{marginLeft:20}} >
              <Title style={[styles.title, {marginTop:15, marginBottom:1}]} >Karem Lazhar</Title>
              <Caption style={styles.caption} >@karemlazhar</Caption>
            </View>
          </View>
          </View>
          <View style={styles.userInfoSection} >
            <View style={styles.row}>
              <MaterialIcon name="map-marker-radius" color="#777777" size={'medium'}/>
              <Text style={{color:'#777777',marginLeft:10}} > Tunis, Tunisia</Text>
            </View>
            <View style={styles.row}>
              <MaterialIcon name="phone" color="#777777" size={'medium'}/>
              <Text style={{color:'#777777',marginLeft:10}} > 52658918</Text>
            </View>
            <View style={styles.row}>
              <MaterialIcon name="email" color="#777777" size={'medium'}/>
              <Text style={{color:'#777777', marginLeft:10}} > karem.lazhar@gmail.com</Text>
            </View>
            </View>
            <View style={styles.infoBoxWrapper} >
              <View style={[styles.infoBox,{
                borderRightColor:'#dddddd',
                borderRightWidth:1,
              }]}>
                <Title>140</Title>
                <Caption>Wallet</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Orders</Caption>
              </View>
            </View>
            <View style={styles.menuWrapper} >
              <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                  <MaterialIcon name="heart-outline" color="#ff6347" size="medium"/>
                  <Text style={styles.menuItemText} >Your favorites</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                  <MaterialIcon name="credit-card" color="#ff6347" size="medium"/>
                  <Text style={styles.menuItemText} >Payment</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                  <MaterialIcon name="share-outline" color="#ff6347" size="medium"/>
                  <Text style={styles.menuItemText} >Tell your friends</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                  <MaterialIcon name="account-check-outline" color="#ff6347" size="medium"/>
                  <Text style={styles.menuItemText} >Support</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                  <MaterialIcon name="cogs" color="#ff6347" size="medium"/>
                  <Text style={styles.menuItemText} >Settings</Text>
                </View>
              </TouchableRipple>
            </View>
      </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection:{
    paddingHorizontal: 60,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight:'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight:14,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row',
    marginBottom:10,
    marginLeft:90,
  },
  infoBoxWrapper:{
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddddd',
    borderTopWidth:1,
    flexDirection:'row',
    height:100,
  },
  infoBox: {
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
  },
  menuWrapper:{
    marginTop:10,
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,
  },
  menuItemText:{
    color:'#777777',
    marginLeft:15,
    fontWeight:'600',
    fontSize:15,
    lineHeight:22,
  },
});
