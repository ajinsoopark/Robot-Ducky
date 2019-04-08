import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './body2.css'

class Body2 extends Component{

render(){
  return(
    <div className='body2'>
      <h1>Tools To Help You With Your Next Step</h1><br/>
      <div className = 'container'>
        <div className = 'cards'>
          <p>Practice</p><br/>
          <p>"Listen to interview quesitons, and give us your answers. We'll keep track of your answers & progress."</p>
        </div>
        <div className = 'cards'>
          <h2>Feedback</h2><br/>
          <p>Have professionals, and others review and look at your answers. Receive constructive feedback, and more!</p>
        </div>
        <div className = 'cards'>
          <h2>Tips & Tricks</h2><br/>
          <p>Take a look at some tips and tricks that will bring you above the competion. Small details help your big picture.</p>
        </div>
      </div>
    </div>

  )
}
}


export default Body2
