import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Landing.scss';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: 0
    };
    this.changeShowEmail = this.changeShowEmail.bind(this);
  }
  changeShowEmail() {
    console.log('argh');
    if(this.state.showEmail == 1)
      this.setState({ showEmail: 0 });
    else
      this.setState({ showEmail: 1 });
  }
  render() {
    return (
      <div className={styles.content}>
        <a href='/about' className={styles.about}>About</a>
        <div className={styles.inn}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Daniel Y. Wilby</h1>
            <h3 className={styles.clas}>Programmer and Front-end Web Developer For Hire</h3>
            <div className={styles.nav}>
              <a href='/projects' className={styles.topBut}>Projects</a>
              <a href='/blog' className={styles.topBut}>Blog</a>
            </div>
            <a onClick={this.changeShowEmail} className={styles.bot}>Email Me</a>
          </div>
          <a className={styles.email} style={{opacity: + this.state.showEmail}}>dywilby@gmail.com</a>
        </div>
      </div>
    );
  }
}
