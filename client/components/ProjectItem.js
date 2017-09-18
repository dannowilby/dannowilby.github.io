import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/ProjectItem.scss';

export default class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }
  componentWillReceiveProps(newProps) {
    if(this.props.id == newProps.sid) {
      this.setState({ selected: true });
    }
    else {
      this.setState({ selected: false });
    }
  }
  render() {

    var style = {};
    if(this.state.selected) {
        style = { boxShadow: '0 0 10px #888888' };
    }

    return (
      <div style={style} className={styles.content}>
        <a className={styles.text}>{this.props.title}</a>
      </div>
    );
  }
}

ProjectItem.PropTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  sid: PropTypes.number,
  changeClick: PropTypes.func,
}
