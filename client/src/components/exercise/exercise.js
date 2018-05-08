import React, { Component } from 'react';
import './exercise.css';

function Exercise (props) {
  console.log(props)
  let {title, status, example, index} = props.exercise
    return (
      <div className={status === 0? 'exercise exercise-base' : status === 1? 'exercise exercise-comp': 'exercise exercise-incomp'}>
        <span className="status-section">
          <h3 id="exercise-title">{index +'. ' + title}</h3>
          <div>
            <button className="button-ok">OK</button>
            <button className="button-ko">KO</button>
          </div>
        </span>
        <p>status: {status}</p>
        <pre><code className="javascript">{example}</code></pre>
      </div>
    );
  }

export default Exercise