import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Childbtn.scss'

export default function Childbtn({title,variant,title2,variant2,data,setData,}) {

const handleSort=(index)=>{
  return(
    setData(data.toSpliced(index,1))
  )
}


  return (
    <div>
      <button className={classNames('btn',{
        [`btn-${variant}`]:true
      })} >
        {title}
        </button>
        <button className={classNames('btn',{
        [`btn-${variant2}`]:true
      })} onClick={handleSort}>
        {title2}
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
variant:PropTypes.oneOf(['default','Open','Sort'])
}