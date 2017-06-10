import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { closeVideoDetails } from '../actions/videoDetails';

const VideoDetails = (props) => {
  const { dispatch } = props;
  return (
    <View style={styles.container}>
      <Button
        onPress={() => dispatch(closeVideoDetails())}
        title="Search"
        color="#841584"
        accessibilityLabel="Close"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
  },
});

export default connect()(VideoDetails);
