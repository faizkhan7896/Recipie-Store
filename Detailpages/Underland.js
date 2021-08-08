
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import BooksSlider from '../Components/BooksSlider'
import Categories from '../Components/Categories'
import List from '../Components/List'

const Dragon = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "space-between", width: "95%", alignSelf: 'center', }}>
                <Ionicons
                    style={styles.plusicon}
                    name="ios-arrow-back-outline"
                    size={30}
                    color="#fff" />
                <Text style={styles.HeadingText}>Detail Book</Text>
                <Entypo
                    style={styles.plusicon}
                    name="dots-two-horizontal"
                    size={30}
                    color="#fff" />

            </View>
            <Image
                source={require('../Assets/BookCover/underland.png')}
                style={{ height: 230, width: "50%", resizeMode: "contain", alignSelf: 'center', marginTop: 20 }}
            />
            <View style={{ alignSelf: 'center', marginTop: 10 }}>
                <Text style={styles.HeadingText}>
                    The Underland</Text>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 6, alignSelf: 'center', }}>
                    Premchand</Text>
            </View>

            <View style={styles.graycolum}>

                <View style={{ marginLeft: 10, flexDirection: "row", width: "93%", justifyContent: "space-between", alignSelf: 'center', }}>
                    <View style={{}}>

                        <Text style={styles.detailText}>3.5</Text>
                        <Text style={styles.columText}>Claim</Text>
                    </View>
                    <View style={{}}>

                        <Text style={{ fontSize: 30, color: "#cfcfcf", marginLeft: 13, marginTop: -3, opacity: 0.5 }}>|</Text>
                    </View>

                    <View style={{}}>
                        <Text style={styles.detailText}>180</Text>

                        <Text style={styles.columText}>Number of pages </Text>
                    </View>
                    <View style={{}}>

                        <Text style={{ fontSize: 30, color: "#cfcfcf", marginTop: -3, opacity: 0.5 }}>|</Text>
                    </View>

                    <View style={{}}>
                        <Text style={styles.detailText}>Eng</Text>

                        <Text style={styles.columText}>Language</Text>
                    </View>
                </View>
            </View>
            <ImageBackground
                source={require('../Assets/BookCover/underland.png')}
                style={{ height: 598, width: "100%", opacity: 0.2, marginTop: -580 }}
            />
            <ScrollView
                contentContainerStyle={{ paddingLeft: 20 }}
                showsVerticalScrollIndicator={false}>
                <View style={{ marginLeft: 30 }}>
                    <Text style={styles.HeadingText}>
                        Description</Text>
                    <Text style={{ color: '#fff', fontSize: 15, marginTop: 6, alignSelf: 'center', }}>   Kim now had two dragons; one was the tiny dragon Named Liz. ... Kim liked the way she could speak to any dragon she liked. It made Communication so much easier for her. She was the only human who could talk to any Dragon, which was why everyone in the weyr respected her.</Text>
                    <Text style={{ color: '#fff', fontSize: 15, marginTop: 6, alignSelf: 'center', }}>       Kim now had two dragons; one was the tiny dragon Named Liz. ... Kim liked the way she could speak to any dragon she liked. It made Communication so much easier for her. She was the only human who could talk to any Dragon, which was why everyone in the weyr respected her.</Text>
                </View>


            </ScrollView>

            <View style={{ flexDirection: "row", width: "97%", justifyContent: "space-between", marginBottom: 5 }}>
                <TouchableOpacity
                    onPress={() => alert(" Added to Bookmark")}>

                    <Feather
                        style={{
                            marginLeft: 25, marginTop: 10, backgroundColor: "#2a2e37", height: 60,
                            width: 60, padding: 16, borderRadius: 13
                        }}
                        name='bookmark'
                        color='#76797f'
                        size={28}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.navigate("readUnderland")}>
                    <Text style={styles.ButtonText}>Start Reading</Text>
                </TouchableOpacity>
            </View>

            <StatusBar
                barStyle='light-content'
                backgroundColor='#1d212a' />
        </View>

    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#1d212a",
        flex: 1
    },
    ButtonText: {
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center',
        marginTop: 13


    },

    Button: {
        backgroundColor: "#fa7b4c",
        borderRadius: 10,
        width: "70%",
        height: 60,
        alignSelf: 'center',

    },
    plusicon: {
        marginLeft: -15,
        paddingLeft: 20,
        alignSelf: 'center',
    },
    graycolum: {
        backgroundColor: "#464a54",
        height: 80,
        width: "82%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignSelf: 'center',

        borderRadius: 20
    },
    columText: {
        fontSize: 11,
        color: "#fff",
        alignSelf: 'center',
        marginLeft: 10

    },
    Text: {
        paddingTop: 45,
        paddingLeft: 25,
        fontSize: 17,
        fontWeight: '600',
        color: "#cfcfcf"
    },
    HeadingText: {
        paddingTop: 8,
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    detailText: {
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: 'center',
        color: "#fff"
    },

});

export default Dragon;
