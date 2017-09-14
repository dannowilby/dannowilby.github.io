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
        <div className={styles.inner}>
          <img className={styles.introPic} src='https://scontent-dft4-3.cdninstagram.com/t51.2885-19/21041775_1060608730743356_6688546436847501312_a.jpg' />
          <div className={styles.hookContainer}>
            <h1 className={styles.hook}>Daniel Wilby</h1>
            <h3 className={styles.info}>Programmer and Front-end Web Developer</h3>
          </div>
        </div>
      </div>
    );
  }
}
