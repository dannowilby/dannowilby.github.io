import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.js';
import Opening from './Opening.js'

import styles from './styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <Header />
        <Opening />
      </div>
    );
  }
}
