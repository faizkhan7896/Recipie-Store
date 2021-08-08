import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
} from "react-native";



const App = ({ navigation }) => {


    const listing = [


        {
            id: 'J.K Rowling',

            link: "List",
            img: require("../Assets/Authors/one.png"),

        },
        {
            id: 'Mark Twain',
            link: "List",
            img: require("../Assets/Authors/two.png"),

        },

        {
            id: 'George Eliot',
            link: "List",
            img: require("../Assets/Authors/three.png"),

        },


        {
            id: 'George Orwell',
            link: "List",
            img: require("../Assets/Authors/four.png"),

        },
        {
            id: 'Lewis Carroll',
            link: "List",
            img: require("../Assets/Authors/five.png"),

        },
        {
            id: 'Louisa May',
            link: "List",
            img: require("../Assets/Authors/six.png"),

        },

        {
            id: 'Premchand',
            link: "List",
            img: require("../Assets/Authors/eight.png"),

        },

    ];


    return (
        <ScrollView>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    data={listing}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link)}
                            style={{ marginTop: 10, width: 130, backgroundColor: '#000', marginBottom: 30, }}>

                            <Image style={{
                                height: 60, width: 115, resizeMode: "contain", borderRadius: 150,
                            }}
                                source={item.img} />
                            <Text style={{ alignSelf: 'center', color: "#fff", width: 100, marginTop: 10 }}>{item.id}</Text>
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