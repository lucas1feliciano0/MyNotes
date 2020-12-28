import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable'



const Button = ({ children, onPress, style, color }) => {
    const [pressed, setPressed] = useState(false)

    function onOverlayShow() {
        setPressed(true)
    }

    function onOverlayHide() {
        setPressed(false)
    }

    return (

        <TouchableHighlight
            onPress={onPress}
            onHideUnderlay={onOverlayHide}
            onShowUnderlay={onOverlayShow}
            underlayColor={'none'}
            style={[style, { overflow: 'hidden' }, pressed ? {
                transform: [
                    {
                        scale: .9
                    }
                ]
            } : {
                    transform: [
                        {
                            scale: 1
                        }
                    ]
                }]}
        >
            <Animatable.View animation="fadeInUp" useNativeDriver>
                {children}
            </Animatable.View>
        </TouchableHighlight>
    );
}

export default Button;