import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.scss'
import Modal from './Modal'

export default function App() {
  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: 'posts',
      params: {
        // _limit: 10,
        _page: page,
      },
    })
      .then((res) => {
        setPosts((prevPosts) => [...prevPosts, ...res.data])
        console.log(posts);
        setPage(page + 1);
      })
      .catch((err) => console.log(err));
  };

  const toggleModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(!isOpen);
  };

  const deletePostByIndex = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    toggleModal(null);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchPosts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // INTERSECTION OBSERVER
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1,
  //   };

  //   const observer = new IntersectionObserver(handleObserver, options);
  //   if (loaderRef.current) {
  //     observer.observe(loaderRef.current);
  //   }

  //   return () => {
  //     if (loaderRef.current) {
  //       observer.unobserve(loaderRef.current);
  //     }
  //   };
  // }, [loaderRef]);

  // const handleObserver = (entries) => {
  //   const target = entries[0];
  //   if (target.isIntersecting) {
  //     fetchPosts();
  //   }
  // };

  return (
    <div className='App'>
      {isOpen && currentIndex !== null
        ? (
          <Modal toggleModal={() => toggleModal(null)} title={"Are you sure?"}>
            <button className="delete" onClick={() => deletePostByIndex(currentIndex)}>Delete</button>
            <button className="cancel" onClick={() => toggleModal(null)}>Cancel</button>
          </Modal>
        ) : null
      }
      <div className='posts'>
        {
          posts.map((post, index) => {
            return (
              <div className="post" key={post.id}>
                <button className="delete-btn" onClick={() => toggleModal(index)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </div>
            )
          })
        }
      </div>
      {/* <div ref={loaderRef} className="loader">
        Loading...
      </div> */}
    </div>
  )
}
