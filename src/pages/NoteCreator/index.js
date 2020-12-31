import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, LayoutAnimation, Keyboard, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeater from 'react-native-vector-icons/Feather'

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
    let isPinned = useSelector(state => state.createNote.isPinned)

    const [isKeyboardDown, setKeyboardDown] = useState(false)
    const [canUndo, setCanUndo] = useState(false)
    const [lastChanges, setLastChanges] = useState([])

    var animatedOpacity = useRef(new Animated.Value(1)).current

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", hideFooter);
        Keyboard.addListener("keyboardDidHide", showFooter);

        return () => {
            Keyboard.removeListener("keyboardDidShow", hideFooter);
            Keyboard.removeListener("keyboardDidHide", showFooter);

            dispatch({
                type: 'RESET'
            })
        }
    }, [])

    function showFooter() {
        setKeyboardDown(true)

        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }
    function hideFooter() {
        setKeyboardDown(false)

        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

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

    function changePinned() {
        dispatch({
            type: 'CHANGE_IS_PINNED',
            payload: {
                isPinned: !isPinned
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
            isPinned,
            date: new Date()
        }

        if (!editMode) {
            saveNote(note, () => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); 
            })
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
        <>
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
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.textInputScroll}>

                        <TextInput
                            placeholder="Corpo da nota"
                            placeholderTextColor={colorScheme.font.secundary}
                            style={styles.bodyInput}
                            multiline
                            autoFocus
                            onChangeText={changeBody}
                            value={body}
                        />
                    </ScrollView>
                </View>

            </View>

            <Animated.View 
                style={[styles.footer, { opacity: animatedOpacity }]} 
                pointerEvents={isKeyboardDown ? 'auto' : 'none'}
            >
                <View style={styles.footerHeader}>

                    <TouchableOpacity
                        style={styles.controllersButton()}
                        onPress={changePinned}
                    >
                        <Icon style={styles.footerIcon(isPinned)} size={28} name="pushpino" />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.controllersButton()}
                        onPress={reset}
                    >
                        <IconFeater style={styles.controllersButtonIcon} size={28} name="delete" />

                    </TouchableOpacity>
                </View>
                <AddCategorySheet />
            </Animated.View>

        </>
    );
}

export default NoteCreator;