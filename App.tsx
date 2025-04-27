import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';

import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar/Navbar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navbar />
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
