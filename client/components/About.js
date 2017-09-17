import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Page from './Page.js';

import styles from './styles/About.scss';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      next: 'Next'
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage() {
    if(this.state.page == 1)
      this.setState({ page: 0, next: 'Back' });
    else
      this.setState({ page: 1, next: 'Next' });

    console.log(this.state.page);
  }
  render() {
    return (
      <div className={styles.content}>
        <Link className={styles.back} to='/'>Back</Link>
        <div className={styles.inn}>
          <div className={styles.header}>
            <h1 className={styles.section}>About</h1>
            <a onClick={this.changePage} className={styles.next}>{this.state.next}</a>
          </div>
          <div className={styles.inner}>
            <Page page={this.state.page} />
            <p>You can check out my projects <Link to='/projects'>here</Link> or my blog <a href='http://blog.danno.world'>here</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}
