// import axios from 'axios'
// import { useState, useEffect} from 'react'
import "./News.scss"

export default function News() {
  // const [news, setNews] = useState([])
  // useEffect(() => {
  //   axios("https://api.curator.io/restricted/feeds/5142c1c2-37df-4c39-a26b-6bdd22fcb0e3/posts?limit=50&hasPoweredBy=true&version=4.0").then(res => setNews(res.data.posts))
  // }, [])
  
  return (
    <div className='Loading'>
      <div className='Loading-header'>
        <h1 className='Loading-header_text'>News page</h1>
      </div>
    </div>
    // <div className='News'>
    //   {
    //     news.length > 0
    //     ? news.map(post => {
    //       return (
    //         <div key={post.id} className='News-item'>
    //           <p>{post.text}</p>
    //         </div>
    //       )
    //     })
    //     : null
        
    //   }
    // </div>
  )
}
