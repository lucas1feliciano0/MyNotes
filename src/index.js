import React from 'react';
import { StatusBar, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeRoutes from './routes/main.routes'

import colors from './theme/colors'

const App = () => {
  let isLightScheme = Appearance.getColorScheme() === 'light'
  let colorScheme =  isLightScheme ? colors.light : colors.dark
  let barStyleColor = isLightScheme ? 'dark-content' : 'light-content'

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colorScheme.background} barStyle={barStyleColor}/>
      <HomeRoutes />
    </NavigationContainer>
  );
}

export default App;