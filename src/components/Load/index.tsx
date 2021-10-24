import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../images/animations/wind-and-rain.json'
import styles from './styles';


export function Load() {
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <LottieView
                    source={loadingAnimation}
                    autoPlay
                    loop
                    style={styles.animation}
                />
                <Text style={styles.loadText}>Carregando...</Text>
            </View>
            
        </View>
    )
};