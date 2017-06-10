import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../components/searchBar';
import Results from '../components/results';
import VideoDetails from '../components/videoDetails';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <SearchBar />
        <Results />
        { this.props.showDetails && <VideoDetails />  }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  const { videoDetails } = state;
  const {
    showDetails,
  } = videoDetails;

  return {
    showDetails,
  };
};

export default connect(mapStateToProps)(HomeScreen);
