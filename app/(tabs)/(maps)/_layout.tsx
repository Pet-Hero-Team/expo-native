import { Stack } from 'expo-router/stack';
import { SafeAreaView } from 'react-native';

export default function MapsLayout() {
    return (
        <SafeAreaView className="flex-1">
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
            </Stack>
        </SafeAreaView>
    );
}