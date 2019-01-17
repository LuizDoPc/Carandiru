import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchMoradores } from '../actions/AppActions';

class Principal extends Component {
  constructor(props) {
    super(props);

    this.props.fetchMoradores();
  }
  render() {
    return (
      <List>
        <FlatList
          data={this.props.users}
          renderItem={({ item }) => (
            <ListItem
              key={item.uid}
              roundAvatar
              title={`${item.nome}`}
              subtitle={item.periodo}
              avatar={{ uri: item.foto }}
              rightIcon={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-512.png' }}
                />
              }
            />
          )}
        />
      </List>
    );
  }
}

const mapStateToProps = state => ({
  users: state.AppReducer.users
});

export default connect(
  mapStateToProps,
  { fetchMoradores }
)(Principal);
