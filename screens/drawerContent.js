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
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{flex:1}} >
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Main Content</Text>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
            <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />

            </Drawer.Section>
        </View>
    );
}


