import { ActivityIndicator, View, Image, StatusBar } from "react-native"
import { useEffect } from 'react';

import * as React from 'react';
import Index from "../Screens/Index";
// import Onboarding from "../Slider/Onboarding";
// import * as Animatable from 'react-native-animatable';


const Load = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    setTimeout(() => {
        setIsLoading(false);

    }, 800);

    if (isLoading) {

        return (
            <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#000" }}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#000' />
                <ActivityIndicator size="large" />
                <Image style={{
                    height: 400, width: "95%", resizeMode: "contain", borderRadius: 150
                }}
                    source={require("../Assets/Librarial.png")} />

            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Index navigation={navigation} />

        </View>
    )

}
export default Load;