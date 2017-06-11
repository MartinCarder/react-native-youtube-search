import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchVideoDetails } from '../actions/videoDetails';

import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor:'#ffffff',
    marginTop: 10,
  },
  wrapper: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    flex: 1,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
  },
  channel: {
    flex: 0.5,
  },
  text_right: {
    textAlign: 'right'
  }
});

const VideoItem = (props) => {

  const { dispatch } = props;
  const published = moment(props.published).fromNow();

  return (
    <TouchableHighlight onPress={()=> dispatch(fetchVideoDetails(props.vId)) }>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.image}} resizeMode={'cover'}/>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.details}>
            <View style={styles.channel}>
              <Text>{props.channelTitle}</Text>
            </View>
            <View style={styles.channel}>
              <Text style={styles.text_right}>{published}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  channelTitle: PropTypes.string,
  published: PropTypes.string,
}


export default connect()(VideoItem);
