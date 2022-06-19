import React from 'react'

export default function Teachers({short}) {
  return (
    <div className='teachers'>
      <div className={`container ${short ? "container-use" : ""}`}>
        <div className='content'> 
        <h1>Teachers</h1>
        </div>
      </div>
      </div>
  )
}
