import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RoundedIcon from '../rounded-icon/RoundedIcon';
import { Box } from '../theme';

export default function Outfit({ outfit, width }) {
    const [selectedValue, setSelectedValue] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                setSelectedValue((prev) => !prev)
                outfit.selected = !outfit.selected //-->!!!se viola la inmutabilidad del objeto, debe hacerse con redux
            }}>
            <Box
                borderRadius='m'
                marginBottom="m"
                //alignItems='flex-end'
                padding='m'
                style={{ backgroundColor: outfit.color, width, height: width * outfit.aspectRatio }}
            >
                {selectedValue && (
                    <RoundedIcon
                        name='check'
                        iconRatio={0.7}
                        size={24}
                        backgroundColor='primary'
                        color='background'
                    />)}
            </Box>
        </TouchableOpacity>
    )
}