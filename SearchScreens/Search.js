
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
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import Searchbook from './Searchbook'
import Categories from '../Components/Categories'
import Searchslider from './Searchslider'

const App = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Container}>

                    <StatusBar
                        barStyle='light-content'
                        backgroundColor='#000' />


                    <View style={{
                        height: 50, width: "90%", alignItems: "center",
                        alignSelf: 'center', borderRadius: 10, backgroundColor: "#ffffff", flexDirection: "row", marginTop: 40
                    }}>

                        <Ionicons
                            style={{ marginLeft: 5 }}
                            name="search"
                            size={30}
                            color="black" />

                        <TextInput style={{
                            height: 50, width: "90%", color: "black", fontSize: 18,
                        }}
                            placeholder="Search Books , Author's" placeholderTextColor="black" />

                        <TouchableOpacity
                            // onPress={() => { navigation.navigate('Camerasearch') }}
                            style={{ height: 24, width: 100, marginLeft: -40 }}>

                            <Ionicons
                                style={styles.plusicon}
                                name="filter"
                                size={30}
                                color="black" />

                        </TouchableOpacity>
                    </View>

                    <Text style={styles.Text}>Author's</Text>
                    <Searchslider navigation={navigation} />

                    <Categories navigation={navigation} />

                    <Text style={styles.Text}>Cetegorie's</Text>
                    <Searchbook navigation={navigation} />


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
    // plusicon: {
    //     marginRight: -15,
    //     paddingLeft: 20,
    //     alignSelf: 'center',
    // },
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
        justifyContent: "space-between",
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
        paddingTop: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        fontSize: 20,
        fontWeight: '700',
        color: "#cfcfcf"
    },
    HeadingText: {
        paddingTop: 8,
        paddingLeft: 25,
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    },
    Button: {
        backgroundColor: "#f66631",
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
