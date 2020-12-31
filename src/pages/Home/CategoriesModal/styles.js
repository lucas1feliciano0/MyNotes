import { StyleSheet, Dimensions, Appearance } from 'react-native'

export const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme.background,
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.01

    },
    headerIcon: {
        color: colorScheme.font.primary,
    },
    section: {
        marginVertical: height * 0.03
    },
    sectionTitle: {
        color: colorScheme.font.secundary,
        fontSize: height * 0.025,
        fontFamily: 'Poppins-Regular',
        marginBottom: height * 0.01
    },
    categoryItem: active => {
        return {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colorScheme.secundary,
            paddingVertical: height * 0.025,
            paddingHorizontal: width * 0.05,
            borderRadius: 10,
            elevation: 5,
            marginBottom: height * 0.02
        }
    },
    categoryTitle: active => {
        return {
            fontSize: height * 0.024,
            color: colorScheme.font.primary,
            fontFamily: 'Quicksand-Regular'
        }
    }

})