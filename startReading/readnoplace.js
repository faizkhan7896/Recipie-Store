
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'

import BooksSlider from '../Components/BooksSlider'
import Categories from '../Components/Categories'

const Read = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "space-between", width: "95%", alignSelf: 'center', }}>
                    <TouchableOpacity style={{}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            style={styles.plusicon}
                            name="ios-arrow-back-outline"
                            size={30}
                            color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.HeadingText}>Detail Book</Text>
                    <Entypo
                        style={styles.plusicon}
                        name="dots-two-horizontal"
                        size={30}
                        color="#fff" />

                </View>

                <Image
                    source={require('../Assets/BookCover/place.png')}
                    style={{ height: 230, width: "50%", resizeMode: "contain", alignSelf: 'center', marginTop: 20 }}
                />
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Text style={styles.HeadingText}>
                        The Tini Dragon</Text>
                    <Text style={{ color: '#fff', fontSize: 15, marginTop: 6, alignSelf: 'center', }}>
                        Rupert Carter</Text>
                </View>

                <View style={styles.graycolum}>

                    <View style={{ marginLeft: 10, flexDirection: "row", width: "93%", justifyContent: "space-between", alignSelf: 'center', }}>
                        <View style={{}}>

                            <Text style={styles.detailText}>4.5</Text>
                            <Text style={styles.columText}>Claim</Text>
                        </View>
                        <View style={{}}>

                            <Text style={{ fontSize: 30, color: "#cfcfcf", marginLeft: 13, marginTop: -3, opacity: 0.5 }}>|</Text>
                        </View>

                        <View style={{}}>
                            <Text style={styles.detailText}>140</Text>

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
                    source={require('../Assets/BookCover/place.png')}
                    style={{ height: 598, width: "100%", opacity: 0.2, position: "absolute" }}
                />
                <Text style={[styles.paragraph, { marginTop: 100 }]}>The forest was so beautiful this time of year. That was what Carla thought while she ran along a secluded trail, comfortable in the autumn coolness. The stately aspen with striking yellow leaves stood sentinel over the winding, packed-earth path. She didn’t even need music on these runs; the sounds of nature and her own rhythmic footfalls put her in a relaxed, meditative state. The miles flew by in this untamed paradise.</Text>
                <Text style={styles.paragraph}>Carla was in another world when it happened. A daydream had slipped into her mind of a forest just like this one, but with elves and magic and fantastic beasts. She imagined herself a proud huntress while she ran, swift as a deer in the woods, chasing—</Text>
                <Text style={styles.paragraph}>In her distraction, Carla did not notice the patch of wet leaves bordering the upcoming bend in the trail where the terrain fell away sharply to one side. Her right foot came down and kept right on going; the slick leaves yielded like ice. She hardly had time to make a sound as balance failed her completely, and she pitched headlong off the trail, her vision dissolved into a spinning blur of yellow and brown.</Text>
                <Text style={styles.paragraph}>It was not a hard fall—in fact it was more of a roll—and Carla had the good fortune of dodging the aspen trunks during her cartwheeling trip down the steep slope. Time stretched out, and she seemed to fall for a dizzying eternity, but eventually came to rest in a splayed-out fashion at the foot of the ridge. A breath entered and left her lungs while she lay still, blinking until the world slowly stopped spinning before her eyes. Carla groaned in annoyance; she was only lightly bruised, but felt altogether foolish and now had to make the long trek back up to join the path again.</Text>
                <Text style={styles.paragraph}>She elbowed herself up off the leafy ground and looked around for the right way to go, still thoroughly disoriented. That was when she saw it.</Text>
                <Text style={styles.paragraph}>It was pressed up against a fallen log only a few feet away, almost motionless. She blinked. It was obviously a dragon; there was no other way to describe it. The creature was covered in light brown scales, almost white on the underside, with parchment-like wings spread out behind. It was also barely more than a foot long, about the size of an average squirrel.</Text>
                <Text style={styles.paragraph}>“Oh my god,” Carla said aloud. It was all she could think to say as she stared open-mouthed at the impossible creature.</Text>
                <Text style={styles.paragraph}>The little dragon unfroze, head drooping slightly. “Well, I suppose you did see me after all,” he said sadly. Carla felt certain the voice was male, even as she could scarcely accept that she had heard it speak at all.</Text>
                <Text style={styles.paragraph}>She gasped in surprise. “You—” she sputtered incredulously, “you can talk?”</Text>
                <Text style={styles.paragraph}>In her distraction, Carla did not notice the patch of wet leaves bordering the upcoming bend in the trail where the terrain fell away sharply to one side. Her right foot came down and kept right on going; the slick leaves yielded like ice. She hardly had time to make a sound as balance failed her completely, and she pitched headlong off the trail, her vision dissolved into a spinning blur of yellow and brown.</Text>
                <Text style={styles.paragraph}>It was not a hard fall—in fact it was more of a roll—and Carla had the good fortune of dodging the aspen trunks during her cartwheeling trip down the steep slope. Time stretched out, and she seemed to fall for a dizzying eternity, but eventually came to rest in a splayed-out fashion at the foot of the ridge. A breath entered and left her lungs while she lay still, blinking until the world slowly stopped spinning before her eyes. Carla groaned in annoyance; she was only lightly bruised, but felt altogether foolish and now had to make the long trek back up to join the path again.</Text>
                <Text style={styles.paragraph}>She elbowed herself up off the leafy ground and looked around for the right way to go, still thoroughly disoriented. That was when she saw it.</Text>
                <Text style={styles.paragraph}>It was pressed up against a fallen log only a few feet away, almost motionless. She blinked. It was obviously a dragon; there was no other way to describe it. The creature was covered in light brown scales, almost white on the underside, with parchment-like wings spread out behind. It was also barely more than a foot long, about the size of an average squirrel.</Text>
                <Text style={styles.paragraph}>“Yes, yes, you can hardly believe it,” the dragon said, utterly blasé. He dropped to all fours and fluttered his wings, before adding in a low voice, apparently to himself, “It’s like I’m not even camouflaged.”</Text>
                <Text style={styles.paragraph}>“Yes, yes, you can hardly believe it,” the dragon said, utterly blasé. He dropped to all fours and fluttered his wings, before adding in a low voice, apparently to himself, “It’s like I’m not even camouflaged.”</Text>
                <Text style={[styles.HeadingText, { alignSelf: 'center', marginBottom: 100, marginTop: 100 }]}>Thank's For Reading</Text>
                <Categories navigation={navigation} />
                <BooksSlider navigation={navigation} />

            </ScrollView>
        </View>
    )
}

export default Read

const styles = StyleSheet.create({
    paragraph: {
        padding: 16,
        fontSize: 17,
        color: "#fff",
    },
    Container: {
        backgroundColor: "#1d212a",
        flex: 1
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
})
