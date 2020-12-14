import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Container from '../../../widgets/container/Container';
import CoustomeButton from '../../../widgets/coustome-button/CoustomeButton';
import RoundedIcon from '../../../widgets/rounded-icon/RoundedIcon';
import { Box, Text } from '../../../widgets/theme';

const SIZE = 60;

export default function PasswordChanged({ navigation }) {
    return (
        <Container footer={
            <Box flexDirection='row' justifyContent='center'>
                <RoundedIcon
                    backgroundColor='background'
                    color='secondary'
                    name='x'
                    size={SIZE}
                    iconRatio={0.7}
                    onPress={() => navigation.pop()}
                />
            </Box>}
        >
            <Box flex={1} justifyContent='center' alignItems='center'>
                <RoundedIcon
                    backgroundColor='primaryLight'
                    color='primary'
                    name='check'
                    size={SIZE}
                    iconRatio={0.7}
                />
                <Text variant='title1' textAlign='center' marginVertical='xl'>Your password was succesfully changed </Text>
                <Text variant='body' textAlign='center' marginBottom='xl' >Close this windows and login again</Text>
                <Box alignItems='center' marginTop='m'>
                    <CoustomeButton
                        variant='primary'
                        onPress={() => navigation.navigate('Login')}
                        label='Login'
                    />
                </Box>
            </Box>
        </Container>
    )
};