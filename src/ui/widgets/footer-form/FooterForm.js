import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import SocialLogin from '../social-login/SocialLogin';
import { Box, Text } from '../theme';
import PropTypes from 'prop-types';


export default function FooterForm({ onPress, title, action }) {
    return (
        <>
            <SocialLogin />
            <Box alignItems='center' marginTop='m' marginBottom='s'>
                <BorderlessButton onPress={onPress}>
                    <Box flexDirection='row' justifyContent='center'>
                        <Text variant='button' color='background'>{title}</Text>
                        <Text marginLeft='s' variant='button' color='primary'>{action}</Text>
                    </Box>
                </BorderlessButton>
            </Box>
        </>
    )
}

FooterForm.prototype = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    action: PropTypes.string
}