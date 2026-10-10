import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AdminLayout() {
    const insets = useSafeAreaInsets();
    const bottomPad = Math.max(insets.bottom, Platform.OS === 'android' ? 12 : 0);

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#6366f1',
            tabBarInactiveTintColor: '#94a3b8',
            tabBarStyle: [styles.tabBar, { paddingBottom: bottomPad, height: 60 + bottomPad }],
            tabBarLabelStyle: styles.tabLabel,
            tabBarItemStyle: styles.tabItem,
            tabBarIconStyle: styles.tabIconWrapper,
            headerShown: false,
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="dashboard" size={20} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="users"
                options={{
                    title: 'Users',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="users" size={19} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="providers"
                options={{
                    title: 'Providers',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="shield" size={20} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="warning" size={19} color={color} />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
        elevation: 12,
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
    },
    tabItem: {
        paddingTop: 6,
    },
    tabIconWrapper: {
        width: 52,
        height: 30,
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: '700',
        marginTop: 2,
    },
    iconWrap: {
        width: 48,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIconWrap: {
        backgroundColor: '#eef2ff',
    },
});
