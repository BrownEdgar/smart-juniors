import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Child.scss'

export default function Child({ title, variant, onClick }) {
  return (
    <button className={classNames('btn', {
      [`btn-${variant}`]: true,
      hidden: x === "hidden"
    })}
      onClick={onClick ? (e) => onClick(e) : null}>
      {title}
    </button>
  )
}

Child.defaultProps = {
  title: "Button",
  variant: "default"
}

Child.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'danger', 'success']),
  onClick: PropTypes.func
}