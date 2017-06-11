import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, TextInput } from 'react-native';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: null,
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    const { dispatch } = this.props;
    dispatch(fetchSearch(this.state.searchTerm));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <Icon name="search" size={25} color="#900" />
        </View>
        <TextInput
          style={styles.search}
          onChangeText={(text) => this.setState({searchTerm: text})}
          value={this.state.searchTerm}
          returnKeyType='search'
          returnKeyLabel='search'
          onSubmitEditing={this.onSearch}
          placeholder="Search Youtube"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: 37,
    left: 20,
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 40,
  }
});

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


export default connect()(SearchBar);
