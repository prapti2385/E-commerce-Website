import React from 'react'

const Buttons = ({title, handleClick, value}) => {
  return (
    <div>
      <button className="btns" onClick={handleClick} value={value}>{title}</button>
    </div>  
  )
}

export default Buttons