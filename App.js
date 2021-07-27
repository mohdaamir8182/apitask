import React from 'react';
import { SafeAreaView,StatusBar,StyleSheet } from 'react-native';
import Home from './src/screens/Home';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  }
})
