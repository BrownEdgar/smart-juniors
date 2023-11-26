export default function List(props) {

    const deleteById = (index) => {
      props.setData(props.data.toSpliced(index, 1)) 
    }
    
    return (
      <div>
        <ul>
          {
            props.data.map( (elem,index) => <li className={elem.isActive ? 'isActive': ''}  key={index} >
              {elem.name} | {elem.year}
              <span onClick={ () => { deleteById(index) } } className='delete' >&#10005;</span>
            </li> )
          }
        </ul>
        
      </div>
    )
  }
