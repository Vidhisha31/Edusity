import React from 'react'
import './title.css'

const title = ({subTitle,titles}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{titles}</h2>
    </div>
  )
}

export default title
