import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home/>
    </>
  );
}
