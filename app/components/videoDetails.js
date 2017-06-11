import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { closeVideoDetails } from '../actions/videoDetails';

const VideoDetails = (props) => {
  const { dispatch } = props;
  const video = props.data[0];
  const { snippet, statistics } = video;
  return (
    <View style={styles.container}>
      <Button
        onPress={() => dispatch(closeVideoDetails())}
        title="Search"
        color="#841584"
        accessibilityLabel="Close"
      />
      <Text>{statistics.likeCount}</Text>
      <Text>{statistics.dislikeCount}</Text>
      <Text>{statistics.viewCount}</Text>
      <Text>{snippet.title}</Text>
      <Text>{snippet.thumbnails.high.url}</Text>
      <Text>{snippet.description}</Text>
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

const mapStateToProps = (state) => {
  const { videoDetails } = state;
  const {
    data,
  } = videoDetails;

  return {
    data,
  };
};

export default connect(mapStateToProps)(VideoDetails);
