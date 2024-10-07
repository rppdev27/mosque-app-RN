import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { HomeIcon, SettingsIcon, HeartHandshakeIcon } from 'lucide-react-native';
import HomeScreen from './components/screen/HomeScreen';
import SedekahScreen from './components/screen/SedekahScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Beranda"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            backgroundColor: 'white',
          },
          tabBarIcon: ({ color, size }) => {
            let IconComponent;
            if (route.name === 'Beranda') {
              IconComponent = HomeIcon;
            } else if (route.name === 'Signup') {
              IconComponent = SettingsIcon;
            } else if (route.name === 'Sedekah') {
              IconComponent = HeartHandshakeIcon;
            }
            return IconComponent ? (
              <View style={{ padding: 5 }}>
                <IconComponent color={color} size={size} />
              </View>
            ) : null;
          },
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 9, textAlign: 'center' }}>
              {route.name}
            </Text>
          ),
          tabBarActiveTintColor: '#00adef',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen 
          name="Beranda" 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Tab.Screen name="Sedekah" component={SedekahScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}