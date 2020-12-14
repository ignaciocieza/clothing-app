import React from 'react';
import { View } from 'react-native';
import CoustomeButton from '../coustome-button/CoustomeButton';
import { Text } from '../theme';
import styles from './subSlide.styles';

export default function SubSlide({ subtitle, description, last, onPress }) {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text> */}
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <CoustomeButton
                label={last ? "Let's get started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    );
}