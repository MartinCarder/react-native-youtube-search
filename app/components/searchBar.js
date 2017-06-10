import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/'
import { View, StyleSheet, TextInput, Button } from 'react-native';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '!!',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    console.log(this.state.searchTerm);
    const { dispatch } = this.props;
    dispatch(fetchSearch(this.state.searchTerm));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          onChangeText={(text) => this.setState({searchTerm: text})}
          value={this.state.searchTerm}
          returnKeyType='search'
          returnKeyLabel='search'
        />
        <Button
          onPress={this.onSearch}
          title="Search"
          color="#841584"
          accessibilityLabel="Search"
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
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


export default connect()(SearchBar);
