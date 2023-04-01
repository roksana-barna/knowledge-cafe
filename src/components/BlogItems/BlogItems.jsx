import React from 'react';
import './BlogItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
const BlogItems = (props) => {
    const { authorName, blogTitle, blogCoverImage, authorImage, publishDate, readTime } = props.blog;
    const handleAddToCart = props.handleAddToCart;
    const handleReadTime = props.handleReadTime;
    const handleToast = () => {
        toast("Wow so easy!");
    }
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
                    <p>{readTime} min read <FontAwesomeIcon onClick={() => { handleAddToCart(blogTitle); handleToast() }} icon={faBookmark} /></p>
            
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
                <button onClick={() => handleReadTime(readTime)} href='mark-as-read' >  Mark as read</button>
            </div>
        </div>
    );
};



export default BlogItems;
