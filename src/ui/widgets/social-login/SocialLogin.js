import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Svg, { Path } from 'react-native-svg';
import { setButtonLogin, setIsFetched } from '../../../api/actions/actions';
import { Box, useTheme } from '../theme'


const Google = () => (
    <Svg viewBox="0 0 512 512" width={20} height={20} fill="none">
        <Path
            d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
            fill="#fbbb00"
        />
        <Path
            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
            fill="#518ef8"
        />
        <Path
            d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
            fill="#28b446"
        />
        <Path
            d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
            fill="#f14336"
        />
    </Svg>
);

const Facebook = () => (
    <Svg viewBox="0 0 512 512" width={20} height={20} fill="none">
        <Path
            d="M384 176h-96v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80z"
            fill="#1976d2"
        />
    </Svg>
);

const Apple = () => (
    <Svg viewBox="0 0 512 512" width={20} height={20} fill="none">
        <Path fill="#000" d="M185.255 512c-76.201-.439-139.233-155.991-139.233-235.21 0-129.404 97.075-157.734 134.487-157.734 16.86 0 34.863 6.621 50.742 12.48 11.104 4.087 22.588 8.306 28.975 8.306 3.823 0 12.832-3.589 20.786-6.738 16.963-6.753 38.071-15.146 62.651-15.146h.146c18.354 0 74.004 4.028 107.461 54.272l7.837 11.777-11.279 8.511c-16.113 12.158-45.513 34.336-45.513 78.267 0 52.031 33.296 72.041 49.292 81.665 7.061 4.248 14.37 8.628 14.37 18.208 0 6.255-49.922 140.566-122.417 140.566-17.739 0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.797-8.862-8.086 0-18.311 3.823-29.136 7.881C221.496 505.73 204.752 512 185.753 512h-.498zM351.343 0c1.888 68.076-46.797 115.304-95.425 112.342C247.905 58.015 304.54 0 351.343 0z" />
    </Svg>
)

function SocialIcon({ children, email, pass }) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const SIZE = theme.borderRadii.l * 2;

    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(setButtonLogin({ email, pass }))
                dispatch(setIsFetched(false))
            }}
        >
            <Box marginHorizontal='s' backgroundColor='background' width={SIZE} height={SIZE} borderRadius='l' justifyContent='center' alignItems='center'>
                {children}
            </Box>
        </TouchableOpacity>
    )
}

export default function SocialLogin() {
    return (
        <Box flexDirection='row' justifyContent='center' >
            <SocialIcon email='nacholf_08@hotmail.com' pass='123456' >
                <Facebook />
            </SocialIcon>
            <SocialIcon>
                <Google />
            </SocialIcon>
            <SocialIcon>
                <Apple />
            </SocialIcon>
            <SocialIcon>
                <Google />
            </SocialIcon>
            <SocialIcon>
                <Apple />
            </SocialIcon>
        </Box>
    )
}