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
            <div className='description'>
                <h6>description</h6>
                <p>props and state</p>
                <h5>props</h5>
                <p>props is kind of storage .where we can store the value of attributes of a tag.props are used to store data that can be accessed by the children of a react component.props in react are inputs that you can pass into components.</p>
                <h5>state</h5>
                <p>The state is a built-in React object that is used to contain data or information about the component. When state changes, the component responds by re-rendering.</p>
                <h5>difference between state and props</h5>
                <p>State is owned locally and the component itself updates it. Props are owned and read-only by a parent.Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to react.</p>
                <h5>how to work use effect</h5>
                <h6>synchronize a component with an external system.The useEffect Hook allows us to perform side effects in our components</h6>
                <h5>what is use of useEffect without data load?</h5>
                <li>once, when component mounts</li>
                <li>on every component render
                </li>
                <li>on every component render with a condition
                </li>
                <li>when component unmounts
                </li>
                <h5>how to react work?</h5>
                 <p> React is a tool for building UI components..React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.React uses the key to match the virtual DOM node with the actual DOM node.React internally creates, updates, and destroys instances to figure out the DOM elements tree that needs to be rendered to the browser </p>
            </div>




        </div>

    );
};

export default Blog;