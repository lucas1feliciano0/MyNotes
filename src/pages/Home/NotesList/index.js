import React, { useEffect } from 'react';
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
                    .sort(function (a, b) { return b['_raw'].created_at - a['_raw'].created_at })
                    .sort(function (a, b) { return b['_raw'].is_pinned - a['_raw'].is_pinned })
                    .map((note, index) => {
                        if (filter === '') {
                            return (
                                <NoteButton
                                    note={note}
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
                                        note={note}
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