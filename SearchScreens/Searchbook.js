import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {
        key: 'Best Of',
        img: require("../Assets/Searchbooks/Bestof.png"),
        link: "List"
    },
    {
        key: 'Adventure',
        link: "List",
        img: require("../Assets/Searchbooks/Adventure.png"),
    },
    {
        key: 'Romantic',
        link: "List",
        img: require("../Assets/Searchbooks/Romance.png.png"),
    },
    {
        key: 'Horror',
        link: "List",
        img: require("../Assets/Searchbooks/Horror.png"),
    },
    {
        key: 'Cartoon',
        link: "List",
        img: require("../Assets/Searchbooks/Dols.png"),
    },
    {
        key: 'Dragon',
        link: "List",
        img: require("../Assets/Searchbooks/Dragon.png"),
    },
    {
        key: 'Kings',
        link: "List",
        img: require("../Assets/Searchbooks/Kings.png"),
    },
    {
        key: 'Nature',
        link: "List",
        img: require("../Assets/Searchbooks/nature.png"),
    },
    {
        key: 'See All',
        link: "List",
        img: require("../Assets/Searchbooks/Three.png"),
    },

];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 2;
export default class App extends React.Component {
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View
                style={styles.item}
            >
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(item.link)}

                    style={{
                        height: 345, width: 165, alignItems: "center", justifyContent: "center",
                    }}>
                    <Image style={{
                        position: "absolute", width: "100%", resizeMode: "contain", borderRadius: 20, alignSelf: "center"
                    }}
                        source={item.img} />
                    <Text style={styles.itemText}>{item.key}</Text>
                </TouchableOpacity>
            </View >
        );
    };

    render() {
        return (
            <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 20,
        marginTop: -10

    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        flex: 1,
        margin: 10,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
        marginTop: 150,
        fontSize: 18,
        fontWeight: "bold"
    },
});