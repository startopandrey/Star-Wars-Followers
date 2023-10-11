/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation/index.navigator';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={DefaultTheme}>
        <Navigation></Navigation>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;
