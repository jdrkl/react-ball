import { useState, useRef } from 'react'
import Draggable from 'react-draggable'

import './App.css'

export function Player() {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className='player'
        ref={nodeRef}
      ></div>
    </Draggable>
  );
}

export default function Field() {
  return (
    <div className='field' draggable="false">
      <div className='centre-circle'>
        <div className='centre-dot'></div>
      </div>

      <div className='goal-left'></div>
      <div className='goal-right'></div>

      <div className='penalty-box-left'></div>
      <div className='penalty-box-right'></div>
      
      <div className='half-line'></div>

      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  );
}