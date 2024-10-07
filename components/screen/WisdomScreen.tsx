import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import {
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  } from '@expo-google-fonts/plus-jakarta-sans'

const WisdomScreen = () => {

    let [fontsLoaded] = useFonts({
        PlusJakartaSans_200ExtraLight,
        PlusJakartaSans_300Light,
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
        PlusJakartaSans_800ExtraBold,
    });
    const hadith = "The best among you are those who have the best manners and character. (Sahih al-Bukhari 3559)";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Hadist</Text>
            <Text style={styles.hadithText}>{hadith}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: 'transparent',
        margin: 0,
        // borderRadius: 10
    },
    title: {
        fontSize: 12,
        // fontWeight: 'bold',
        // marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontFamily: 'PlusJakartaSans_700Bold,'
    },
    hadithText: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#333',
        fontFamily: 'PlusJakartaSans_400Regular'
    }
});

export default WisdomScreen;
