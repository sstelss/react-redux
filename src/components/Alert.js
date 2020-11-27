import React from 'react'

export default function Alert({ text }) {

  return(
    <div className="alert alert-warning">
      {text}
    </div>
  )
}