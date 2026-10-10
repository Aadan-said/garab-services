import { View, ActivityIndicator, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Redirect } from 'expo-router';
import { useAuthStore } from '../src/store/auth.store';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Index() {
    const { isAuthenticated, isLoading, user } = useAuthStore();

    if (isLoading) {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#0f172a', '#1e1b4b', '#0f172a']}
                    style={StyleSheet.absoluteFill}
                />
                <Animatable.View
                    animation="fadeIn"
                    duration={800}
                    style={styles.content}
                >
                    <Animatable.View
                        animation="pulse"
                        iterationCount="infinite"
                        duration={2500}
                        style={styles.logoContainer}
                    >
                        <Image
                            source={require('../assets/splash-icon.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </Animatable.View>

                    <Animatable.Text animation="fadeInUp" delay={200} style={styles.appTitle}>
                        FARSAMO YAQAN
                    </Animatable.Text>
                    <Animatable.Text animation="fadeInUp" delay={400} style={styles.tagline}>
                        GARAB SERVICES
                    </Animatable.Text>

                    <ActivityIndicator size="small" color="#6366f1" style={{ marginTop: 24 }} />
                </Animatable.View>
            </View>
        );
    }

    if (!isAuthenticated) {
        return <Redirect href="/(auth)/login" />;
    }

    if (user?.role === 'PROVIDER') {
        return <Redirect href="/(provider)/home" />;
    }

    if (user?.role === 'ADMIN') {
        return <Redirect href="/(admin)/home" />;
    }

    return <Redirect href="/(client)/home" />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    logoContainer: {
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        width: 130,
        height: 130,
    },
    appTitle: {
        fontSize: 28,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 3,
        textAlign: 'center',
        marginTop: 6,
    },
    tagline: {
        color: '#818cf8',
        fontSize: 12,
        fontWeight: '700',
        marginTop: 6,
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
});
