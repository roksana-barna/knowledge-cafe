import React, { useEffect, useState } from 'react';
import "./Blog.css";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <div className='blogs-container'>


                <div className="blog-container">
                    <h2>{blogs.length}</h2>

                </div>
                <div className="sideCart-container">
                    <p>hh</p>
                </div>

            </div>

        </div>
    );

};
export default Blog;