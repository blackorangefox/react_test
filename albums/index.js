import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header text='test' />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
