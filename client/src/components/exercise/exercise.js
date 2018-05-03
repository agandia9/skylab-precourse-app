import React, { Component } from 'react';
import './exercise.css';

function Exercise (props) {
  console.log(props)
  let {title, status, example, index} = props.exercise
    return (
      <div className={status === 0? 'exercise-base' : status === 1? 'exercise-comp': 'exercise-incomp'}>
        <h3>{index +'. ' + title}</h3>
        <p>status: {status}</p>
        <pre><code>{example}</code></pre>
      </div>
    );
  }

export default Exercise