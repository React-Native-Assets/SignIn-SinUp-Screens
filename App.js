import React from 'react';
import { StyleSheet,SafeAreaView} from 'react-native';

import Navigator from './Navigator/Navigator';
export default function App() 
{
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
