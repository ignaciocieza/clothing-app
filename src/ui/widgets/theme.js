import { createTheme, createText, createBox, useTheme as useReTheme } from '@shopify/restyle';

const theme = createTheme({
    colors: {
        primary: "#2CB9B0",
        primaryLight: "#E7F9F7",
        secondary: '#0C0D34',
        danger: '#FF0058',
        text: "rgba(12,13,52,0.7)",
        background:"white" ,
        grey: "#F4F0EF",
        darkGrey: '#8A8D90',
        lightGrey: '#FAFAFA',
        orange: '#FE5E33',
        yellow: '#FFC641',
        pink: '#FF87A2',
        violet: '#442CB9',
        lightBlue:"#BFEAF5"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        //xl: 40,
        xl: 75
    },
    textVariants: {
        hero: {
            fontSize: 60,
            lineHeight: 80,
            fontFamily: "SFProText-Bold",
            color: "background",
            textAlign: 'center'
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProText-Semibold",
            color: "secondary",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProText-Semibold",
            color: "secondary",
        },
        title3: {
            fontSize: 16,
            fontFamily: "SFProText-Semibold",
            color: "secondary",
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProText-Regular",
            color: "text",
        },
        button: {
            fontSize: 15,
            lineHeight: 24,
            fontFamily: "SFProText-Medium",
            textAlign: 'center'
        },
        header: {
            fontSize: 17,
            fontFamily: "SFProText-Semibold",
            lineHeight: 24,
            color: 'secondary'
        }
    }
});

export const Box = createBox();
export const Text = createText();
export const useTheme = () => useReTheme();
export default theme;