import {React} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Child.scss'


export default function Child({title,variant,onClick}) {
 
  return (
  <div>
    <button className={classNames('btn',{
      [`btn-${variant}`]:true
    })} onClick={onClick ? ()=> onClick():null}>
      {title}
    </button>
    <button className={classNames('btn',{
      [`btn-${variant='success'}`]:true
    })} onClick={onClick ? () => onClick():null}>
      {title}
    </button>
  </div>
  )
}

Child.defaultProps={
  title:'Button',
  variant:'default',
}

Child.propTypes={
  title:PropTypes.string,
  variant:PropTypes.oneOf(['default','danger','success']),
  onClick:PropTypes.func
}

// {title,variant,onClick,title2,variant2}
{/* <div>
<button className={classNames('btn',{
 [`btn-${variant}`]:true
})} onClick={onClick ? ()=>onClick():null}>
  {title}
</button>
<button className={classNames('btn',{
 [`btn-${variant2}`]:true
})} >
 {title2}
</button>
</div> */}


// Child.defaultProps={
//   title:'Button',
//   variant:'default',
//   onClick:PropTypes.func
// }

// Child.propTypes={
//   title:PropTypes.string,
//   variant:PropTypes.oneOf(['default','danger','success'])
// }

// Child.propTypes={
//   data:PropTypes.arrayOf(
//     PropTypes.shape({ //exact
//       id:PropTypes.number.isRequired,
//       name:PropTypes.string,
//       username:PropTypes.string.isRequired,
//       email:PropTypes.string,
//       address:PropTypes.exact({
//         street:PropTypes.string.isRequired,
//         suite:PropTypes.string.isRequired,
//         city:PropTypes.string.isRequired,
//         zipcode:PropTypes.string.isRequired,
//         geo:PropTypes.exact({
//           lat:PropTypes.string.isRequired,
//           lng:PropTypes.string.isRequired
//         })
//       })
//     })
//   )
// }