import React from 'react';
import { ScrollView } from 'react-native';
import withObservables from "@nozbe/with-observables";

import database from '../../../services/watermelondb'

import NoteButton from '../NoteButton'

import styles from './styles';

const NotesList = ({ notes, filter, navigation }) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={100}
            contentContainerStyle={styles.carouselNotes}
        >

            {
                notes
                    .reverse()
                    .map((note, index) => {
                        if(filter === '') {
                            return (
                                <NoteButton
                                    title={note.title}
                                    body={note.body}
                                    date={note}
                                    id={note.id}
                                    key={index}
                                    navigation={navigation}
                                />
                            )
                        }
                        else {
                            if (note.category === filter) {
                                return (
                                    <NoteButton
                                        title={note.title}
                                        body={note.body}
                                        date={note}
                                        id={note.id}
                                        key={index}
                                        navigation={navigation}
                                    />
                                )
                            }
                        }
                    })
            }

        </ScrollView>
    );
}

const enhance = withObservables([], () => ({
    notes: database.collections.get('Notes').query().observe() // shortcut syntax for `comment: comment.observe()`
}))

export default enhance(NotesList);