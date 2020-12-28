import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'

import * as Animatable from 'react-native-animatable'

import { saveCategory } from '../../../../services/watermelondb'

import styles, { colorScheme } from './styles';

const RegisterCategoryModal = ({ visible, cbClose }) => {

    const [title, setTitle] = useState(null)

    function close() {
        

        reset()
        cbClose()
    }

    function save() {
        let category = {
            title
        }

        saveCategory(category)

        reset()
        cbClose()
    }

    function reset() {
        setTitle(null)
    }


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            style={styles.modal}
            onRequestClose={close}
        >
            <View style={styles.container}>
                <Animatable.View style={styles.inputArea}>
                    <TouchableOpacity onPress={close} style={styles.header}>
                        <Icon name="close" size={24} color={colorScheme.background}/>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            value={title}
                            onChangeText={val => setTitle(val)}
                            style={styles.inputText}
                            placeholder="Digite o nome da categoria"
                        />

                        <TouchableOpacity onPress={save} style={styles.btn}>
                            <Icon style={styles.btnIcon} name="check" size={24} />
                            <Text style={styles.btnText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>

            </View>

        </Modal>
    );
}

export default RegisterCategoryModal;