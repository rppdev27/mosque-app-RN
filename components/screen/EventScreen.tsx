import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import {
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8; // 80% of screen width

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
    { id: '1', name: 'Islamic Lecture at Mosque', date: 'Oct 8, 2024', image: 'https://images.unsplash.com/photo-1575101261474-5cb5653bb416?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Charity Event for Orphans', date: 'Oct 12, 2024', image: 'https://images.unsplash.com/photo-1575100258174-933a616e605f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Quran Recitation Contest', date: 'Oct 15, 2024', image: 'https://images.unsplash.com/photo-1575101261474-5cb5653bb416?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Community Iftar Gathering', date: 'Oct 20, 2024', image: 'https://images.unsplash.com/photo-1575101261474-5cb5653bb416?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItemContainer}>
      <View style={styles.eventItem}>
        <Image source={{ uri: item.image }} style={styles.eventImage} />
        <View style={styles.eventInfo}>
          <Text style={styles.eventName}>{item.name}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + 10} // Width of item + margin
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 15, // Add padding at the bottom to ensure shadow is visible
  },
  eventItemContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: 5,
    paddingBottom: 10, // Add padding to ensure shadow is visible
  },
  eventItem: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  eventImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  eventInfo: {
    padding: 10,
  },
  eventName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  eventDate: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'PlusJakartaSans_400Regular',
  },
});

export default EventScreen;