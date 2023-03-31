import React, { useEffect, useState } from 'react';
import BlogItems from '../BlogItems/BlogItems';
import "./Blog.css";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const handleAddToCart = (blog)=>{
        console.log(blog);
        }


    return (
        <div>
            <div className='blogs-container'>


                <div className="blog-container">
                    {
                        blogs.map(blog => <BlogItems
                            key={blog.id} 
                            blog={blog}
                            handleAddToCart={handleAddToCart}
                            >

                        </BlogItems>)
                    }

                </div>
                <div className="sideCart-container">
                    <p></p>
                </div>

            </div>

        </div>
    );

};
export default Blog;