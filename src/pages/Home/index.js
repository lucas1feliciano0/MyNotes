import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, UIManager, Platform, LayoutAnimation } from 'react-native';
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'

import Button from '../../components/Button'
import CategoryList from '../../components/CategoryList'

import styles from './styles';
import AddNoteButton from './AddNoteButton'
import NotesList from './NotesList'
import CategoriesModal from './CategoriesModal'

const Home = ({ navigation }) => {
    const [isShowingModal, setShowingModal] = useState(false)

    var category = useSelector(state => state.createNote.category)

    return (
        <>
            <View style={styles.container}>
                <CategoriesModal visible={isShowingModal} cbClose={() => setShowingModal(false)} />

                <View style={styles.header}>
                    <Text style={styles.greetings}>
                        My
                    <Text style={[styles.greetings, styles.username]}>Notes</Text>
                    </Text>
                </View>

                <View style={[styles.section, styles.categoriesContainer]}>
                    <View style={styles.categoriesContainerHeader}>
                        <Text style={styles.sectionTitle}>Categorias</Text>
                        <TouchableOpacity
                            onPress={() => setShowingModal(true)}
                        >
                            <Icon style={styles.categoriesContainerIcon} size={28} name="setting" />

                        </TouchableOpacity>
                    </View>
                    <CategoryList
                        style={styles.categoryBtn}
                        textStyle={styles.categoryBtnText}
                    />

                </View>

                <View style={[styles.section, styles.notesContainer]}>
                    <View style={styles.categoriesContainerHeader}>
                        <Text style={styles.sectionTitle}>Notas</Text>
                        <Text style={styles.sectionTitleSecundary}>Segure na nota para apagar</Text>
                    </View>


                    <NotesList filter={category} navigation={navigation} />

                </View>
            </View>
            <AddNoteButton navigation={navigation} />
        </>
    );
}

export default Home;