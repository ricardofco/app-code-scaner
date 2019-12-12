import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      <FlashMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
