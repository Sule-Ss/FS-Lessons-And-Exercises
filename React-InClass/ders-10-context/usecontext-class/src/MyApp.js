import React from 'react'

const MyApp = (props) => {
  return (
    <div>
        {props.children}
        {props.value}
    </div>
  )
}

export default MyApp