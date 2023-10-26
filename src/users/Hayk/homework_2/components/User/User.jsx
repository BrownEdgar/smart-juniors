import "./User.scss"

export default function User({user}) {
  return (
    <>
        <img className='User-img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
        <h1 className='User-name'>{user.name}</h1>
    </>
  )
}
