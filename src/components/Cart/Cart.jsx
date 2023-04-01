// import React, { useState } from 'react';
import "./Cart.css";

const Cart = (props) => {
   
    const cart=props.cart;
    console.log(cart)
    // let total=0;
    //  for ( const blog of cart){
    //     total= total+blog.blogTitle;

    //  }
    // const [carts,setCarts]=useState([])
    // const newArray=[...carts,blog];
    // setCarts(newArray);
    // console.log(blog)
    // let item=[];
    const items=cart.map(cart=>cart.blogTitle)
    // item.push(blogTitle);

    return (
        <div>
            <p>Bookmarked Blogs:{cart.length}</p>
            <div>
                <div className="blogTitle">
            
                  <div>{items}</div>
             
                </div>
                
            </div>
        
         
        </div>
    );
};

export default Cart;