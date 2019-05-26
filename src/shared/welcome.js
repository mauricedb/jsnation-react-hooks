import React from 'react';
import classes from './welcome.module.css';

const Welcome = () => (
  <div>
    <h1>Welcome to the new React</h1>
    <h2>Amsterdam JSNation Conference 2019</h2>
    <h3>React hooks</h3>
    <h4 className={classes.lineThrough}>Concurrent rendering</h4>
  </div>
);

export default Welcome;
