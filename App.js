import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Button, Alert } from 'react-native';

export default function App() {

  const handlePress = () => { console.log("Text Pressed") }

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        color="blue"
        onPress={
          () =>
            Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  fontColor: {
    color: 'white'
  },
});
