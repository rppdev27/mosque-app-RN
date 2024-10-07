import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Home, Calendar, Image, Watch, Book, User } from 'lucide-react-native'; // import icons from lucide

const MenuList = () => {
    const menus = [
        // { key: '1', id: '1', name: 'Home', icon: <Home color="#000" size={24} /> },
        // { key: '2', id: '2', name: 'Events', icon: <Calendar color="#000" size={24} /> },
        { key: '3', id: '3', name: 'Wallpaper', icon: <Image color="#000" size={24} /> },
        { key: '4', id: '4', name: 'Tasbih', icon: <Watch color="#000" size={24} /> },
        { key: '5', id: '5', name: 'Quran', icon: <Book color="#000" size={24} /> },
        { key: '6', id: '6', name: 'Profile', icon: <User color="#000" size={24} /> },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Useful App</Text>
            <FlatList
            data={menus}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <TouchableOpacity key={item.id} style={styles.menuItem}>
                           {item.icon}
                             <Text style={styles.menuText}>{item.name}</Text>
                </TouchableOpacity>
            </View>
            )}
            keyExtractor={item => item.key}
            numColumns={2} // Specify number of columns
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20,
        fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    menuItem: {
        flex: 0,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        margin: 0,
        borderRadius: 8,
    },
    menuText: {
        marginTop: 10,
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
    },
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
        borderRadius: 10
      },
});

export default MenuList;