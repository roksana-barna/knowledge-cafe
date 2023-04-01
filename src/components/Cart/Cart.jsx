import React from 'react';
import "./Cart.css";

const Cart = ({ time, carts }) => {
    return (
        <div className="cart">
            <h4 className="read">Read Time:{time} min</h4>
            <p>Bookmarked Blogs:{carts?.length}</p>
            <div>
                <div className="blogTitle">

                    <div>{
                        carts?.map(cart => <p key={cart} style={{ marginTop: '10px' }}>{cart}</p>)
                    }</div>

                </div>

            </div>


        </div>
    );
};

export default Cart;