import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/About.scss';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.page == 1) {
      return (
        <div>
          <p className={styles.descript}>
            I specialise in creating <strong className={styles.highlight}>elegantly minimalistic</strong> and <strong className={styles.highlight}>fluidly functional</strong> websites. I have
            a decade&#39;s worth of experience in javascript and have spent many years creating
            projects with <strong>reactjs</strong>, <strong>redux</strong>, and <strong>other</strong> useful libraries.
          </p>
        </div>
      );
    }
    else {
      return (
        <div>
          <p className={styles.descript}>
            I am a 17-year-old British web developer, writer, and entrepreneur. After several years of teaching myself coding, I now desire to programme websites full-time.
          </p>
        </div>
      );
    }
  }
}

Page.PropTypes = {
  page: PropTypes.number,
}
