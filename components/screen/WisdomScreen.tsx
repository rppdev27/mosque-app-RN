import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WisdomScreen = () => {
    const hadith = "The best among you are those who have the best manners and character. (Sahih al-Bukhari 3559)";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Hadith</Text>
            <Text style={styles.hadithText}>{hadith}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        margin: 10,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    hadithText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#333'
    }
});

export default WisdomScreen;
