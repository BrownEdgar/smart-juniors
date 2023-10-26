import "./Posts.scss"
import classNames from 'classnames'

export default function Posts({ posts, hidePosts }) {

    return (
        <div className={classNames('Posts', {
            [`Posts-hidden`]: hidePosts
        })}>
            {
                posts.map(post => {
                    return (
                        <div className='Posts-item' key={post.id}>
                            <h2 className='Posts-item_title'>{post.title}</h2>
                            <p className='Posts-item_body'>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
