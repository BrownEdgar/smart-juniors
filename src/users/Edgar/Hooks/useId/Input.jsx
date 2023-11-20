import React, { useId, useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')
  const uniqueId = useId()
  console.log(uniqueId)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <label htmlFor={`email-${uniqueId}`}>Email</label>
      <input
        type='email'
        id={`email-${uniqueId}`}
        value={value}
        onChange={handleChange}
        placeholder='enter email'
      />
    </>
  )
}
