import { StyleSheet, Dimensions, Appearance } from 'react-native'

export const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    carousel: {
        marginVertical: height * 0.04
    },

})