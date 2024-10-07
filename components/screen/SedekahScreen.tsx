import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';

const SedekahScreen = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  const charityPublications = [
    { id: '1', title: 'Ramadan Food Drive', description: 'Help provide iftar meals for the needy during Ramadan.', image: 'https://images.unsplash.com/photo-1575101261474-5cb5653bb416?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // { id: '2', title: 'Mosque Renovation Fund', description: 'Support the renovation of our community mosque.', image: 'https://example.com/mosque-renovation.jpg' },
    // { id: '3', title: 'Islamic Education Scholarship', description: 'Contribute to scholarships for underprivileged students.', image: 'https://example.com/education-scholarship.jpg' },
  ];

  const bankAccounts = [
    { bank: 'Islamic Bank', accountName: 'Masjid Taman Firdaus', accountNumber: '1234-5678-9012-3456' },
    { bank: 'Community Trust Bank', accountName: 'Masjid Al-Nur Charity', accountNumber: '9876-5432-1098-7654' },
  ];

  const renderCharityCard = (item) => (
    <View key={item.id} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderBankAccount = (account, index) => (
    <View key={index} style={styles.bankAccountCard}>
      <Text style={styles.bankName}>{account.bank}</Text>
      <Text style={styles.accountName}>{account.accountName}</Text>
      <Text style={styles.accountNumber}>{account.accountNumber}</Text>
    </View>
  );

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.header}>Masjid Taman Firdaus</Text> */}
      
      <Text style={styles.sectionTitle}>Current Charity Drives</Text>
      {charityPublications.map(renderCharityCard)}
      
      <Text style={styles.sectionTitle}>Bank Account Information</Text>
      {bankAccounts.map(renderBankAccount)}
      
      <Text style={styles.footer}>
        For more information, please contact the mosque office at +1234567890
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 30,
    paddingTop: 0,
  },
  header: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans_700Bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans_600SemiBold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans_600SemiBold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans_400Regular',
    color: '#666',
    marginBottom: 16,
  },
  donateButton: {
    backgroundColor: '#28adef',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
  },
  bankAccountCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 1,
  },
  bankName: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans_600SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  accountName: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans_400Regular',
    color: '#666',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans_400Regular',
    color: '#333',
  },
  footer: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans_400Regular',
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default SedekahScreen;