import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/stores/';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/homeScreen';
// import VideoScreen from './app/screens/videoScreen';

const store = configureStore();

export default class App extends React.Component {
  render() {
    const App = StackNavigator({
      Home: { screen: HomeScreen }
    },
    {
      initialRouteName: 'Home',
    });

    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
