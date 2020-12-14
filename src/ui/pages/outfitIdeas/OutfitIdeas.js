import React, { useState } from 'react';
import { sub } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';
import Background from '../../widgets/background/Background';
import Card from '../../widgets/card/Card';
import Header from '../../widgets/header/Header';
import { Box } from '../../widgets/theme';
import Categories from '../categories/Categories';

const cards = [
    {
        index: 3,
        source: require("../../../../assets/imgs/cuatrom.png")
    },
    {
        index: 2,
        source: require("../../../../assets/imgs/tresm.png")
    },
    {
        index: 1,
        source: require("../../../../assets/imgs/dosm.png")
    },
    {
        index: 0,
        source: require("../../../../assets/imgs/one1m.png")
    },
]

const step = 1 / (cards.length - 1);

export default function OutfitIdeas({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex);

    return (
        <Box flex={1} backgroundColor='background'>
            <Header
                title='OUTFIT IDEAS'
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Categories />
            <Box flex={1}>
                <Background />
                {
                    cards.map(({ index, source }) => (currentIndex < index * step + step) && (
                        <Card
                            key={index}
                            position={sub(index * step, aIndex)}
                            onSwipe={() => setCurrentIndex((prev) => prev + step)}
                            source={source}
                            step={step}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}