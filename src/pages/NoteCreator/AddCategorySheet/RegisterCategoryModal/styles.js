import { StyleSheet, Dimensions, Appearance } from 'react-native'

export const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../../../theme/colors'

export const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0005',
        justifyContent: "center",
        alignItems: "center",
    },
    inputArea: {
        backgroundColor: colorScheme.font.primary,
        paddingVertical: height * 0.04,
        paddingHorizontal: width * 0.08,
        width: width * 0.7,
        borderRadius: 20,
        borderTopLeftRadius: 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: height * 0.015
    },
    label: {
        fontSize: height * 0.025,
        fontFamily: 'Poppins-Regular',
        color: colorScheme.background,
        marginBottom: height * 0.01
    },
    inputText: {
        backgroundColor: colorScheme.equalShade,
        paddingLeft: width * .05,
        borderRadius: 10
    },
    btn: {
        backgroundColor: colorScheme.background,
        marginVertical: height * 0.025,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: height * 0.015
    },
    btnText: {
        color: colorScheme.font.primary,
    },
    btnIcon: {
        color: colorScheme.font.primary,
        marginRight: width * 0.02
    }


})