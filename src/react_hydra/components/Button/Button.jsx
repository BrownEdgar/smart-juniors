import classNames from "classnames"
import "./Button.scss"

export default function Button({ title, btnStyle }) {
  return (
    <button className={classNames('Button', {
      [`Button-${btnStyle?.name}`]: btnStyle?.status
    })}>{title}</button>
  )
}
