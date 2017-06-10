import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVideoDetails } from '../actions/videoDetails';

import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  text: {
    fontSize: 16,
    paddingTop: 20,
  },
  image: {
    height: 200,
    flex: 1,
  },
});

const VideoItem = (props) => {
  const selectVideo = () => {
    console.log(props.vId);
  };
  const { dispatch } = props;

  return (
    <TouchableHighlight onPress={()=> dispatch(fetchVideoDetails(props.vId)) }>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.image}} resizeMode={'cover'}/>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}


export default connect()(VideoItem);
