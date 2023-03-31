import React from 'react';
import './BlogItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const BlogItems = (props) => {
    const { authorName, blogTitle, blogCoverImage, authorImage, publishDate, readTime } = props.blog;
       const handleAddToCart=props.handleAddToCart;
    return (
        
        <div className='blog'>
            
            <img className='coverimg' src={blogCoverImage} alt="" />
            <div className='authorinfo'>

                <div className='author'>
                    <img className='img' src={authorImage} alt="" />
                    <div className='author-name'>
                        {authorName}
                        <p>{publishDate}</p>
                    </div>

                </div>

                <div className='readTime'>
                    <p>5 min read <FontAwesomeIcon  onClick={ ()=>handleAddToCart(props.blog)} icon={faBookmark} /></p>
                </div>

            </div>

            <div>
                <h2>{blogTitle}</h2>
                <div className='hash'>
                    <div>
                        <p>#begineers</p>
                    </div>
                    <div>
                        <p>#programming</p>
                    </div>
                </div>

            </div>
          <div className='mark-as-read'>
            <a href="Mark as read">Mark as read</a>
          </div>
        </div>


    );
};



export default BlogItems;
