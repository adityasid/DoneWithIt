// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation
} from '@react-native-community/hooks'

export default function App() {

  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: 'gray',
          width: '50%',
          height: landscape ? '100%' : '30%',

        }}
      >
        <Text style={styles.fontColor}>React Native</Text>
      </View>
      {/* <StatusBar /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  fontColor: {
    color: 'white'
  },
});
