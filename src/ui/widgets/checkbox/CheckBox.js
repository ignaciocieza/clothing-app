import React from 'react';
// import { Feather as Icon } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';
import { Box, Text } from '../theme';
import PropTypes from 'prop-types';
import { BaseButton, BorderlessButton } from 'react-native-gesture-handler';

export default function CheckBox({ label, checked, onChange }) {
    return (
        <BorderlessButton
            //onPress={() => setChecked((c) => !c)}
            onPress={() => onChange()}
            style={{ justifyContent: 'center' }}
        >
            <Box flexDirection='row' alignItems='center'>
                <Box
                    marginRight='m'
                    alignItems='center'
                    justifyContent='center'
                    height={20}
                    width={20}
                    borderRadius='s'
                    borderWidth={1}
                    borderColor='primary'
                    backgroundColor={checked ? "primary" : "background"}
                >
                    <Icon name='check' color='white' />
                </Box>
                <Text variant='button'>{label}</Text>
            </Box>
        </BorderlessButton>
    )
};

CheckBox.prototype = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}