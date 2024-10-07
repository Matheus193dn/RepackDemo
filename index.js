/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Federated, Script} from '@callstack/repack/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import App from './src/App';
import {name as appName} from './app.json';
import getContainersURL from './src/utils/getContainersURL';

ScriptManager.shared.setStorage(AsyncStorage);

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  try {
    const containersURL = getContainersURL({
      platform: Platform.OS,
      appName: 'AuthApp',
    });
    console.log('containersURL===: ', containersURL);

    // const containersResponse = await axios.get(containersURL);
    const containersResponse = await fetch(containersURL);
    console.log('containersResponse===: ', containersResponse);

    const containers = await containersResponse.json();
    console.log('containers===: ', containers);

    const resolveURL = Federated.createURLResolver({
      containers,
    });

    console.log('resolveURL===: ', containersResponse);

    if (__DEV__) {
      const resolveURL = Federated.createURLResolver({
        containers: {
          AuthApp: `https://server-repack-demo.onrender.com/AuthApp/${Platform.OS}/remotes/[name][ext]`,
          WeatherApp: 'http://localhost:9002/[name][ext]',
          TheMoviesApp: 'http://localhost:9003/[name][ext]',
        },
      });
      url = resolveURL(scriptId, caller);
    } else {
      url = resolveURL(scriptId, caller);
    }
  } catch (error) {
    console.log('error==: ', error);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: !__DEV__,
    query: {
      platform: Platform.OS,
    },
    // verifyScriptSignature: __DEV__ ? 'off' : 'strict',
  };
});

ScriptManager.shared.on('resolving', (...args) => {
  console.log('DEBUG/resolving', ...args);
});

ScriptManager.shared.on('resolved', (...args) => {
  console.log('DEBUG/resolved', ...args);
});

ScriptManager.shared.on('prefetching', (...args) => {
  console.log('DEBUG/prefetching', ...args);
});

ScriptManager.shared.on('loading', (...args) => {
  console.log('DEBUG/loading', ...args);
});

ScriptManager.shared.on('loaded', (...args) => {
  console.log('DEBUG/loaded', ...args);
});

ScriptManager.shared.on('error', (...args) => {
  console.log('DEBUG/error', ...args);
});

AppRegistry.registerComponent(appName, () => App);
