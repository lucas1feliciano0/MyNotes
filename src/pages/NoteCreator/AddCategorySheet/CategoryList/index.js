import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import withObservables from "@nozbe/with-observables";

import database from '../../../../services/watermelondb'

import CategoryButton from '../../../../components/CategoryButton'

import styles from './styles';

const CategoryList = ({ categoriesList, style, textStyle, fixedTitle='Todas' }) => {
    const dispatch = useDispatch()

    var category = useSelector(state => state.createNote.category)

    function changeCategory(categoryValue) {
        if(categoryValue === fixedTitle) {
            dispatch({
                type: 'CHANGE_CATEGORY',
                payload: {
                    category: ''
                }
            })
        }
        else {
            dispatch({
                type: 'CHANGE_CATEGORY',
                payload: {
                    category: categoryValue
                }
            })
        }
    }

    return (

        <ScrollView contentContainerStyle={styles.carousel} horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => changeCategory('')} style={style(category === '')}>
                <Text style={textStyle(category === '')}>{fixedTitle}</Text>
            </TouchableOpacity>

            {
                categoriesList.map((categoryItem, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => changeCategory(categoryItem.title)}
                            style={style(category === categoryItem.title)}
                            key={index}
                        >
                            <Text style={textStyle(category === categoryItem.title)}>
                                {categoryItem.title}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
}
const enhance = withObservables([], () => ({
    categoriesList: database.collections.get('Categories').query().observe() // shortcut syntax for `comment: comment.observe()`
}))

export default enhance(CategoryList);