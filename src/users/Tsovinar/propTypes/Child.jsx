import React from 'react'
import PropTypes from 'prop-types'

export default function Child({count, name, gender, data}) {
  return (
    <div>
        <h2>Count {count}</h2>
        <h3>{name.toUpperCase()}</h3>
        <h3>{gender}</h3>
       <p className='posts'>
          <h2 className='posts posts-header'>Posts</h2>
          <h3 className='posts posts-secondhead' >Title</h3>
        {
          data.map(post => 
          <li className='posts posts-lists' key={post.id}>
             id: {post.id}, userId: {post.userId}, title: {post.title}, body: {post.body}
          </li>)
          
          }
        </p>
        
    </div>
  )
}

Child.defaultProps = {
    name: "Karen"
}

Child.propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string,
    gender: PropTypes.oneOf(["male", "female"]).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.exact({
       userId: PropTypes.number.isRequired, 
       id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string
       
      })
    )
      
    
}