import React from 'react';
import CoustomeButton from '../../widgets/coustome-button/CoustomeButton';
import { Box } from '../../widgets/theme';


export default function Footer({ label, onPress }) {
    return (
        <Box backgroundColor='secondary' padding='l' borderTopLeftRadius='xl'>
            <Box alignItems='center'>
                <CoustomeButton variant='primary' isNotCheck={true} label={label} onPress={onPress} />
            </Box>
        </Box>
    )
}