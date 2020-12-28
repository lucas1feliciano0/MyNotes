import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import withObservables from "@nozbe/with-observables";


import { getOneNote } from '../../../services/watermelondb'

import styles from './styles';

import Button from '../../../components/Button'

const NoteButton = ({ title, body, date, id, navigation }) => {
    const dispatch = useDispatch()
    let stringDate = new Date(date['_raw'].created_at)

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

    return (
        <Button onPress={seeNote} style={styles.container}>

            {
                title !== '' ?
                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text> :
                    <Text numberOfLines={1} style={styles.title}>
                        Sem título
                    </Text>
            }

            <View style={styles.body}>
                <Text numberOfLines={2} style={styles.bodyText}>
                    {body}
                </Text>

            </View>

            <Text style={styles.date}>
                {stringDate.getDate()} / {stringDate.getMonth() + 1} / {stringDate.getFullYear()}
            </Text>


        </Button>
    );
}

export default NoteButton;