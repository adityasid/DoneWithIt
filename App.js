import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Dimensions
} from 'react-native';

export default function App() {

  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: 'gray',
          width: '50%',
          height: 70,

        }}
      >
        <Text style={{ color: 'white' }}>React Native</Text>
      </View>
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
    justifyContent: 'center'
  },
  fontColor: {
    color: 'white'
  },
});
