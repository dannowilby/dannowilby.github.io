import React from 'react';
import PropTypes from 'prop-types';

import Landing from './Landing.js';

import styles from './styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <Landing />
      </div>
    );
  }
}
