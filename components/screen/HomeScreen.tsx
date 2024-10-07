import { View, Text, Button, SafeAreaView, Platform, StatusBar, Image, StyleSheet, ImageBackground } from 'react-native'
import PrayerSchedule from '../PrayerSchedule';
import UserHeader from './UserHeader';

const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, alignContent: 'center' }}>

          {/* Mini Header, provide user city location, name, profile */}
          <UserHeader/>
          
          {/* (Next) Pray Schedule with image background, large */}
          <PrayerSchedule/>

        </View>
      </SafeAreaView>
    );
  };



export default HomeScreen