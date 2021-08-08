import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';




function OfferList({ navigation }) {
    return (

        <View style={{ backgroundColor: '#000', flex: 1, width: "100%", alignSelf: "center", }}>
            <ScrollView>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Dragon')}>
                    <View style={{
                        flex: 1, backgroundColor: 'black', width: "100%", marginTop: 20
                    }}
                    >
                        <View
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/tinidragon.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Tini Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Rupert Carter</Text>
                                </View>
                                <View>
                                    <TouchableOpacity >

                                        <Feather
                                            style={{ marginLeft: 70, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>140p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Otherwords')}>


                    <View style={{
                        flex: 1, backgroundColor: 'black', width: "100%", marginTop: 15,
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/otherwords.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Other words</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        George Eliot</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 65, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>170p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Jaws')}>


                    <View style={{
                        flex: 1, backgroundColor: 'black', width: "100%", marginTop: 15,
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/Jaws.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The JAWS</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Lewis Carroll</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 115, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>110p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Underland')}>


                    <View style={{
                        flex: 1, backgroundColor: 'black', width: "100%", marginTop: 15,
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/underland.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Underland</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Premchand</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 83, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>180p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('Watching')}>


                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/watching.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        Watching World</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Louisa May</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 75, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>130p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Seceret')}>



                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/secret.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Seceret Dragon</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Lewis Carroll</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 40, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>200p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Muncipalist')}>



                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/muncipalist.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Munciapalist</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        George Orwell</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 65, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>115p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('noplace')}>



                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/place.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The No Place</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        George Eliot</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 102, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>135p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Orangetree')}>



                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/orangetree.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        The Orange Tree</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        Mark Twain</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 75, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>165p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Redplanet')}>


                    <View style={{
                        flex: 1, backgroundColor: 'black', marginTop: 15, width: "100%"
                    }}>
                        <View
                            // onPress={() => navigation.navigate('two')}
                            style={{ flexDirection: "row" }}>
                            <Image style={{
                                height: 150, width: "36%", marginLeft: -5, resizeMode: "contain", borderRadius: 20,
                            }}
                                source={require("../Assets/BookCover/Redplanet.png")} />
                            <View style={{ marginLeft: -28, flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.HeadingText}>
                                        Red Planet</Text>
                                    <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 25, }}>
                                        J.K Rowling</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ marginLeft: 123, marginTop: 15 }}
                                            name='bookmark'
                                            color='#76797f'
                                            backgroundColor='#000'
                                            size={28}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: -80, marginLeft: 125, }}>

                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <Ionicons
                                    style={{}}
                                    name='copy'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={25}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>185p</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <MaterialIcons
                                    style={{}}
                                    name='motorcycle'
                                    color='#76797f'
                                    backgroundColor='#000'
                                    size={28}
                                />
                                <Text style={{ color: '#76797f', fontSize: 15, marginTop: 6, marginLeft: 5, }}>12,4b</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <View style={styles.Adventurethree}>
                                <Text style={{ color: '#424BAF', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Drama</Text>

                            </View>
                            <View style={styles.Adventuretwo}>
                                <Text style={{ color: '#C5505E', fontSize: 15, marginTop: 6, alignSelf: 'center', marginTop: 8, }}>Romance</Text>
                            </View>
                            <View style={styles.Adventure}>
                                <Text style={{ alignSelf: 'center', color: '#31ad66', fontSize: 15, marginTop: 8, }}>Adventure</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>



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