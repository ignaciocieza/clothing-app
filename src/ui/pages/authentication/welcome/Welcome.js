import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Text } from '../../../widgets/theme';
//import { SLIDE_HEIGHT } from '../../../widgets/slide/Slide';
import CoustomeButton from '../../../widgets/coustome-button/CoustomeButton';
import { BorderlessButton } from 'react-native-gesture-handler';

const picture = {
    src: require('../../../../../assets/imgs/menMod.png'),
    width: 3383,
    height: 5074
}

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <Box flex={1} backgroundColor="background">
            <Box
                flex={1}
                borderBottomRightRadius="xl"
                backgroundColor="grey"
                //alignContent='center'
                alignItems='center'
                justifyContent='flex-end'
            //height={SLIDE_HEIGHT}
            >
                <Image source={picture.src} style={{
                    //...StyleSheet.absoluteFillObject,
                    //paddingTop:50,
                    width: 300,
                    height: 450,
                    //flex:1
                }} />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="grey" position="absolute" top={0} right={0} left={0} bottom={0} />
                <Box
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems='center'
                    padding='xl'
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text varian="body" textAlign='center'>Login to your account below or dignup for an amazing experience</Text>
                    <CoustomeButton onPress={() => navigation.navigate('Login')} variant="primary" label="Have an account? Login" />
                    <CoustomeButton onPress={() => navigation.navigate('SignUp')} label="Join us, it's Free" />
                    <BorderlessButton borderless={false} onPress={() => navigation.navigate("ForgotPassword")} >
                        <Text variant='button' color="secondary">Forgot password?</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    )
}