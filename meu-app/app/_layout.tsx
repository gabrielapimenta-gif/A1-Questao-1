import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import {Stack} from 'expo-router';

export default function LayoutGlobal() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 0,
  },
});