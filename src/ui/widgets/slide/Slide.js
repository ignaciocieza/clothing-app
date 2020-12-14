import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
// import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';
import { Text } from '../theme';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
    container: {
        width,
        overflow: 'hidden'
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
    titleContainer: {
        height: 100,
        width: width * 0.9,
        justifyContent: "center",
    },
    // title: {
    //     fontSize: 60,
    //     lineHeight: 80,
    //     fontFamily: "SFProText-Bold",
    //     color: "white",
    //     textAlign: 'center'
    // },

});

export default function Slide({ title, right , picture, x , index}) {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : - width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" }
    ];
    // const opacity = interpolate(x, {
    //     inputRange: [(index - 1) * width, (index * width), (index + 1) * width],
    //     outputRange: [0, 1, 0],
    //     extrapolate: Extrapolate.CLAMP
    // })

    return (
        <View style={styles.container}>
            {/* <Animated.View style={[styles.underlay, {opacity}]}>
                <Image source={picture.src} style={styles.picture} />
            </Animated.View> */}
            <View style={[styles.titleContainer, { transform }]}>
                {/* <Text style={[styles.title, (!right && { marginBottom: 20 })]}></Text> */}
                <Text variant="hero" style={!right && { marginBottom: 20 }}>{title}</Text>
            </View>
        </View>
    );
}

Slide.prototype = {
    label: PropTypes.string.isRequired,
    right: PropTypes.bool,
    picture: PropTypes.number.isRequired,
}
