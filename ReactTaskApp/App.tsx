import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';  
import MainRoutes from './src/routes/MainRoutes';




function App(): JSX.Element {

  return (
    <Provider store={store}>
      <MainRoutes/>
    </Provider>
  );
}



export default App;