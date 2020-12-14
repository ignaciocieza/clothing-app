import { StyleSheet } from 'react-native';
import { SLIDE_HEIGHT } from '../../../widgets/slide/Slide';
import theme from '../../../widgets/theme';
//export const BORDER_RADIUS = 75;
//const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        //height: (0.61 * height),
        height: SLIDE_HEIGHT,
        //backgroundColor:"cyan",
        borderBottomRightRadius: theme.borderRadii.xl,
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end'
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        //top: SLIDE_HEIGHT - 
        //borderBottomRightRadius: 75
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        //width,
        height: theme.borderRadii.xl / 2,
        //backgroundColor: 'rgba(100,200,300,0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        //zIndex:2
    },
    footerSubOne: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'cyan'
    },
    footerContent: {
        flex: 1,
        //flexDirection: 'row',
        backgroundColor: "white",
        borderTopLeftRadius: theme.borderRadii.xl
    }
});

export default styles;