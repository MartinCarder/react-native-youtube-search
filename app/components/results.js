import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import VideoItem from './videoItem';

const Results = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          return (
            <VideoItem
              title={item.snippet.title}
              image={item.snippet.thumbnails.high.url}
              vId={item.id.videoId}
            />
          )
        }}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  const { searchData } = state;
  const {
    data,
  } = searchData;

  return {
    data,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebeef0',
    flex:1
  },
  item: {
    padding: 10,
    fontSize: 18,
    flex: 1,
  },
})


export default connect(mapStateToProps)(Results);
