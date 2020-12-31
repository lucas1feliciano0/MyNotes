import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        paddingVertical: height * 0.03,
        alignItems: 'center'
    },
    title: {
        color: colorScheme.font.primary,
        fontFamily: 'Quicksand-Bold',
        marginTop: height * 0.025
    }
})