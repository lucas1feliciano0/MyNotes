import React from 'react';
import { TouchableHighlight, StyleSheet, Animated } from 'react-native';

import * as Animatable from 'react-native-animatable'

const TouchableAnimated = Animated.createAnimatedComponent(TouchableHighlight)

const Button = ({ children, onPress, onLongPress, style, color }) => {
    var scaleValue = new Animated.Value(1)

    function onOverlayShow() {
        Animated.spring(scaleValue, {
            toValue: .9,
            speed: 500,
            useNativeDriver: true
        }).start()
    }

    function onOverlayHide() {
        Animated.spring(scaleValue, {
            toValue: 1,
            speed: 500,
            useNativeDriver: true
        }).start()
    }

    function onLongClick() {
        if (onLongPress) onLongPress()
    }

    return (

        <TouchableAnimated
            onPress={onPress}
            onLongPress={onLongClick}
            onHideUnderlay={onOverlayHide}
            onShowUnderlay={onOverlayShow}
            underlayColor={'none'}
            style={[style, { overflow: 'hidden' }, { transform: [ { scale: scaleValue } ] }]}
        >
            <Animatable.View animation="bounce" useNativeDriver>
                {children}
            </Animatable.View>
        </TouchableAnimated>
    );
}

export default Button;