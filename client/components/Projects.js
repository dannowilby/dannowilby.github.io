import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/Projects.scss';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <Link className={styles.back} to='/'>Back</Link>
        <div className={styles.inner}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.inn}>
            <a className={styles.item}>talking.io</a>
            <a className={styles.item}>Euler Solutions</a>
            <a className={styles.item}>voxel.io</a>
            <a className={styles.itemlast}>Venient</a>
          </div>
        </div>
      </div>
    );
  }
}
