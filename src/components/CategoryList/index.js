import React from 'react';
import { ScrollView, TouchableOpacity, Text, UIManager, Platform, LayoutAnimation } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import withObservables from "@nozbe/with-observables";

import database from '../../services/watermelondb'

import styles from './styles';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CategoryList = ({ categoriesList, style, textStyle, fixedTitle = 'Todas', horizontal = true, onPress ,children }) => {
    const dispatch = useDispatch()
    
    var category = useSelector(state => state.createNote.category)

    function changeCategory(categoryValue) {
        if (categoryValue === fixedTitle) {
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

    function onClick(id, title) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        changeCategory(title)
        
        if(onPress) onPress(id)
        
    }

    return (

        <ScrollView contentContainerStyle={styles.carousel} horizontal={horizontal} showsHorizontalScrollIndicator={false}>
            {
                horizontal ?
                    <TouchableOpacity onPress={() => onClick('', '')} style={style(category === '')}>
                        <Text style={textStyle(category === '')}>{fixedTitle}</Text>
                    </TouchableOpacity>
                    : null
            }

            {
                categoriesList.map((categoryItem, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => onClick(categoryItem.id, categoryItem.title)}
                            style={style(category === categoryItem.title)}
                            key={index}
                        >
                            <Text numberOfLines={1} style={textStyle(category === categoryItem.title)}>
                                {categoryItem.title}
                            </Text>

                            {
                                children
                            }
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