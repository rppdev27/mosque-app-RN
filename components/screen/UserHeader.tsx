import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useAppStore from '../../store';
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

const UserHeader = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  const location = useAppStore((state) => state.userLocation);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <View>
          <Text style={styles.locationLabel}>Your Location</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/profile-1575218989160-92f21bab8317image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
          }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.bottomView}>
        <Image
          source={{
            uri: 'https://ik.imagekit.io/vtvggda66/mtf2(1).jpg?updatedAt=1728272338211',
          }}
          style={styles.image}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.title}>Jadwal Shalat</Text>
          <Text style={styles.time}>19.40 WIB</Text>
          <Text style={styles.date}>Sunday, 14 March 2024</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    height: 200,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#28adef',
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
    height: 120,
  },
  bottomView: {
    position: 'absolute',
    top: 55, // This places it halfway down the topView
    left: '5%', // This centers it horizontally
    width: '90%', // 80% of the parent width
    height: 120,
    borderRadius: 10,
    overflow: 'hidden', // This ensures the image respects the border radius
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  locationLabel: {
    fontSize: 8,
    color: 'white',
    letterSpacing: 0.4,
    fontFamily: 'PlusJakartaSans_400Regular',
  },
  locationText: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: 'white',
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  time: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'PlusJakartaSans_800ExtraBold,'
  },
  date: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'PlusJakartaSans_600SemiBold,'
  },
});

export default UserHeader;