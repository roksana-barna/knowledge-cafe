import React, { useEffect, useState } from 'react';
import BlogItems from '../BlogItems/BlogItems';
import "./Blog.css";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const[sidebar,setSidebar]=useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const handleAddToCart = (blog)=>{
        // console.log(blog);
        const newItem=[...sidebar,blog];
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
                            >

                        </BlogItems>)
                    }

                </div>
                <div className="sideCart-container">
                    <p>Bookmarked Blogs:{sidebar.length} </p>
            
                </div>

            </div>

        </div>
    );

};
export default Blog;