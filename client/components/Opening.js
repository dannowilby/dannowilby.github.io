import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Opening.scss';
import SineCanvas from './SineCanvas.js';

export default class Opening extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className={styles.content}>
        <SineCanvas width='1920' height='500' />
      </div>
    );
  }
}
