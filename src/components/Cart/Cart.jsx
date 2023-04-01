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
//     const readsTime=()=>{
//         let total=0;
//         for(const blog of cart){
//   total=total+blog.readTime;
//         }

//     }

    return (
        <div className="cart">
            <h4 className="read">Read Time: min</h4>
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