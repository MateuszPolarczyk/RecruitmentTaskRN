import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

import {MainStack} from './src/stacks/Main';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Navbar} from './src/components/Navbar/Navbar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent />
      <NavigationContainer>
        <Navbar />
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
