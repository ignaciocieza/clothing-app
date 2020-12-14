import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
//import ImmersiveMode from 'react-native-immersive-mode'
import Menu from './Menu';
import store from '../../api/store';
import theme from '../widgets/theme';

export default function App() {
  React.useEffect(() => {
    //ImmersiveMode.fullLayout(true);
    //ImmersiveMode.setBarTranslucent(false);
    // ImmersiveMode.setBarColor('#FF573300');
    // ImmersiveMode.setBarMode('BottomSticky');
    StatusBar.setBackgroundColor('#FF573300');//-->ultimos dos 00, son de "opacity"
    StatusBar.setTranslucent(true)
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>
    </Provider>
  );
}