import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#3f3f3f',
                tabBarInactiveTintColor: '#c8c8c8',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    elevation: 0,
                    height: 75,
                    paddingTop: 10,
                    zIndex: 1000,
                    backgroundColor: '#ffffff',
                },
                tabBarIconStyle: {
                    marginBottom: 0,
                },
            }}
        >
            <Tabs.Screen
                name="(maps)"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <>
                            <MaterialIcons name="map" size={size} color={color} />
                            <Text className="text-xs text-gray-600 mt-1">지도</Text>
                        </>
                    ),
                }}
            />
        </Tabs>
    );
}