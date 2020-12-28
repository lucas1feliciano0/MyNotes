import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../theme/colors'

const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        width: '47%',
        backgroundColor: colorScheme.terciary,
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.035,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: height * 0.02,

    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: height * 0.025,
        color: colorScheme.font.primary,
    },
    body: {
        marginVertical: height * 0.02
    },
    bodyText: {
        fontFamily: 'Montserrat-Regular',
        color: colorScheme.font.terciary
    },
    date: {
        color: colorScheme.font.terciary,
        fontFamily: 'Montserrat-Thin',
    }
})