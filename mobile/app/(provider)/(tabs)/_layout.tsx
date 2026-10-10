import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProviderLayout() {
    const insets = useSafeAreaInsets();
    const bottomPad = Math.max(insets.bottom, Platform.OS === 'android' ? 12 : 0);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: [styles.tabBar, { paddingBottom: bottomPad, height: 60 + bottomPad }],
                tabBarActiveTintColor: '#6366f1',
                tabBarInactiveTintColor: '#94a3b8',
                tabBarShowLabel: true,
                tabBarLabelStyle: styles.tabLabel,
                tabBarHideOnKeyboard: true,
                tabBarItemStyle: styles.tabItem,
                tabBarIconStyle: styles.tabIconWrapper,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Hoyga',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="home" size={20} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="jobs"
                options={{
                    title: 'Shaqooyinka',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="briefcase" size={19} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: 'Lacagta',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="bar-chart" size={19} color={color} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profaylka',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.iconWrap, focused && styles.activeIconWrap]}>
                            <FontAwesome name="user" size={20} color={color} />
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
