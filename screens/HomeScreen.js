import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInfo from '../components/shared/TextInfo';
import FloatingButton from '../components/shared/FloatingButton';
import NavigationService from '../services/NavigationService';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <FloatingButton onPress={()=> NavigationService.navigate('Camera')} />
        <TextInfo message='Preciona el boton para iniciar la camara' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
