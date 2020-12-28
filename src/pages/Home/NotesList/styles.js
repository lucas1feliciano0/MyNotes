import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../theme/colors'

const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    carouselNotes: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})