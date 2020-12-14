import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from '../../widgets/category/Category';

const categories = [
    {
        id: 'newin',
        title: 'New In',
        color: "#FFE8E9"
    },
    {
        id: 'summer',
        title: 'Summer',
        color: "#F1E0FF"
    },
    {
        id: 'activewear',
        title: 'Active Wear',
        color: "#BFEAF5"
    },
    {
        id: 'outlet',
        title: 'Outlet',
        color: "#BFEAF5"
    },
    {
        id: 'accesories',
        title: 'Accesories',
        color: "#FFE8E9"
    },
]

export default function Categories() {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {categories.map(cat => (
                    <Category key={cat.id} {...cat} />
                ))}
            </ScrollView>
        </View>
    );
}