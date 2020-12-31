import { StyleSheet, Dimensions, Appearance } from 'react-native'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

import colors from '../../theme/colors'

const colorScheme = colors[Appearance.getColorScheme()]

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colorScheme.background,
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.01
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.02,
        paddingVertical: height * 0.02
    },
    greetings: {
        fontSize: height * 0.035,
        color: colorScheme.font.primary,
        fontFamily: 'Quicksand-Regular'
    },
    username: {
        fontFamily: 'Quicksand-Bold'
    },
    userIconButton: {
        width: '15%',
    },
    userIcon: {
        width: '100%',
        height: undefined,
        resizeMode: 'cover',
        aspectRatio: 1,
        borderRadius: 50
    },
    section: {
        marginBottom: height * 0.035
    },
    sectionTitle: {
        color: colorScheme.font.secundary,
        fontSize: height * 0.02,
        fontFamily: 'Poppins-Regular',
        marginBottom: height * 0.01
    },
    sectionTitleSecundary: {
        color: colorScheme.font.secundary,
        fontSize: height * 0.015,
        fontFamily: 'Poppins-Regular',
        marginBottom: height * 0.01,
        opacity: .5
    },
    carousel: {
        marginVertical: height * 0.02
    },
    notesContainer: {
        flex: 1
    },
    categoriesContainerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    categoriesContainerIcon: {
        color: colorScheme.font.secundary,
    },
    carouselNotes: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    categoryBtn: active => {
        return {
            width: width * 0.35,
            backgroundColor: active ? colorScheme.font.primary : colorScheme.secundary,
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.015,
            borderRadius: 50,
            marginHorizontal: width * 0.02
        }

    },
    categoryBtnText: active => {
        return {
            textAlign: 'center',
            fontFamily: 'Quicksand-Medium',
            color: active ? colorScheme.background : colorScheme.font.secundary
        }
    }
})