import React, { useEffect, useRef, useState } from 'react'
import { useField } from "formik";
import "./CustomField.scss"

export default function CustomField({ label, ...props }) {
  const [showLabel, setShowLabel] = useState(false)
  const input = useRef(null)
  const [field, meta] = useField(props);

  useEffect(() => {
    if (input.current?.value !== '') {
      !showLabel && setShowLabel(true)
    } else {
      setShowLabel(false)
    }
  }, [input.current?.value])

  return (
    <div className='CustomField'>
      {
        showLabel
          ? <label htmlFor={props.name}>{label}</label>
          : null
      }
      <input className="text-input" ref={input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p>{meta.error}</p>
      ) : null}
    </div>
  )
}
