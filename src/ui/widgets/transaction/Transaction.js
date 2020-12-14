import React from 'react';
import { Box, Text } from '../theme';

export default function Transaction({ transaction }) {
    return (
        <Box>
            <Box>
                <Box flexDirection='row' alignItems='center'>
                    <Box
                        marginRight='s'
                        style={{ width: 10, height: 10, borderRadius: 5 }}
                    />
                    <Text variant='title3'>{`#${transaction.id}`}</Text>
                </Box>
                <Box >
                    <Text>
                        {`$${transaction.value} - ${new Date(transaction.date).toLocaleDateString()}`}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Text color='secondary'>See more</Text>
            </Box>
        </Box>
    )
}