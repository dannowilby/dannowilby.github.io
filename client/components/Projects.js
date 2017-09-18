import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProjectItem from './ProjectItem.js';
import ProjectCard from './ProjectCard.js';

import styles from './styles/Projects.scss';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }
  click(data, e) {
    this.setState({ id: data });
  }
  render() {
    return (
      <div className={styles.content}>
        <Link className={styles.back} to='/'>Back</Link>
        <div className={styles.inner}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.projectList}>
            <div onClick={this.click.bind(this, '1')}><ProjectItem title='voxel.io'        id='1' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '2')}><ProjectItem title='Venient'         id='2' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '3')}><ProjectItem title='talking.io'      id='3' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '4')}><ProjectItem title='Euler Solutions' id='4' sid={this.state.id} /></div>
          </div>
          <ProjectCard id={this.state.id} />
        </div>
      </div>
    );
  }
}
