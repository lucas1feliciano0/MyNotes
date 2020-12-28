import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './styles';

import Button from '../../../components/Button'

const AddNoteButton = ({ navigation }) => {

    return (
        <Button onPress={() => navigation.navigate('Criador de Notas')} style={styles.container}>
            <Icon name="plus" style={styles.icon}/>
        </Button>
    );
}

export default AddNoteButton;