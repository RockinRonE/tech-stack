import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <Header headerText="Tech Stack" /> 
          <LibraryList /> 
        </View>
      </Provider>
      
    );
  }
}

