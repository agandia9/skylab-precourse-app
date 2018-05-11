import React, { Component } from 'react';
import './exercise.css';

function Exercise (props) {
  let  {statement, example, index} = props.exercise.exercise
  let {status} = props.exercise
    return (
      <div className={status === 0? 'exercise exercise-base' : status === 1? 'exercise exercise-comp': 'exercise exercise-incomp'}>
        <span className="status-section">
          <h3 id="exercise-statement">{index.toUpperCase() +') ' + statement}</h3>
          <div>
            <button className="button-ok">✓</button>
            <button className="button-ko">X</button>
          </div>
        </span>
        <pre><code>{example}</code></pre>
      </div>
    );
  }

export default Exercise