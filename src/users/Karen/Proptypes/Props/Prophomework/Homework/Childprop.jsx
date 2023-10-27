import PropTypes from 'prop-types'
 
export default function Childprop({data}) {
  return (
    <div>
     <ul>
      {
         data.map((elm,index)=>{
          return(
            <li key={index}>{elm.id}. {elm.name} - {elm.username}</li>
          )
         })
      }
     </ul>
    </div>
  )
}

Childprop.propTypes={
data:PropTypes.arrayOf(
  PropTypes.exact({
   id:PropTypes.number.isRequired,
   name:PropTypes.string.isRequired,
   username:PropTypes.string,
   email:PropTypes.string,
   address:PropTypes.shape({
    street:PropTypes.string,
    suite:PropTypes.string,
    city:PropTypes.string,
    zipcode:PropTypes.string,
    geo:PropTypes.shape({
       lat:PropTypes.string,
       lng:PropTypes.string, 
    }),
  }),
  phone:PropTypes.string,
   website:PropTypes.string.isRequired,
   company:PropTypes.shape({
     name:PropTypes.string,
     catchPhrase:PropTypes.string,
     bs:PropTypes.string,
   })

})
)
}
