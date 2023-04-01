import React, { useEffect, useState } from 'react';
import BlogItems from '../BlogItems/BlogItems';
import "./Blog.css";
import Cart from '../Cart/Cart';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const [sidebar, setSidebar] = useState([]);

    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const handleReadTime = (blog) => {
        console.log(typeof blog);
        const newTime = parseInt(time) + parseInt(blog);
        setTime(newTime);

    }

    const handleAddToCart = (title) => {
        const newItem = [...sidebar, title];
        setSidebar(newItem);

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
                            handleReadTime={handleReadTime}
                        >
                        </BlogItems>)
                    }
                </div>
                <div className="sideCart-container">

                    <Cart carts={sidebar} time={time}></Cart>

                </div>

            </div>

        </div>
    );

};
export default Blog;