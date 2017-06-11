import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Animated, Easing} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { closeVideoDetails } from '../actions/videoDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

const ANIMATION_DURATION = 200;

class VideoDetails extends React.Component {
  constructor() {
    super();

    this._animated = new Animated.Value(0);
    this._animatedPos = new Animated.Value(800);
  }

  componentDidMount() {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      easing: Easing.out(Easing.quad)
    }).start();

    Animated.timing(this._animatedPos, {
      toValue: 0,
      duration: 400,
      easing: Easing.out(Easing.quad)
    }).start();

  }

  render() {
    const { props } = this;
    const { dispatch } = props;
    const video = props.data[0];
    const { snippet, statistics } = video;

    const published = moment(snippet.published).fromNow();
    return (

        <View style={styles.container}>
          <Animated.View style={{opacity: this._animated, transform: [{translateY: this._animatedPos}], flex: 1 ,backgroundColor: '#fff',
          paddingTop: 30,
          paddingRight: 10,
          paddingLeft: 10,}}>
          <View style={styles.closeWrapper}>
            <TouchableOpacity onPress={() => dispatch(closeVideoDetails())}>
              <Icon name="close" size={25} color="#333" />
            </TouchableOpacity>
          </View>
          <View style={styles.image}>
            <Image style={styles.image} source={{uri: snippet.thumbnails.high.url}} resizeMode={'cover'}/>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.title}>{snippet.title}</Text>
            <View style={styles.details}>
              <View style={styles.detailItem}>
                <Icon name="thumbs-o-up" size={20} color="#333" />
                <Text style={styles.detailText}>{statistics.likeCount}</Text>
              </View>
              <View style={styles.detailItemRight}>
                <Icon name="thumbs-o-down" size={20} color="#333" />
                <Text style={styles.detailText}>{statistics.dislikeCount}</Text>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.detailItem}>
                <Text style={styles.bold}>{snippet.channelTitle}</Text>
              </View>
              <View style={styles.detailItemRight}>
                <Text style={styles.bold}>{published}</Text>
              </View>
            </View>
            <Text>{snippet.description}</Text>
          </View>
          </Animated.View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  image: {
    height: 180,
  },
  wrapper: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  closeWrapper: {
    height: 40,
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  detailItem: {
    flex: 0.5,
    flexDirection: 'row'
  },
  detailItemRight: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  detailText: {
    paddingTop: 3,
    paddingLeft: 5,
  },
  bold: {
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 20,
  }
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
