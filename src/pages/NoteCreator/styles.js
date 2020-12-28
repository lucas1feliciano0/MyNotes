import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colorScheme.background,
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.01
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    controllersButtonContainer: {
        flexDirection: 'row',
    },
    controllersButton: canUndo => {
        if (canUndo !== undefined) {
            return {
                marginHorizontal: width * 0.015,
                alignItems: 'center',
                opacity: !canUndo ? .2 : 1
            }
        }
        else {
            return {
                marginHorizontal: width * 0.015,
                alignItems: 'center',
                opacity: 1
            }
        }
        
    },
    controllersButtonText: {
        color: colorScheme.font.primary
    },
    controllersButtonIcon: {
        color: colorScheme.font.primary
    },
    titleInput: {
        fontSize: height * 0.025,
        fontFamily: 'Poppins-Medium',
        height: height * 0.11,
        color: colorScheme.font.primary
    },
    bodyInput: {
        color: colorScheme.font.primary
    }
})