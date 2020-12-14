import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import DrawerItem from '../../widgets/drawer-item/DrawerItem';
import Header from '../../widgets/header/Header';
import theme, { Box, Text } from '../../widgets/theme';

const { width } = Dimensions.get("window");
const aspectRatio = 499 / 749; // (alto / ancho)
const DRAWER_WIDTH = width * 0.8;
const height = DRAWER_WIDTH * aspectRatio;
const items = [
    {
        icon: "zap",
        label: "Outfit Ideas",
        screen: "OutfitIdeas",
        color: "primary"
    },
    {
        icon: "heart",
        label: "Favorites OutFits",
        screen: "FavoritesOutFits",
        color: "orange"
    },
    {
        icon: "user",
        label: "Edit Profile",
        //screen: "EditProfile",
        screen: "FavoritesOutFits",
        color: "yellow"
    },
    {
        icon: "clock",
        label: "Transaction History",
        screen: "TransactionHistory",
        color: "pink"
    },
    {
        icon: "settings",
        label: "Notifications Settings",
        //screen: "NotificationsSettings",
        screen: "FavoritesOutFits",
        color: "violet"
    },
    {
        icon: "log-out",
        label: "Logout",
        screen: "Welcome",
        color: "secondary"
    },
];

/**
 * !!!TODO!!! Por que no se puede usar en esta funcion hook??
 * @param {*} param0 
 */
export default function DrawerContent({ navigation }) {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor='background'>
                <Box
                    position='absolute'
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    borderTopRightRadius='xl'
                    backgroundColor='secondary'
                // paddingHorizontal='m'
                // flexDirection='row'
                // justifyContent='space-between'
                // style={{ paddingTop: StatusBar.currentHeight * 1.5 }}
                >
                    <Header
                        title='MENU'
                        left={{ icon: "x", onPress: () => navigation.dispatch(DrawerActions.closeDrawer) }}
                        right={{ icon: "shopping-bag", onPress: () => true }}
                        dark={true}
                    />
                </Box>
            </Box>
            <Box flex={0.8} >
                <Box flex={1} backgroundColor='secondary' />
                <Box flex={1} backgroundColor='primaryLight' />
                <Box
                    overflow='hidden'
                    style={{
                        ...StyleSheet.absoluteFillObject,
                    }}
                >
                    <Image
                        source={require("../../../../assets/imgs/paterns.png")}
                        style={{
                            position: 'absolute',
                            bottom: (-height * 0.61),
                            left: 0,
                            right: 0,
                            width: DRAWER_WIDTH,
                            height
                        }}
                    />
                </Box>
                <Box
                    position='absolute'
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    backgroundColor='background'
                    borderTopLeftRadius='xl'
                    borderBottomRightRadius='xl'
                    justifyContent='center'
                    alignItems='center'
                //padding='xl'
                >
                    <Box
                        position='absolute'
                        left={DRAWER_WIDTH / 2 - 80}
                        top={-50}
                        backgroundColor='primary'
                        width={100}
                        height={100}
                        style={{ borderRadius: 50 }}
                    />
                    <Box marginBottom='xl'>
                        <Text variant='title1' textAlign='center'>Nacho </Text>
                        <Text variant='body' textAlign='center'>nacholf@hotmail.com</Text>
                    </Box>
                    <Box alignSelf='flex-start' justifySelf='flex-start' marginLeft='s'>
                        {items.map(item => (
                            <DrawerItem key={item.icon} {...item} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box
                flex={0.1}
                //width={DRAWER_WIDTH}
                //height={height * 0.61}
                backgroundColor='background'
                overflow='hidden'
            >
                <Image
                    source={require("../../../../assets/imgs/paterns.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        // width: undefined,
                        // height: undefined,
                        //width, height, top: -height * 0.7 
                        //top: (-height * (1 - 0.61)),
                        // left: 0,
                        // right: 0,
                        width: DRAWER_WIDTH,
                        height,
                        borderTopLeftRadius: theme.borderRadii.xl
                    }}
                />
            </Box>
        </Box>
    )
};

