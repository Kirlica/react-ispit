import React, { Component } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    return (
      <div className='reposWrap'>
          <span>REPOSITORIES</span>
          <List
          bordered
          dataSource={this.props.repos}
          renderItem={item => (
            <List.Item>
              {item.name}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Details;

Details.propTypes = {
    repos: PropTypes.array
}