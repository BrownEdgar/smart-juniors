import { Fragment, useEffect,useState } from "react";
import "./App.scss"
import axios from "axios"
import Modal from './Modal';
export default function App() {
  const [posts,Setposts] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(null)
   useEffect(()=>{
     axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then(res => Setposts(res.data))
    .catch(err =>console.log(err))
   },[])


   const toggleModal = () => setisOpen(!isOpen)
   const deletPostByIndex = (index) => {
    Setposts(posts.toSpliced(index,1));
    toggleModal()
   }
   

  return (
    <div className='App'>
       {isOpen
          ?(
            <Modal toggleModal={toggleModal}>
              <h2>Are you sure?</h2>
              <button onClick={()=>deletPostByIndex(currentIndex)}>Yes</button>
              <button onClick={toggleModal}>No</button>
            </Modal>
          ) : null
          }
        <div className="Posts">
          {
          posts.map((elem, index)=>{
            return (
              <Fragment key={elem.id}>
                <div>
                  <button onClick={()=>{
                    toggleModal();
                    setcurrentIndex(index)
                    console.log(index);
                  }}>x</button>
                  <div>
              <p>{elem.id}</p>
              <p>{elem.body}</p>
              <p>{elem.title}</p>
                 </div>
                </div>
              </Fragment>
            )
          })
          }</div>         
    </div>
  )
}
