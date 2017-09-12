import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <a>DANNO.WORLD</a>
      </div>
    );
  }
}
