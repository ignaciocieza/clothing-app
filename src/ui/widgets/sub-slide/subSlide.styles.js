import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        //marginTop: 10,
        //width
    },
    subtitle: {
        marginBottom: 12,
        textAlign: 'center',
        // fontFamily: "SFProText-Semibold",
        // fontSize: 22,
        // lineHeight: 30,
        // color: "#0C0D34"
    },
    description: {
        marginBottom: 40,
        textAlign: 'center',
        // fontFamily: "SFProText-Regular",
        // fontSize: 15,
        // lineHeight: 24,
        // color: "#0C0D34"
    }
});

export default styles