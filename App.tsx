import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

import {MainStack} from './src/stacks/Main';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Navbar} from './src/components/Navbar/Navbar';
import {COLORS} from './src/theme/colors';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={COLORS.darkGreen} />

      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Navbar />
            <MainStack />
          </NavigationContainer>
        </SafeAreaView>
      </QueryClientProvider>
    </>
  );
}

export default App;
