import { useField } from 'formik'

import "./CustomField.scss"

export default function CustomField({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className='CustomField'>
      {
        label
          ? <label htmlFor={props.name}>{label}</label>
          : null
      }
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='_error'>{meta.error}</p>
      ) : null}
    </div>
  )
}
