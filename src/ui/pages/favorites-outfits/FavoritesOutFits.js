import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Transition, Transitioning } from 'react-native-reanimated';
import Header from '../../widgets/header/Header';
import Outfit from '../../widgets/outfit/Outfit';
import { Box, useTheme } from '../../widgets/theme';
import TopCurve from '../../widgets/top-curve/TopCurve';
import Footer from './Footer';

const { width: wWidth } = Dimensions.get("window");
const defaultOutfits = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false
    },
    {
        id: 2,
        color: "#BEECC4",
        aspectRatio: 200 / 145,
        selected: false
    },
    {
        id: 3,
        color: "#FFE4D9",
        aspectRatio: 180 / 145,
        selected: false
    },
    {
        id: 4,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false
    },
    {
        id: 5,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false
    },
    {
        id: 6,
        color: "#F3F0EF",
        aspectRatio: 120 / 145,
        selected: false
    },
    {
        id: 7,
        color: "#D5C3BB",
        aspectRatio: 210 / 145,
        selected: false
    },
    {
        id: 8,
        color: "#DEEFC4",
        aspectRatio: 160 / 145,
        selected: false
    },
]

export default function FavoritesOutFits({ navigation }) {
    const [outfits, setOutfits] = useState(defaultOutfits);
    const [footerHeight, setFooterHeight] = useState(0);
    const list = useRef(null);
    const theme = useTheme();
    const width = (wWidth - theme.spacing.m * 2) / 2;
    const transition = (
        <Transition.Together>
            <Transition.Out type="fade"  />
            <Transition.In  type="fade" />
        </Transition.Together>
    )

    return (
        <Box flex={1} backgroundColor='background'>
            <Header
                title='FAVORTITES OUTFITS'
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Box flex={1}>
                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: theme.spacing.m, paddingBottom: footerHeight }}
                    showsVerticalScrollIndicator={false}
                >
                    <Transitioning.View ref={list} transition={transition}>
                        <Box flexDirection='row' >
                            <Box marginRight='s'>
                                {outfits.filter((_, i) => ((i % 2) !== 0)).map(outfit => (
                                    <Outfit
                                        key={outfit.id}
                                        outfit={outfit}
                                        width={width}
                                    />))}
                            </Box>
                            <Box>
                                {outfits.filter((_, i) => ((i % 2) === 0)).map(outfit => (
                                    <Outfit
                                        key={outfit.id}
                                        outfit={outfit}
                                        width={width}
                                    />))}
                            </Box>
                        </Box>
                    </Transitioning.View>
                </ScrollView>
                <TopCurve footerHeight={footerHeight} />
                <Box
                    position='absolute'
                    bottom={0}
                    left={0}
                    right={0}
                    onLayout={({
                        nativeEvent:
                        { layout: { height } }
                    }) => setFooterHeight(height)}
                >
                    <Footer
                        label='Add to Favorites'
                        onPress={() => {
                            list.current?.animateNextTransition();
                            setOutfits(outfits.filter(outfit => !outfit.selected))
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
};