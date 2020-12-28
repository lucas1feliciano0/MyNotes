import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'

import Button from '../../components/Button'
import CategoryList from '../NoteCreator/AddCategorySheet/CategoryList'

import styles from './styles';
import AddNoteButton from './AddNoteButton'
import NotesList from './NotesList'

const Home = ({ navigation }) => {

    var category = useSelector(state => state.createNote.category)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.greetings}>
                        My
                    <Text style={[styles.greetings, styles.username]}>Notes</Text>
                    </Text>
                </View>

                <View style={[styles.section, styles.categoriesContainer]}>
                    <Text style={styles.sectionTitle}>Categorias</Text>

                    <CategoryList 
                        style={styles.categoryBtn} 
                        textStyle={styles.categoryBtnText}
                    />

                </View>

                <View style={[styles.section, styles.notesContainer]}>
                    <Text style={styles.sectionTitle}>Notas</Text>
                    
                    <NotesList filter={category} navigation={navigation}/>
                    
                </View>


            </View>
            <AddNoteButton navigation={navigation} />
        </>
    );
}

export default Home;