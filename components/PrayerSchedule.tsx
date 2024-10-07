import { View, Text, Button, SafeAreaView, Platform, StatusBar, Image, StyleSheet, ImageBackground } from 'react-native'
const PrayerSchedule = () => {
    return (
        <View style={styles.container}>
            <Image 
              source={{ uri: 'https://ik.imagekit.io/vtvggda66/mtf2(1).jpg?updatedAt=1728272338211' }} 
              style={styles.image} 
            />
            <View style={styles.textOverlay}>
              <Text style={styles.title}>Jadwal Shalat</Text>
              <Text style={styles.time}>19.40 WIB</Text>
              <Text style={styles.date}>Sunday, 14 March 2024</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
      paddingBottom: 15,
    },
    image: {
      width: '100%',
      height: 140,
      borderRadius: 10,
      objectFit: 'cover', // Changed from 'contain' to 'cover' for better text overlay
    },
    textOverlay: {
      position: 'absolute',
      top: 15,
      left: 15,
      right: 15,
      bottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)', // Semi-transparent overlay
      borderRadius: 10,
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 8,
    },
    time: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 8,
    },
    date: {
      fontSize: 12,
      color: 'white',
    },
  })

export default PrayerSchedule