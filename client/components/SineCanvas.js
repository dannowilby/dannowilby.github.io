import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/SineCanvas.scss';

export default class SineCanvas extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var offset = 0;

    setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if(offset >= 1920) {
        offset = 0;
      }

      //first
      {
        var x = 0;
        var y = 0;

        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 20;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(65, 131, 215)";


        var amplitude = 120;
        var frequency = 60;

        while (x < (width + offset)) {
            y = height/2 + amplitude * Math.sin((x - offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      {
        ctx.beginPath();
        ctx.lineWidth = 2;

        x = 0;
        y = 0;

        frequency = 20;

        while (x < (width + .5*offset)) {
            y = height/2 + amplitude * Math.sin((x + .5*offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      {
        ctx.beginPath();
        ctx.lineWidth = 2;

        x = 0;
        y = 0;

        frequency = 40;

        while (x < (width + .75*offset)) {
            y = height/2 + amplitude * Math.sin((x - .75*offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      {
        ctx.beginPath();
        ctx.lineWidth = 2;

        x = 0;
        y = 0;

        frequency = 80;

        while (x < (width + 1.25*offset)) {
            y = height/2 + amplitude * Math.sin((x + 1.25*offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      {
        ctx.beginPath();
        ctx.lineWidth = 2;

        x = 0;
        y = 0;

        frequency = 100;

        while (x < (width + 1.5*offset)) {
            y = height/2 + amplitude * Math.sin((x - 1.5*offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      {
        ctx.beginPath();
        ctx.lineWidth = 2;

        x = 0;
        y = 0;

        frequency = 140;

        while (x < (width + 1.75*offset)) {
            y = height/2 + amplitude * Math.sin((x + 1.75*offset)/ frequency);
            ctx.lineTo(x, y);
            x = x + 1;
        }

        ctx.stroke();
      }

      offset++;

    }, 1);
  }
  render() {
    return (
      <div className={styles.content}>
        <canvas id='canvas' width={this.props.width} height={this.props.height} />
      </div>
    );
  }
}

SineCanvas.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
