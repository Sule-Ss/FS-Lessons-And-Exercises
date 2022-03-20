import React from 'react'

const Clock = () => {
  return (
    <div>{new Date().toLocaleTimeString()}</div>
  )
}

export default Clock