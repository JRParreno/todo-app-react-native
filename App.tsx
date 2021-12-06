import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './redux/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}
