
import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
} from "react-native";



const App = ({ navigation }) => {


    const listing = [
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best2 Seller',
            link: "Dragon",
            img: require("../Assets/Soup/breakfast.jpg"),

        },

        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best ',
            link: "Otherwords",
            img: require("../Assets/Soup/one.jpg"),

        },
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: ' Seller',
            link: "Muncipalist",
            img: require("../Assets/Soup/two.jpg"),

        },


        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best Selle1r',
            link: "Underland",
            img: require("../Assets/Soup/panner.jpg"),

        },
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best Se4ller',
            link: "Watching",
            img: require("../Assets/Soup/dessert.jpg"),

        },
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best Sealler',
            link: "Orangetree",
            img: require("../Assets/Soup/one.jpg"),

        },
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best Secller',
            link: "Redplanet",
            img: require("../Assets/Soup/two.jpg"),

        },
        {
            icon: "clockcircleo",
            page: "1d 5h",
            icontwo: "content-copy",
            page2: "2d 5h",
            id: 'Best Secler',
            link: "Jaws",
            img: require("../Assets/Soup/breakfast.jpg"),

        },

    ];


    return (
        <ScrollView>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    data={listing}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link, { book: item })}
                            style={{
                                height: 345, width: 170, alignItems: "center",
                                justifyContent: "center", borderRadius: 50, marginLeft: 30,
                            }}>
                            <Image style={{
                                height: "500%", position: "absolute", width: "100%", resizeMode: "contain", borderRadius: 20, alignSelf: "center"
                            }}
                                source={item.img} />

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
{/* <Text style={{ marginTop: 300, fontWeight: "bold", fontSize: 18, color: "blue" }}>{item.id}</Text> */ }
{/* <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                                <AntDesign
                                    style={{ marginTop: 290, }}
                                    name={item.icon}
                                    color="gray"
                                    size={18} />
                                <Text style={{ marginTop: 290, fontWeight: "bold", color: "gray" }}>{item.page}</Text>

                                <MaterialCommunityIcons
                                    style={{ marginTop: 290, }}
                                    name={item.icontwo}
                                    color="gray"
                                    size={20} />
                                <Text style={{ marginTop: 290, fontWeight: "bold", color: "gray" }}>{item.page2}</Text>

                            </View> */}

