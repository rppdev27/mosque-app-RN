import React from 'react';
import { View, SafeAreaView, Platform, StatusBar, StyleSheet, FlatList } from 'react-native';
import PrayerSchedule from '../PrayerSchedule';
import UserHeader from './UserHeader';
import WisdomScreen from './WisdomScreen';
import EventScreen from './EventScreen';
import MenuList from './MenuList';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'header':
        return <UserHeader />;
      case 'prayer':
        return <PrayerSchedule />;
      case 'wisdom':
        return <WisdomScreen />;
      case 'event':
        return <EventScreen />;
      case 'menu':
        return <MenuList />;
      default:
        return null;
    }
  };

  const data = [
    { type: 'header', key: 'header' },
    { type: 'prayer', key: 'prayer' },
    { type: 'wisdom', key: 'wisdom' },
    { type: 'event', key: 'event' },
    { type: 'menu', key: 'menu' },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollViewContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;