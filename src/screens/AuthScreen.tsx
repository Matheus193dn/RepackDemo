import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Federated} from '@callstack/repack/client';

const MiniAppAuthApp = React.lazy(() =>
  Federated.importModule('AuthApp', './AuthScreen'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color={'rgba(56, 30, 114, 1)'} size={'large'} />
  </View>
);

const AuthScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <MiniAppAuthApp />
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
