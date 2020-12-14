import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../../theme';
import { lerp } from '../Graph'

//const formatter = Intl.DateTimeFormat('en', { month: 'short' })
export const MARGIN = 'xl';
const ROW_HEIGHT = 16;

export default function Underlay({ dates, minY, maxY, step }) {
    const theme = useTheme();

    return (
        <Box style={StyleSheet.absoluteFill}>
            <Box flex={1} justifyContent="space-between">
                {[1, 0.66, 0.33, 0].map((t) => {
                    return (
                        <Box
                            key={t}
                            flexDirection='row'
                            alignItems='center'
                            height={ROW_HEIGHT}
                            style={{
                                top: t === 0 ? ROW_HEIGHT / 2 : (t === 1 ? -ROW_HEIGHT / 2 : 0)
                            }}
                        >
                            <Box width={theme.spacing[MARGIN]} paddingRight='s'>
                                <Text color='darkGrey' textAlign='right'>
                                    {Math.round(lerp(minY, maxY, t))}
                                </Text>
                            </Box>
                            <Box flex={1} height={1} backgroundColor='grey' />
                        </Box>
                    )
                })
                }
            </Box>
            <Box
                marginLeft={MARGIN}
                height={theme.spacing[MARGIN]}
                flexDirection='row'
                alignItems='center'
            >
                {dates.map((date, index) => {
                    let auxDate = new Date(date);
                    return (
                        <Box key={index} width={step} marginTop='m'>
                            <Text color='darkGrey' textAlign='center'>
                                {auxDate.toLocaleDateString()}
                            </Text>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}