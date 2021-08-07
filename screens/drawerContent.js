/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MaterialIcon} from './Icons';
import { AuthContext } from '../components/context';


const styles = StyleSheet.create({
    drawerContent: {
    flex: 1,
    },
    userInfoSection: {
    paddingLeft: 20,
    },
    title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    },
    caption: {
    fontSize: 14,
    lineHeight: 14,
    },
    row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    },
    section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    },
    paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    },
    drawerSection: {
    marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    },
});




export function DrawerContent(props){

    const [isDarkTheme, setInDarkTheme] = React.useState(false);
    const toggleTheme = () => {
    setInDarkTheme(!isDarkTheme);
    };

    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={{flex:1}} >
            <DrawerContentScrollView {...props}>
                <View  >
                    <View style={styles.userInfoSection} >
                        <View style={{flexDirection: 'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title} >Full Name</Title>
                                <Caption style={styles.caption}>@username</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]} >80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]} >100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                            </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color}) => (
                            <MaterialIcon
                            name="home-outline"
                            color={color}
                            size= {'medium'}
                            />
                        )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home');}}
                    />
                    <DrawerItem
                    icon={({color}) => (
                        <MaterialIcon
                        name="account-outline"
                        color={color}
                        size= {'medium'}
                        />
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile');}}
                    />
                    <DrawerItem
                    icon={({color}) => (
                        <MaterialIcon
                        name="account-check-outline"
                        color={color}
                        size= {'medium'}
                        />
                    )}
                    label="Details"
                    onPress={() => {props.navigation.navigate('Details');}}
                    />
                    <DrawerItem
                    icon={({color}) => (
                        <MaterialIcon
                        name="bookmark-outline"
                        color={color}
                        size= {'medium'}
                        />
                    )}
                    label="Post"
                    onPress={() => {props.navigation.navigate('Post');}}
                    />
                    <DrawerItem
                    icon={({color}) => (
                        <MaterialIcon
                        name="cogs"
                        color={color}
                        size= {'medium'}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings');}}
                    />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() =>{toggleTheme();}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none" >
                                <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
            <DrawerItem
            icon={({color}) => (
                <MaterialIcon
                name="exit-to-app"
                color={color}
                size= {'medium'}
                />
            )}
                label="Sign Out"
                onPress={() => {signOut()}}
                />

            </Drawer.Section>
        </View>
    );
}


