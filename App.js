import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Button, Alert } from 'react-native';

export default function App() {

  const handlePress = () => { console.log("Text Pressed") }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={
          () =>
            Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontColor: {
    color: 'white'
  },
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
