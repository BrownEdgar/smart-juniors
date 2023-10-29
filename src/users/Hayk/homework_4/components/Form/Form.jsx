import "./Form.scss"

export default function Form({ children, onSubmit }) {
  return (
    <div className='Form'>
      <i className="fa-regular fa-circle-xmark"></i>
      <form onSubmit={onSubmit}>
        {
          children
        }
      </form>
    </div>
  )
}
