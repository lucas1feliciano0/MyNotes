import React, { useEffect } from 'react';
import { View, Text, Alert, Vibration, LayoutAnimation } from 'react-native';
import { useDispatch } from 'react-redux';
import withObservables from "@nozbe/with-observables";
import Icon from 'react-native-vector-icons/AntDesign'

import database, { getOneNote, deleteOneNote } from '../../../services/watermelondb'

import styles, { colorScheme } from './styles';

import Button from '../../../components/Button'


const NoteButton = ({ note, id, navigation }) => {
    const dispatch = useDispatch()

    let stringDate = new Date(note['_raw'].created_at)
    let isPinned = note['_raw'].is_pinned

    async function seeNote() {
        let note = await getOneNote(id)

        dispatch({
            type: 'INIT_NOTE',
            payload: {
                note
            }
        })

        navigation.navigate('Criador de Notas')
    }

    function deleteNote() {
        Vibration.vibrate()

        Alert.alert(
            "Deseja apagar a nota?",
            "Ao clicar em confirmar, a nota será excluída definitivamente.",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Confirmar", onPress: () => deleteOneNote(id, () => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); 
                    }) 
                }
            ],
            { cancelable: true }
        );
        
        
    }

    return (
        <Button onPress={seeNote} onLongPress={deleteNote} style={styles.container}>

            <View style={styles.header}>
                {
                    note.title !== '' ?
                        <Text numberOfLines={1} style={styles.title}>
                            {note.title}
                        </Text> :
                        <Text numberOfLines={1} style={styles.title}>
                            Sem título
                    </Text>
                }
            </View>

            <View style={styles.body}>
                <Text numberOfLines={2} style={styles.bodyText}>
                    {note.body}
                </Text>

            </View>

            <View style={styles.footer}>
                {
                    isPinned ?
                        <Icon name="pushpino" style={styles.pinnedIcon} color={colorScheme.highlight} size={18} />
                        : null
                }

                <Text style={styles.date}>
                    {stringDate.getDate()} / {stringDate.getMonth() + 1} / {stringDate.getFullYear()}
                </Text>

            </View>


        </Button>
    );
}

const enhance = withObservables(['note'], ({ note, title, body }) => ({
    note,
    
}))

export default enhance(NoteButton);