import React from 'react';
import { Dimensions, View } from 'react-native';
import { Box, useTheme } from '../theme';
import Underlay, { MARGIN } from './underlay/Underlay';

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 385;
export const lerp = (v0, v1, t) => ((1 - t) * v0 + t * v1);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



export default function Graph({ data }) {
    const theme = useTheme();
    const canvasWidth = wWidth - theme.spacing.m * 2;
    const canvasHeight = wWidth * aspectRatio;
    const width = canvasWidth - theme.spacing[MARGIN];
    const height = canvasHeight - theme.spacing[MARGIN];
    const step = width / data.length;
    const values = data.map(p => p.value);
    const dates = data.map(p => p.date);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);

    return (
        <Box marginTop='xl' paddingBottom={MARGIN} paddingLeft={MARGIN}>
            <Underlay dates={dates} minY={minY} maxY={maxY} step={step} />
            <Box
                width={width}
                height={height}
            >
                {
                    data.map((point, i) => {
                        if (point.value === 0) {
                            return null;
                        }

                        const colorItem = getRandomColor();

                        return (
                            <Box
                                key={point.date}
                                position="absolute"
                                width={step}
                                height={lerp(0, height, point.value / maxY)}
                                left={i * step}
                                bottom={0}
                            //backgroundColor='primary'
                            >
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: theme.spacing.m,
                                        right: theme.spacing.m,
                                        //backgroundColor: theme.colors.primaryLight,
                                        backgroundColor: colorItem,
                                        opacity: 0.1,
                                        borderTopLeftRadius: theme.borderRadii.m,
                                        borderTopRightRadius: theme.borderRadii.m
                                    }}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        height: 32,
                                        left: theme.spacing.m,
                                        right: theme.spacing.m,
                                        //backgroundColor: theme.colors.primary,
                                        backgroundColor: colorItem,
                                        borderRadius: theme.borderRadii.m,
                                    }}
                                />
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}