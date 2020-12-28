import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../theme/colors'

const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        width: width * .14,
        height: width * .14,
        borderRadius:  width * .7,
        backgroundColor: colorScheme.font.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: height * 0.04,
        right: width * 0.04,
        elevation: 5
    },
    icon: {
        color: colorScheme.background,
        fontSize: 25,
    }
})