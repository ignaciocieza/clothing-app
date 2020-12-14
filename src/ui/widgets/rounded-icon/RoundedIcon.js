import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Box, Text } from '../theme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export default function RoundedIcon({ name, size, color, backgroundColor, onPress, iconRatio, isButtonHeader }) {
    const Conteint = () => (
        <Box
            height={size}
            width={size}
            style={{ borderRadius: size / 2 }}
            alignItems='center'
            justifyContent='center'
            marginRight='s'
            backgroundColor={backgroundColor}
        >
            <Text color={color}>
                <Icon
                    size={size * iconRatio}
                    name={name}
                />
            </Text>
        </Box>
    )

    return (
        <>
            {onPress ? (
                isButtonHeader ? (
                    <BorderlessButton onPress={onPress}>
                        <Conteint />
                    </BorderlessButton>
                ) : (
                        <RectButton onPress={onPress} >
                            <Conteint />
                        </RectButton>
                    )
            ) : (
                    <Conteint />
                )
            }
        </>
    );
};

RoundedIcon.prototype = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    iconRatio: PropTypes.number.isRequired,
    onPress: PropTypes.func,
    isButtonHeader: PropTypes.bool
}