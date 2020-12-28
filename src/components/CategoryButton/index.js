import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

import Button from '../Button'

const CategoryButton = ({ style, onPress, children, active=false }) => {
    return (
        <Button 
            onPress={onPress} 
            style={[ styles.container(active)]}
            
        >
            {children}
        </Button>
    );
}

export default CategoryButton;