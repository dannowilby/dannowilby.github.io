import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing.js';
import About from './About.js';
import Projects from './Projects.js';

import styles from './styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className={styles.content}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </main>
    );
  }
}
