/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import {
  checkMultiple,
  requestMultiple,
  request,
  PERMISSIONS,
} from 'react-native-permissions';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section from '../components/Section';
import SafeAreaBase from '../components/SafeAreaBase';

function MainScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const requestPermissions = async () => {
    try {
      await requestMultiple([
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ]).then(status => {
        console.log('statuses===: ', JSON.stringify(status));
      });

      await checkMultiple([
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ]).then(status => {
        console.log('check-status===: ', JSON.stringify(status));
      });
    } catch (error) {}
  };

  // return <AuthScreen />;

  const getFileContent = async (path: any) => {
    const reader = await RNFS.readDir(path);
    console.log('===reader: ', JSON.stringify(reader));
  };

  // useEffect(() => {
  //   // requestReadExternal();
  //   // requestWriteExternal();
  //   // getFileContent(`${RNFS.DocumentDirectoryPath}`); //run the function on the first render.
  //   const getFileContent = async (path: any) => {
  //     const reader = await RNFS.readDir(path);
  //     console.log('===reader: ', JSON.stringify(reader));
  //   };
  //   // getFileContent(`${}`)
  //   RNFS.existsAssets('remotes').then(async value => {
  //     if (value) {
  //       try {
  //         const remotesFiles = await RNFS.readDirAssets('remotes').then(
  //           value => value,
  //         );
  //         if (remotesFiles.length > 0) {
  //           const filePath = `${RNFS.DocumentDirectoryPath}/${remotesFiles[0].path}`;
  //           const fixedPath = `${RNFS.DocumentDirectoryPath}/AuthApp.container.bundle`;
  //           const fileContent = await RNFS.readFileAssets(remotesFiles[0].path)
  //             .then(async value => {
  //               await RNFS.mkdir(filePath)
  //                 .then(async () => {
  //                   await RNFS.stat(filePath)
  //                     .then(async statValue => {
  //                       console.log('value-stat:', JSON.stringify(statValue));
  //                       await RNFS.writeFile(fixedPath, value, 'utf8')
  //                         .then(async () => console.log('write status==: '))
  //                         .catch(err => console.log('write file-err: ', err));
  //                     })
  //                     .catch(err => console.log('value-stat-err: ', err));
  //                 })
  //                 .catch(err => console.log('mkdir-err: ', err));
  //             })
  //             .catch(err => console.log('err==: ', err));
  //           await RNFS.stat(fixedPath)
  //             .then(statValue =>
  //               console.log('statvalue===: ', JSON.stringify(statValue)),
  //             )
  //             .catch(err => console.log('stat-fixedpaht-err: ', err));
  //         }
  //       } catch (error) {
  //         console.log('error===: ', error);
  //       }
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // const fetchBundle = async () => {
    //   console.log('fetchBundle: ');
    //   const containersURL = getContainersURL({
    //     hostname: 'http://127.0.0.1:3001',
    //     platform: Platform.OS,
    //     appName: 'auth',
    //   });
    //   console.log('containersURL===: ', containersURL);
    //   const containersResponse = await axios
    //     .get(containersURL)
    //     .then(value => {
    //       console.log('containersResponse==: ', JSON.stringify(value));
    //       console.log('containersResponse-2==: ', value);
    //       return value;
    //     })
    //     .catch(err => console.log('fetch-err: ', err));
    //   console.log('containersResponse===: ', containersResponse);
    //   // const containers = await containersResponse.
    //   // console.log('containers===: ', containers);
    // };
    // fetchBundle();
    // const pingGoogle = async () => {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .get('google.com.vn')
    //       .then(res => {
    //         console.log('===ping google: ', res);
    //         resolve(res);
    //       })
    //       .catch(err => {
    //         console.log('=== err-ping: ', err);
    //         reject(err);
    //       });
    //   });
    // };
    // pingGoogle();
  }, []);

  return (
    <SafeAreaBase style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'pink', height: 50}}
            onPress={requestPermissions}>
            <Text>Request Permissions</Text>
          </TouchableOpacity>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaBase>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default MainScreen;
