import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello React Native
        </Text>
      </View>
      {/* <StatusBar style='auto' /> */}
    </SafeAreaView>
  );
}