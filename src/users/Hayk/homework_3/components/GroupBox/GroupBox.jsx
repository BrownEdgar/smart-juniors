import React from 'react'
import "./GroupBox.scss"

export default function GroupBox({children}) {
  return (
    <div className="GroupBox">
      {children}
    </div>
  )
}
