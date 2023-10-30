import './App.scss';
import { useState, useEffect } from 'react';
import Container from './Container/Container';
import Modal from './Modal/Modal';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (posts.length > 0 && posts.every((post) => post.droped === true)) {
      setTimeout(() => {
        setIsEmpty(true);
      }, 2000);
    }
  }, [posts]);

  return (
    <div className="App">
      {isOpen ? (
        <Modal toggleModal={toggleModal}>
          <h2 className="Modal-title">Are you Sure?</h2>
          <div className="Modal-control">
            <button
              className="Modal-delete"
              onClick={() => {
                toggleModal();
                setPosts(
                  posts.map((post, index) => {
                    return index === currentIndex ? { ...post, droped: true } : post;
                  })
                );
              }}
            >
              Delete
            </button>
            <button className="Modal-cancel" onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </Modal>
      ) : null}
      <Container
        isEmpty={isEmpty}
        posts={posts}
        setPosts={setPosts}
        toggleModal={toggleModal}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}
