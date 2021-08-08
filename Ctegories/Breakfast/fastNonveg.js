import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';




function OfferList({ navigation }) {

    const Spacer = () => {
        return (
            <View style={{ height: 1, width: "70%", backgroundColor: "#76797f", marginLeft: 130, }}>

            </View>
        )
    }

    return (

        <View style={{ backgroundColor: '#000', flex: 1, width: "100%", alignSelf: "center", }}>
            <ScrollView>

                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />
                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />

                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />

                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />

                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />

                <TouchableOpacity
                    style={{}}
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        justifyContent: 'center', backgroundColor: 'black', width: "100%", height: 170
                    }}
                    >
                        <View
                            style={{ flexDirection: "row", marginTop: -22 }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>And if you want to receive my </Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>last shots follow me.</Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -50, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>30 min</Text>
                            </View>
                            {/* <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View> */}
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View> */}
                    </View>
                </TouchableOpacity>
                <Spacer />


            </ScrollView>
        </View>

    )
}
export default OfferList;


const styles = StyleSheet.create({
    HeadingText: {
        paddingTop: 8,
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff"
    },
    Adventure: {
        backgroundColor: "#213432",
        height: 40,
        width: 95,
        borderRadius: 10
    },
    Adventurethree: {
        backgroundColor: "#22273B",
        marginLeft: 140,
        height: 40,
        width: 75,
        borderRadius: 10
    },
    Adventuretwo: {
        backgroundColor: "#31262f",
        height: 40,
        width: 85,
        borderRadius: 10
    },
});


{/* <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    style={{ marginLeft: 135, marginTop: 3 }}
                                    name='star'
                                    color='#d42f2f'
                                    backgroundColor='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#d42f2f', marginTop: 5, marginLeft: 8, fontSize: 12 }}>4.7</Text>

                            <TouchableOpacity
                                // onPress={() => navigation.goBack()}
                                style={[styles.signIn, {
                                    backgroundColor: '#d42f2f',
                                    marginLeft: 80
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff',

                                }]}>$ 7.3</Text>
                            </TouchableOpacity>

                        </View> */}