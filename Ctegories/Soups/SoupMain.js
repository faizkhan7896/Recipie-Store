import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SoupNonveg from './SoupNonveg';
import Soupveg from './Soupveg';


import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {

    return (

        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,

                style: {
                    position: "absolute",
                    left: 85,
                    right: 85,
                    bottom: 25,
                    elevation: 0,
                    backgroundColor: "#2a2e37",
                    borderRadius: 45,
                    height: 90
                }
            }}
        >
            <Tab.Screen name="SoupNonveg" component={SoupNonveg}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text style={{ color: focused ? '#fff' : 'gray', fontSize: 18, fontWeight: "bold" }}>Veg</Text>
                            {/* <MaterialCommunityIcons
                                name="chef-hat" color={color} size={26} /> */}
                        </View>
                    ),
                }} />

            <Tab.Screen name="Soupveg" component={Soupveg}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text style={{ color: focused ? '#fff' : 'gray', fontSize: 18, fontWeight: "bold" }}>Non-Veg </Text>
                        </View>
                        // <Octicons name="search" color={color} size={26} />
                    ),
                }} />


        </Tab.Navigator>

    )
}

export default Tabs;