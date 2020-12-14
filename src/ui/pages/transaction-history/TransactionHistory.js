import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Graph from '../../widgets/graph/Graph';
import Header from '../../widgets/header/Header';
import { Box, Text, useTheme } from '../../widgets/theme';
import Transaction from '../../widgets/transaction/Transaction';
import TopCurve from './TopCurve';

const footerHeight = (Dimensions.get('window').width / 4);
const data = [
    {
        date: new Date("2019-09-01").getTime(),
        value: 0,
        id: 245673,
    },
    {
        date: new Date("2019-10-01").getTime(),
        value: 139.42,
        id: 245672,
    },
    {
        date: new Date("2019-11-01").getTime(),
        value: 281.23,
        id: 245671,
    },
    {
        date: new Date("2019-12-01").getTime(),
        value: 0,
        id: 3,
    },
    {
        date: new Date("2020-01-01").getTime(),
        value: 198.54,
        id: 4,
    },
    {
        date: new Date("2020-02-01").getTime(),
        value: 0,
        id: 6,
    },
    {
        date: new Date("2020-03-01").getTime(),
        value: 120,
        id: 7,
    },
]

export default function TransactionHistory({ navigation }) {
    const theme = useTheme();

    return (
        <Box flex={1} backgroundColor='background'>
            <Header
                left={{
                    icon: "menu",
                    onPress: () => navigation.openDrawer()
                }}
                right={{
                    icon: "share",
                    onPress: () => navigation.openDrawer()
                }}
                title='Transaction History'
            />
            <Box padding='m'>
                <Box flexDirection='row' justifyContent='space-between' alignItems='flex-end'>
                    <Box>
                        <Text variant='header' color='secondary' opacity={0.5}>Total Spent</Text>
                        <Text variant='title1'>$619,19</Text>
                    </Box>
                    <Box backgroundColor='primaryLight' borderRadius='m' padding='m'>
                        <Text color='primary'>All Time</Text>
                    </Box>
                </Box>
                <Graph data={data} />
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: footerHeight * 5,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        data.map((transaction) => (
                            <Transaction key={transaction.id} transaction={transaction} />
                        ))
                    }
                </ScrollView>
            </Box>
            <TopCurve footerHeight={footerHeight} />
            <Box
                position='absolute'
                left={0}
                right={0}
                bottom={0}
                height={footerHeight}
            >
                <Image
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl
                    }}
                    source={require("../../../../assets/imgs/paterns.png")} />
            </Box>
        </Box>
    )
}