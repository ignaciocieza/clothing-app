import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Box, Text, useTheme } from '../theme';
import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon from '../rounded-icon/RoundedIcon';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { resetInitialState } from '../../../api/actions/actions';

export default function DrawerItem({ icon, color, screen, label }) {
    const theme = useTheme();
    const navigation = useNavigation();
    const dispatch = useDispatch()

    return (
        <RectButton
            style={{ borderRadius: theme.borderRadii.m }}
            onPress={() => {
                (label === 'Logout') && dispatch(resetInitialState())
                navigation.navigate(screen)
            }}
        >
            <Box flexDirection='row' alignItems='center' paddingVertical='m'>
                <RoundedIcon
                    size={36}
                    iconRatio={0.5}
                    name={icon}
                    backgroundColor={color}
                    color='background'
                />
                <Text variant='button' color='secondary' marginLeft='s'>{label}</Text>
            </Box>
        </RectButton>
    )
};

DrawerItem.prototype = {
    icon: PropTypes.string,
    color: PropTypes.string,
    screen: PropTypes.string,
    label: PropTypes.string,
}