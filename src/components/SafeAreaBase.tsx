import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SafeAreaBase(props: any) {
  const {children} = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      {children}
    </View>
  );
}

export default SafeAreaBase;
