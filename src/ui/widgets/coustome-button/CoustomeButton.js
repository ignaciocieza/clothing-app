import React from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../theme';
import { useTheme } from '@shopify/restyle';
import styles from './coustomeButton.styles';

export default function CoustomeButton({ variant, label, onPress, isNotCheck }) {
    const { isFetching } = useSelector(state => state);
    const { isFetched } = useSelector(state => state);
    const theme = useTheme();
    let backgroundColor, color;

    switch (variant) {
        case 'primary':
            backgroundColor = theme.colors.primary;
            color = theme.colors.background;
            break;
        // case 'transparent':
        //     backgroundColor = 'transparent';
        //     color = theme.colors.secondary;
        //     break;
        default:
            backgroundColor = theme.colors.grey;
            color = theme.colors.secondary;
            break;
    }

    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            { isFetching ? (
                <ActivityIndicator size="large" color="#F4F0EF" />
            ) : (
                    isFetched && !isNotCheck ? (
                        <Icon name='check' size={26} color='#F4F0EF' />
                    ) : (
                            <Text variant='button' style={{ color }} >{label}</Text>
                        )
                )}
        </RectButton>
    )
}