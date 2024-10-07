import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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

const EventScreen = () => {

    let [fontsLoaded] = useFonts({
        PlusJakartaSans_200ExtraLight,
        PlusJakartaSans_300Light,
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
        PlusJakartaSans_800ExtraBold,
    });

    const events = [
        { id: '1', name: 'Islamic Lecture at Mosque', date: 'Oct 8, 2024' },
        { id: '2', name: 'Charity Event for Orphans', date: 'Oct 12, 2024' },
        { id: '3', name: 'Quran Recitation Contest', date: 'Oct 15, 2024' },
        { id: '4', name: 'Community Iftar Gathering', date: 'Oct 20, 2024' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events</Text>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <View style={styles.eventItem}>
                        <Text style={styles.eventName}>{item.name}</Text>
                        <Text style={styles.eventDate}>{item.date}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        // backgroundColor: '#fff',
        backgroundColor: 'transparent',
        margin: 0,
        borderRadius: 10
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 0,
        fontFamily: 'PlusJakartaSans_600SemiBold'
    },
    eventItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontFamily: 'PlusJakartaSans_600SemiBold'
    },
    eventName: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'PlusJakartaSans_600SemiBold'
    },
    eventDate: {
        fontSize: 10,
        color: '#666'
    }
});

export default EventScreen;
