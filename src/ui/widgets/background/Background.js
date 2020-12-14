import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Box, useTheme } from '../theme';

export default function Background() {
    const theme = useTheme();

    return (
        <View style={StyleSheet.absoluteFill} >
            <Box flex={1 / 3} backgroundColor='lightBlue'>
            <Image
                    source={require('../../../../assets/imgs/paterns.png')}
                    style={{
                        ...StyleSheet.absoluteFill,
                        width: undefined,
                        height: undefined,
                    }}
                />
                <Box flex={1} backgroundColor='background' borderBottomRightRadius='xl' />
            </Box>
            <Box flex={1 / 3}>
                <Box flex={1} backgroundColor='background' />
                <Box flex={1} backgroundColor='secondary' />
                <Image
                    source={require('../../../../assets/imgs/paterns.png')}
                    style={{
                        ...StyleSheet.absoluteFill,
                        width: undefined,
                        height: undefined,
                        //resizeMode: 'cover',
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl
                    }}
                />
            </Box>
            <Box flex={1 / 3} backgroundColor='lightBlue'>
                <Image
                    source={require('../../../../assets/imgs/paterns.png')}
                    style={{
                        ...StyleSheet.absoluteFill,
                        width: undefined,
                        height: undefined,
                        //top:-5,
                        left:-500,
                    }}
                />
                <Box flex={1} backgroundColor='secondary' borderTopLeftRadius='xl' />
            </Box>
        </View>
    )
}