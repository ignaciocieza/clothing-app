import React, { forwardRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Box, useTheme } from '../theme';
import PropTypes from 'prop-types';
import RoundedIcon from '../rounded-icon/RoundedIcon';

const TextInputCoustome = forwardRef(({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : (error ? "danger" : "primary");
    const color = theme.colors[reColor];

    return (
        <Box
            flexDirection='row'
            height={48}
            borderWidth={StyleSheet.hairlineWidth}
            borderRadius='s'
            borderColor={reColor}
            alignItems='center'
        >
            <Box padding='s'>
                <Icon name={icon} size={16} color={color} />
            </Box>
            <Box flex={1}>
                <TextInput
                    ref={ref}
                    underlineColorAndroid='transparent'
                    placeholderTextColor={color}
                    {...props}
                />
            </Box>
            {touched && (
                <RoundedIcon
                    backgroundColor={!error ? 'primary' : 'danger'}
                    name={!error ? 'check' : 'x'}
                    size={SIZE}
                    color='background'
                    iconRatio={0.8}
                />
            )}
        </Box>
    )
})

TextInputCoustome.prototype = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    touched: PropTypes.bool,
    error: PropTypes.string
};

export default TextInputCoustome;