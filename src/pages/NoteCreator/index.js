import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'

import { saveNote, deleteOneNote, updateNote } from '../../services/watermelondb'

import AddCategorySheet from './AddCategorySheet'
import styles, { colorScheme } from './styles';

const NoteCreator = ({ navigation }) => {
    const dispatch = useDispatch()

    let editMode = useSelector(state => state.createNote.editMode)
    let noteDb = useSelector(state => state.createNote.note)

    let title = useSelector(state => state.createNote.title)
    let body = useSelector(state => state.createNote.body)
    let category = useSelector(state => state.createNote.category)

    const [canUndo, setCanUndo] = useState(false)
    const [lastChanges, setLastChanges] = useState([])

    useEffect(() => {

        return () => {
            dispatch({
                type: 'RESET'
            })
        }
    }, [])
    
    function changeTitle(title, saveInHistory = true) {
        setCanUndo(true)

        if (saveInHistory) {
            let change = {
                type: 'change_title',
                payload: {
                    title
                }
            }

            setLastChanges([...lastChanges.slice(-5), change])
        }

        dispatch({
            type: 'CHANGE_TITLE',
            payload: {
                title
            }
        })
    }

    function changeBody(bodyValue, saveInHistory = true) {
        setCanUndo(true)

        if (saveInHistory) {
            let change = {
                type: 'change_body',
                payload: {
                    body
                }
            }

            setLastChanges([...lastChanges.slice(-5), change])
        }

        dispatch({
            type: 'CHANGE_BODY',
            payload: {
                body: bodyValue
            }
        })
    }

    function undoLastChange() {
        let change = lastChanges[lastChanges.length - 1]

        if (change.type === 'change_body') {
            changeBody(change.payload.body, false)
        }
        else {
            changeTitle(change.payload.text, false)
        }

        setCanUndo(false)
    }

    function save() {
        let note = {
            title,
            body,
            category,
            date: new Date()
        }

        if(!editMode) {
            saveNote(note)
        }
        else {
            updateNote(noteDb.id, note)
            
        }

        navigation.navigate('Página Inicial')
        reset()
    }

    function deleteNote() {

        deleteOneNote(noteDb.id)

        navigation.navigate('Página Inicial')
        reset()
    }

    function reset() {
        dispatch({
            type: 'RESET'
        })

        setCanUndo(false)
        setLastChanges([])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.navigate('Página Inicial')}>
                    <Icon style={styles.controllersButtonIcon} size={28} name="arrowleft" />
                </TouchableOpacity>

                <View style={styles.controllersButtonContainer}>
                    <TouchableOpacity
                        disabled={!canUndo}
                        style={styles.controllersButton(canUndo)}
                        onPress={undoLastChange}
                    >
                        <Icon style={styles.controllersButtonIcon} size={28} name="back" />

                    </TouchableOpacity>

                    {
                        editMode ?
                            <TouchableOpacity
                                style={styles.controllersButton()}
                                onPress={deleteNote}
                            >
                                <Icon style={styles.controllersButtonIcon} size={28} name="delete" />

                            </TouchableOpacity>
                            : null
                    }

                    {
                        !body ?
                            null :
                            <TouchableOpacity
                                style={styles.controllersButton()}
                                onPress={save}
                            >
                                <Icon style={styles.controllersButtonIcon} size={28} name="check" />

                            </TouchableOpacity>
                    }



                </View>

            </View>

            <View style={styles.inputArea}>
                <TextInput
                    placeholder="Título"
                    placeholderTextColor={colorScheme.font.secundary}
                    style={styles.titleInput}
                    onChangeText={changeTitle}
                    value={title}
                />

                <TextInput
                    placeholder="Corpo da nota"
                    placeholderTextColor={colorScheme.font.secundary}
                    style={styles.bodyInput}
                    multiline
                    autoFocus
                    onChangeText={changeBody}
                    value={body}
                />
            </View>

            <AddCategorySheet />
        </View>
    );
}

export default NoteCreator;