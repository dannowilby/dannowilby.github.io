import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/Landing.scss';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    };
    this.changeShowEmail = this.changeShowEmail.bind(this);
  }
  changeShowEmail() {
    console.log('argh');
    if(this.state.opacity == 1)
      this.setState({ opacity: 0 });
    else
      this.setState({ opacity: 1 });
  }
  render() {
    return (
      <div className={styles.content}>
        <Link className={styles.about} to='/about'>About</Link>
        <div className={styles.inn}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Daniel Y. Wilby</h1>
            <h3 className={styles.clas}>Programmer and Front-end Web Developer For Hire</h3>
            <div className={styles.nav}>
              <Link className={styles.topBut} to='/projects'>Projects</Link>
              <a href='http://blog.danno.world' className={styles.topBut}>Blog</a>
            </div>
            <a onClick={this.changeShowEmail} className={styles.bot}>Contact Me</a>
          </div>
          <a className={styles.email} style={this.state}>Email: dywilby@gmail.com</a>
          <a className={styles.email} style={this.state}>Github: <a href='https://github.com/dannowilby'>https:&#47;&#47;github.com/dannowilby</a></a>
          <a className={styles.email} style={this.state}>Instagram: <a href='https://www.instagram.com/daniel.wilby/'>daniel.wilby</a></a>
        </div>
      </div>
    );
  }
}
