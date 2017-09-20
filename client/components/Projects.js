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
      id: -1,
    };
  }
  click(data, e) {
    this.setState({ id: data });
  }
  render() {

    var obj0 = { title: 'voxel.io',
                 description: 'A small, sample game of an inbrowser version of minecraft made with threejs.',
                 url: 'http://voxel.danno.world' };
    var obj1 = { title: 'Venient',
                 description: 'A new age type of desktop computer that increases business productivity immensely.',
                 url: 'http://venient.danno.world' };
    var obj2 = { title: 'talking.io',
                 description: 'A social media website made around visual and audio communication.',
                 url: 'http://talking.danno.world' };
    var obj3 = { title: 'Euler Solutions',
                 description: 'My set of solutions to the famous Euler Problems.',
                 url: 'http://euler.danno.world' };

    var data = [ obj0,
                 obj1,
                 obj2,
                 obj3 ];

    var title = '';
    var description = '';
    var url = '';

    if(data[this.state.id] != null) {
      title = data[this.state.id].title;
      description = data[this.state.id].description;
      url = data[this.state.id].url;
    }

    return (
      <div className={styles.content}>
        <Link className={styles.back} to='/'>Back</Link>
        <div className={styles.inner}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.projectList}>
            <div onClick={this.click.bind(this, '0')}><ProjectItem title='voxel.io'        id='0' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '1')}><ProjectItem title='Venient'         id='1' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '2')}><ProjectItem title='talking.io'      id='2' sid={this.state.id} /></div>
            <div onClick={this.click.bind(this, '3')}><ProjectItem title='Euler Solutions' id='3' sid={this.state.id} /></div>
          </div>
          <ProjectCard id={this.state.id} title={title} description={description} url={url} />
        </div>
      </div>
    );
  }
}
