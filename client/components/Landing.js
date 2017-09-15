import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Landing.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <a href='/about' className={styles.about}>About</a>
        <div className={styles.inner}>
          <h1 className={styles.title}>Daniel Y. Wilby</h1>
          <h3 className={styles.clas}>Programmer and Front-end Web Developer For Hire</h3>
          <div className={styles.nav}>
            <a href='/projects' className={styles.topBut}>Projects</a>
            <a href='/blog' className={styles.topBut}>Blog</a>
          </div>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className={styles.bot}>Email Me</a>
        </div>
      </div>
    );
  }
}
