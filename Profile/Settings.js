

import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    TextInput,
    ScrollView,

} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import PizzaSlide from '../Components/PizzaSlide'
// import Categories from '../Components/Categories'

function SignInScreen({ navigation }) {
    return (



        <View style={styles.container}>

            <StatusBar backgroundColor='#f77343' BarStyle='light-content' />

            <View style={styles.header}>
                <View style={{
                    flexDirection: "row", width: '63%', justifyContent: "space-between", marginTop: 40
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name='md-chevron-back-circle-outline'
                            color='#fff'
                            size={33}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text_header}>Settings</Text>

                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                    <MaterialIcons
                        name='edit'
                        color='#f77343'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -130, alignSelf: 'center', }}>Edit Profile</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <Fontisto
                        name='person'
                        color='#f77343'
                        size={28}
                    />

                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -80, alignSelf: 'center', }}>Account Setting</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <Fontisto
                        name='bell-alt'
                        color='#f77343'
                        size={25}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -120, alignSelf: 'center', }}>Notification</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='lock'
                        color='#f77343'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -90, alignSelf: 'center', }}>Privacy & Data</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 80 }}>
                    <MaterialIcons
                        name='help'
                        color='#f77343'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -150, alignSelf: 'center', }}>Get Help</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='feedback'
                        color='#f77343'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#fff", marginLeft: -80, alignSelf: 'center', }}>Send Feedback</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 20 }}>
                    <MaterialIcons
                        name='logout'
                        color='#f77343'
                        size={32}
                    />
                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#f77343", marginLeft: -150, alignSelf: 'center', }}>Sign out</Text>
                    <MaterialIcons
                        name='navigate-next'
                        color='#f77343'
                        size={32}
                    />
                </TouchableOpacity>







            </View>

        </View >


    );
}
export default SignInScreen;

const { height } = Dimensions.get("screen");

const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f77343'
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
    },
    footer: {
        flex: 5,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23,
        alignSelf: "center",
        marginTop: -5



    },
    text_footer: {
        fontSize: 13,
        color: "#f77343",
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: -8
    },
    text_footer2: {
        fontSize: 13,
        color: "#fff",
        marginLeft: 50,
        marginTop: -18
    },
    signIn: {
        width: '70%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});