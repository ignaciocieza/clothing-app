import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Text } from '../theme';
import RoundedIcon from '../rounded-icon/RoundedIcon';


export default function Header({ title, left, right, dark }) {
    const color = dark ? "background" : "secondary";
    const backgroundColor = dark ? "secondary" : "lightGrey";

    return (
        <Box
            zIndex={10}
            paddingHorizontal='m'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            style={{ marginTop: StatusBar.currentHeight * 1.5 }}
        >
            <RoundedIcon
                name={left.icon}
                color={color}
                backgroundColor={backgroundColor}
                onPress={left.onPress}
                size={44}
                iconRatio={0.4}
                isButtonHeader
            />
            <Text variant='header' color={color}>
                {title}
            </Text>
            <RoundedIcon
                name={right.icon}
                color={color}
                backgroundColor={backgroundColor}
                onPress={right.onPress}
                size={44}
                iconRatio={0.4}
                isButtonHeader
            />
        </Box>
    )
};

Header.prototype = {
    //left: PropTypes.object,
    //right: PropTypes.object,
    dark: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func
};
