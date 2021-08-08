

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../Screens/Home'
import Search from '../SearchScreens/Search'
import Bookmark from '../Bookmark/Bookmark'
import Profile from '../Profile/Profile'





const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator

            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="red"
            barStyle={{
                backgroundColor: "#000",
                height: 70,
            }}

        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <MaterialCommunityIcons
                                style={{ color: focused ? '#fff' : 'gray', }}
                                name="view-dashboard" size={26} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <MaterialIcons
                                style={{ color: focused ? '#fff' : 'gray' }}
                                name="search" size={30} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Bookmark" component={Bookmark}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Feather
                                style={{ color: focused ? '#fff' : 'gray' }}
                                name="bookmark" size={23} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <MaterialCommunityIcons
                                style={{ color: focused ? '#fff' : 'gray' }}
                                name="menu" size={30} />
                        </View>
                    ),
                }} />
        </Tab.Navigator>




    );
}

