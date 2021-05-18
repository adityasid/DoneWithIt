import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';


export default function App() {


  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        alignContent: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          // height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 400,
        }}
      />
      <View
        style={{
          backgroundColor: 'gray',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 700,
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
