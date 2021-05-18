import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, TouchableHighlight } from 'react-native';

export default function App() {

  const handlePress = () => { console.log("Text Pressed") }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.fontColor}
        // numberOfLines={1}
        onPress={handlePress()}
      >
        Hello React Native, A really really long text. I wanna make this even longer and see what happens!
      </Text>

      <TouchableHighlight
        onPress={() => console.log("Image Tapped")}
      >
        <Image
          blurRadius={0.4}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}
        />

      </TouchableHighlight>


      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
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
