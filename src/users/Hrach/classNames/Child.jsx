import PropTypes from 'prop-types'
import classNames from 'classnames'
import "./Child.scss"

export default function Child({title,variant,  }) {
  return (
    
      <button className={classNames("btn",{
        [`btn-${variant}`]:true})}
        >
      {title}
    </button>
    
  )
} 
Child.defaultProps={
  title: "Button",
  variant: "default"
}
Child.propTypes={
  title: PropTypes.string,
  variant: PropTypes.oneOf(["default","danger","success"])
}