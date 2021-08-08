import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
} from "react-native";



const App = ({ navigation }) => {


    const listing = [


        {
            id: 'Breakfast',
            link: "BreakMain"
        },
        {
            id: 'Lunch',
            link: "LunchMain"
        },
        {
            id: 'Dinner',
            link: "DinnerMain"
        },
        // {
        //     id: 'Beverages',
        //     link: "List"
        // },

        {
            id: 'Soups',
            link: "SoupMain"
        },
        {
            id: 'Desserts',
            link: "Dessert"
        },


    ];


    return (
        <ScrollView>
            <View style={{ marginBottom: 20 }}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    data={listing}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link)}
                            style={{
                                height: 40, width: 170, backgroundColor: '#f77343', alignItems: "center",
                                justifyContent: "center", borderRadius: 50, marginLeft: 20
                            }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>{item.id}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: "row",
        padding: 16,
        marginTop: 15
    },
    navigationContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },

    paragraph: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30, fontSize: 20,
        fontWeight: "bold"
    }
});

export default App;


// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

// export default HomeScreen;