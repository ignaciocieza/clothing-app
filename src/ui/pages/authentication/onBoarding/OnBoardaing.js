import React, { useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Slide from '../../../widgets/slide/Slide';
import SubSlide from '../../../widgets/sub-slide/SubSlide';
import Dot from '../../../widgets/dot/Dot';
import styles from './onBoarding.styles';

const { width } = Dimensions.get('window');

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: {
            src: require("../../../../../assets/imgs/one1m.png"),
            width: 2513,
            height: 3583
        },
    },
    {
        title: "PlayFul",
        subtitle: "Hear it First, Wear it First",
        description: "Hatingt the clothes in yor wardrobe? Explore hundresds of outfit ideal",
        color: "#BEECC4",
        picture: {
            src: require("../../../../../assets/imgs/dosm.png"),
            width: 2791,
            height: 3744
        },
    },
    {
        title: "Excentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazin everday",
        color: "#FFE4D9",
        picture: {
            src: require("../../../../../assets/imgs/tresm.png"),
            width: 2738,
            height: 3244
        },
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description: "This is the lastest trends un fashion and explore your personality",
        color: "#FFDDDD",
        picture: {
            src: require("../../../../../assets/imgs/cuatrom.png"),
            width: 1757,
            height: 2551
        },
    }
]

export default function OnBoardaing() {
    const navigation = useNavigation();
    const scroll = useRef(null);
    //const x = useValue(0);
    //const onScroll = onScrollEvent({ x: x });
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    });


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {/* Por la animacion no puede ir en componente aparte */}
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            (index * width),
                            (index + 0.5) * width],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP
                    })
                    return (
                        <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                            <Image source={picture.src} style={styles.picture} />
                        </Animated.View>
                    )
                })}
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    //scrollEventThrottle={1}
                    {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide
                            key={index}
                            {...{ title, picture, index, x }}
                            right={!!(index % 2)}
                        />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <Animated.View style={styles.footer}>
                <Animated.View style={[styles.footerSubOne, { backgroundColor }]} />
                <View
                    style={
                        styles.footerContent
                        // {
                        //     width: width * slides.length,
                        //     transform: [{ translateX: multiply(x, - 1) }]
                        // }
                    }
                >
                    <View style={styles.pagination} >
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={divide(x, width)} {...{ index, x }} />
                        ))}
                    </View>

                    <Animated.View style={{
                        width: width * slides.length,
                        flex: 1,
                        flexDirection: 'row',
                        transform: [{ translateX: multiply(x, - 1) }]
                    }}>

                        {slides.map(({ subtitle, description }, index) => {
                            const last = (index === (slides.length - 1));
                            return (
                                <SubSlide
                                    key={index}
                                    {...{ subtitle, description, last }}
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate("Welcome")
                                        }
                                        else {
                                            scroll.current?.getNode().scrollTo({
                                                x: width * (index + 1),
                                                animated: true
                                            })
                                        }
                                    }}
                                />
                            )
                        })}
                    </Animated.View>
                </View>
            </Animated.View>
        </View>
    )
};