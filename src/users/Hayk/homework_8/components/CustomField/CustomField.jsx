import "./CustomField.scss"
import { useField } from 'formik'

export default function CustomField({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className='CustomField'>
      <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
            <p className='_error'>{meta.error}</p>
        ) : null}
    </div>
  )
}
