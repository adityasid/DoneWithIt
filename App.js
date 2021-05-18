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
          flexBasis: 100,
          // flexGrow: 1,
          // flex: -1,  // flexShrink
          flexShrink: 1
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
