import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable'



const Button = ({ children, onPress, onLongPress, style, color }) => {
    const [pressed, setPressed] = useState(false)

    function onOverlayShow() {
        setPressed(true)
    }

    function onOverlayHide() {
        setPressed(false)
    }

    function onLongClick() {
        console.log('segurando')

        if (onLongPress) onLongPress()
    }

    return (

        <TouchableHighlight
            onPress={onPress}
            onLongPress={onLongClick}
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
            <Animatable.View animation="bounce" useNativeDriver>
                {children}
            </Animatable.View>
        </TouchableHighlight>
    );
}

export default Button;