import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { add, Extrapolate, interpolate } from 'react-native-reanimated';
import { mix, mixColor, usePanGestureHandler } from 'react-native-redash';
import { useSpring } from './animation';
import { Box } from '../theme';

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (425 / 295); //image aspect ratio
const borderRadius = 24;

export default function Card({ position, onSwipe, source, step }) {
    const {
        gestureHandler,
        translation,
        velocity,
        state
    } = usePanGestureHandler();
    const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
    const translateYOffset = mix(position, 0, -50);
    const scale = mix(position, 1, 0.9);
    const imageScale = interpolate(position, {
        inputRange: [0, step],
        outputRange: [1.2, 0.8],
        extrapolate: Extrapolate.CLAMP
    })
    const translateX = useSpring({
        value: translation.x,
        velocity: velocity.x,
        state,
        snapPoints: [-wWidth, 0, wWidth],
        onSnap: ([x]) => x !== 0 && onSwipe(),
    });
    const translateY = add(
        translateYOffset,
        useSpring({
            value: translation.y,
            velocity: velocity.y,
            state,
            snapPoints: [0]
        }))

    return (
        <Box
            style={StyleSheet.absoluteFill}
            justifyContent='center'
            alignItems='center'
        >
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={{
                        backgroundColor,
                        width,
                        height,
                        borderRadius,
                        transform: [{ translateY }, { translateX }, { scale }],
                        overflow: 'hidden'
                    }}
                >
                    <Animated.Image source={source} style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        transform: [{ scale: imageScale }]
                    }} />
                </Animated.View>
            </PanGestureHandler>
        </Box>
    )
}