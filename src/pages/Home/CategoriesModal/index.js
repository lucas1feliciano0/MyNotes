import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Modal, Vibration, LayoutAnimation, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import withObservables from "@nozbe/with-observables";

import * as Animatable from 'react-native-animatable'

import { deleteOneCategory } from '../../../services/watermelondb'

import CategoryList from '../../../components/CategoryList'

import styles, { colorScheme } from './styles';

const CategoriesModal = ({ visible, cbClose, categories }) => {

    function onPress(id) {
        Vibration.vibrate()
        
        Alert.alert(
            "Deseja apagar a categoria?",
            "Ao clicar em confirmar, a categoria será excluída definitivamente.",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Confirmar", onPress: () => deleteOneCategory(id, () => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); 
                }) }
            ],
            { cancelable: true }
        );
    }

    return (
        <Modal
            animationType="fade"
            visible={visible}
            onRequestClose={cbClose}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={cbClose}>
                    <Icon style={styles.headerIcon} size={28} name="arrowleft" />
                </TouchableOpacity>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categorias</Text>

                    <CategoryList
                        style={styles.categoryItem}
                        textStyle={styles.categoryTitle}
                        horizontal={false}
                        onPress={onPress}
                    >
                        <Icon style={styles.headerIcon} size={24} name="close" />
                    </CategoryList>
                </View>
            </View>

        </Modal>
    );
}

const enhance = withObservables([], () => ({
    categories: database.collections.get('Categories').query().observe() // shortcut syntax for `comment: comment.observe()`
}))

export default enhance(CategoriesModal);