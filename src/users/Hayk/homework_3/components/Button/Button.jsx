import "./Button.scss"
import classNames from 'classnames'

export default function Button({title, events, theme}) {
  return (
    <button className={classNames("Button", {
      [`Button-${theme}`]: theme,
    })} onClick={events.onClick}>{title}</button>
  )
}

Button.defaultProps = {
  theme: "dark",
}

