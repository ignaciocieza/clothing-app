import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnBoardaing from '../pages/authentication/onBoarding/OnBoardaing';
import Welcome from '../pages/authentication/welcome/Welcome';
import Login from '../pages/authentication/login/Login';
import SignUp from '../pages/authentication/signup/SignUp';
import ForgotPassword from '../pages/authentication/forgot-password/ForgotPassword';
import PasswordChanged from '../pages/authentication/password-changed/PasswordChanged';
import OutfitIdeas from '../pages/outfitIdeas/OutfitIdeas';
import DrawerContent from '../pages/drawer-content/DrawerContent';
import FavoritesOutFits from '../pages/favorites-outfits/FavoritesOutFits';
import TransactionHistory from '../pages/transaction-history/TransactionHistory';

const AuthenticationStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator() {
    return (
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
            <Drawer.Screen name="FavoritesOutFits" component={FavoritesOutFits} />
            <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
        </Drawer.Navigator>
    )
};

function AuthenticationNavigator() {
    return (
        <AuthenticationStack.Navigator headerMode='none'>
            <AuthenticationStack.Screen name="OnBoarding" component={OnBoardaing} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
            <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
            <AuthenticationStack.Screen name="Home" component={HomeNavigator} />
        </AuthenticationStack.Navigator>
    )
};

export default function Menu() {

    return (
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
    );
}
