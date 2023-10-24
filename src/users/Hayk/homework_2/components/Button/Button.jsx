import classNames from 'classnames'
import "./Button.scss"

export default function Button({title, onClick}) {
  return (
    <button className={classNames("Button")} onClick={onClick}>{title}</button>
  )
}

Button.defaultProps = {
  title: "Example"
}
