import React, { useState } from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'

import RegisterCategoryModal from './RegisterCategoryModal'

import * as Animatable from 'react-native-animatable'

import CategoryList from './CategoryList'

import styles, { height } from './styles';

const AddCategorySheet = () => {
    const dispatch = useDispatch()

    const [isOpen, setOpen] = useState(false)
    const [isShowingModal, setShowingModal] = useState(false)

    let editMode = useSelector(state => state.createNote.editMode)
    var category = useSelector(state => state.createNote.category)

    function move() {
        setOpen(!isOpen)
    }

    return (
        <Animatable.View style={styles.container}>
            <RegisterCategoryModal visible={isShowingModal} cbClose={() => setShowingModal(false)} />
            <TouchableOpacity style={styles.header} onPress={move}>
                {
                    !isOpen ?
                        <Icon name="plus" size={18} style={styles.headerIcon} />
                        :
                        <Icon name="close" size={18} style={styles.headerIcon} />
                }
                {
                    editMode ?
                        <Text style={styles.title}>Alterar categoria</Text>
                        :
                        <Text style={styles.title}>Cadastrar categoria</Text>
                }
            </TouchableOpacity>

            {
                isOpen ?
                    <View style={styles.body}>
                        <CategoryList
                            style={styles.categoryOption}
                            textStyle={styles.categoryOptionText}
                            fixedTitle="Nenhuma"
                        />

                        <TouchableOpacity onPress={() => setShowingModal(true)}>

                            <Text style={styles.textBtn}>Cadastrar categoria</Text>

                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
        </Animatable.View>
    );
}

export default AddCategorySheet;