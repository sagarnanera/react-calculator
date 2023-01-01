import React from 'react'
import Displayrow from './Displayrow';

const Display = (props) => {

  const { expresion, answer } = props;
  return (
    <div className='display'>
      <Displayrow value={answer} />
      <Displayrow value={expresion} />
    </div>
  )
}

export default Display
