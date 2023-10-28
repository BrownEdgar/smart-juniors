import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Childbtn.scss'

export default function Childbtn({title,variant}) {
  return (
    <div>
      <button className={classNames('btn',{
        [`btn-${variant}`]:true
      })}>
        {title}
        </button>
    </div>
  )
}

Childbtn.defaultProps={
  title:'Button',
  variant:'default'
}

Childbtn.propTypes={
title:PropTypes.string,
variant:PropTypes.oneOf(['default','Send','Open'])
}