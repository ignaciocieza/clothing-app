import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BorderlessButton, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Text } from '../theme';

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

export default function Category({ color, title, id }) {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity onPress={() => setSelected(prev => !prev)}>
            <Box
                marginLeft='m'
                marginTop='s'
                alignItems='center'
            >
                <Box
                    width={OUTER_RADIUS * 2}
                    height={OUTER_RADIUS * 2}
                    justifyContent='center'
                    alignItems='center'
                >
                    {
                        selected && (
                            <View style={{
                                ...StyleSheet.absoluteFillObject,
                                borderRadius: OUTER_RADIUS,
                                borderColor: color,
                                borderWidth: 1
                            }} />
                        )
                    }
                    <View style={{
                        width: INNER_RADIUS * 2,
                        height: INNER_RADIUS * 2,
                        borderRadius: INNER_RADIUS,
                        backgroundColor: color
                    }}
                    />
                </Box>
                <Text textAlign='center' marginTop='s' >{title}</Text>
            </Box>
        </TouchableOpacity>
    )
}