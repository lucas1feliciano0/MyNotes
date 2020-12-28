import { StyleSheet, Dimensions, Appearance } from 'react-native'

export const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        backgroundColor: colorScheme.font.primary,
        paddingVertical: height * 0.035,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,

    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        marginRight: width * 0.01,
        color: colorScheme.background
    },
    title: {
        color: colorScheme.background,
        fontFamily: 'Quicksand-Bold',
        fontSize: height * 0.02
    },
    textBtn: {
        fontFamily: 'Quicksand-Regular',
        textAlign: 'center',
        color: colorScheme.background
    },
    categoryOption: active => {
        return {
            backgroundColor: active ? colorScheme.background : colorScheme.font.terciary,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: height * 0.005,
            paddingHorizontal: width * 0.05,
            borderRadius: 1000,
            marginHorizontal: width * .02
        }
    },
    categoryOptionText: active => {
        return {
            color: active ? colorScheme.font.primary : colorScheme.terciary,
            fontFamily: 'Quicksand-Medium'
        }
    }
})