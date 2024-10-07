import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const EventScreen = () => {
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
        padding: 20,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    eventItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    eventName: {
        fontSize: 16,
        fontWeight: '600'
    },
    eventDate: {
        fontSize: 14,
        color: '#666'
    }
});

export default EventScreen;
