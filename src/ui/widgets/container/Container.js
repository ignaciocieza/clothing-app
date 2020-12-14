import React from 'react';
import { Image, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Box, useTheme } from '../../widgets/theme';

const { width, height: wheight } = Dimensions.get("window")
const aspectRatio = 499 / 749; // (alto / ancho)
const height = width * aspectRatio;

/**
 * TODO: arregalar el flex={1} -> levanta el footer
 * @param {*} param0 
 */
export default function Container({ children, footer }) {

    const theme = useTheme();

    return (
        <KeyboardAwareScrollView>
            {/* <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
                style={{ flexGrow: 1, backgroundColor: theme.colors.secondary }}
            > */}
            <Box height={wheight + StatusBar.currentHeight} backgroundColor='secondary' >
                <Box backgroundColor='background'>
                    <Box borderBottomLeftRadius='xl' overflow='hidden' height={height * 0.7}>
                        <Image
                            style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }}
                            source={require("../../../../assets/imgs/paterns.png")}
                        />
                    </Box>
                </Box>
                <Box flex={1} overflow='hidden' >
                    <Image
                        style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.7 }}
                        source={require("../../../../assets/imgs/paterns.png")} />
                    <Box flex={1} borderRadius='xl' borderTopLeftRadius={0} backgroundColor='background' justifyContent='center'>
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="secondary" paddingTop='m' paddingBottom='m'>
                    {footer}
                </Box>
            </Box>

            {/* </KeyboardAvoidingView>*/}
        </KeyboardAwareScrollView>
    )
}