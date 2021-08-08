
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {
    FlatList,
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

const App = ({ navigation }) => {


    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Container}>

                    <StatusBar
                        barStyle='light-content'
                        backgroundColor='#000' />

                    <Text style={styles.Text}>Welcome</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        {/* <Text style={styles.HeadingText}>Batricia Salfiora</Text> */}
                        <View style={{ flexDirection: "row" }}>

                            {/* <TouchableOpacity
                                onPress={() => navigation.navigate("Getpoint")}

                                style={styles.Button}>
                                <Entypo
                                    style={styles.plusicon}
                                    name="plus"
                                    size={30}
                                    color="#fff" />

                                <Text style={styles.ButtonText}>240</Text>
                                <Text style={styles.ButtonText2}>point</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>

                    <View style={styles.graycolum}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ flexDirection: "row" }}>
                                    <AntDesign
                                        style={styles.plusicon}
                                        name="scan1"
                                        size={30}
                                        color="#f77343" />
                                    <Text style={styles.columText}>Claim</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    // onPress={() => navigation.navigate("Getpoint")}
                                    style={{ flexDirection: "row" }}>
                                    <MaterialIcons
                                        style={styles.plusicon}
                                        name="gps-fixed"
                                        size={30}
                                        color="#f77343" />
                                    <Text style={styles.columText}>Get Point </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ flexDirection: "row" }}
                                // onPress={() => navigation.navigate("Pay")}
                                >
                                    <Ionicons
                                        style={styles.plusicon}
                                        name="card"
                                        size={30}
                                        color="#f77343" />
                                    <Text style={styles.columText}>My Card </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: "95%", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={styles.HeadingText}>Popullar</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("List")}
                        >
                            <Text style={styles.SeemoreText}>see more</Text>
                        </TouchableOpacity>
                    </View>

                    <BooksSlider navigation={navigation} />
                    <Categories navigation={navigation} />

                    <View style={{ width: "95%", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={styles.HeadingText}>All Recipie's</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("List")}
                        >
                            <Text style={styles.SeemoreText}>see more</Text>
                        </TouchableOpacity>
                    </View>
                    <List navigation={navigation} />


                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#000",
        flex: 1
    },
    plusicon: {
        marginLeft: -15,
        paddingLeft: 20,
        alignSelf: 'center',
    },
    SeemoreText: {
        paddingTop: 17,
        fontSize: 17,
        color: "#6e7177",
        textDecorationLine: 'underline',
    },
    graycolum: {
        backgroundColor: "#2a2e37",
        height: 80,
        width: "92%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        alignSelf: 'center',

        borderRadius: 20
    },
    columText: {
        fontSize: 16,
        color: "#fff",
        alignSelf: 'center',
        marginLeft: 10

    },
    Text: {
        paddingTop: 45,
        paddingLeft: 25,
        fontWeight: "bold",
        fontSize: 22,
        color: "#cfcfcf",
    },
    HeadingText: {
        paddingTop: 8,
        paddingLeft: 25,
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    Button: {
        backgroundColor: "#f77343",
        borderRadius: 20,
        width: 150,
        height: 45,
        flexDirection: "row"

    },
    ButtonText: {
        paddingLeft: 8,
        fontSize: 19,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center',

    },
    ButtonText2: {
        paddingLeft: 8,
        paddingTop: 5,
        fontSize: 17,
        color: "#fff",
        alignSelf: 'center',


    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
