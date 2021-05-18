import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


export default function App() {


  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 2
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1
        }}
      />
    </View>
  );
}

const containerStyle = { backgroundColor: "lightblue" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  fontColor: {
    color: 'white'
  },
});
