import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: active => {
        return {
            width: width * 0.35,
            backgroundColor: active ? colorScheme.font.primary : colorScheme.secundary,
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.005,
            borderRadius: 50,
            marginHorizontal: width * 0.02
        }

    },
    title: active => {
        return {
            textAlign: 'center',
            fontFamily: 'Quicksand-Medium',
            color: active ? colorScheme.background : colorScheme.font.secundary
        }
    }
})