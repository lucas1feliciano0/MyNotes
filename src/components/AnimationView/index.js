import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native'

import styles from './styles';

const AnimationView = ({ title }) => {

    return (

        <View style={styles.container}>
            <LottieView 
                autoSize
                source={require(`../../assets/animations/empty.json`)} 
                autoPlay 
                loop
            />

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default AnimationView;