import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/ProjectCard.scss';

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.id == 1 || this.props.id == 2 || this.props.id == 3 || this.props.id == 4) {
      return (
        <div className={styles.content}>
        </div>
      );
    }
    else {
      return (
        <div className={styles.generic}>
        </div>
      );
    }
  }
}

ProjectCard.PropTypes = {
  id: PropTypes.number,
}