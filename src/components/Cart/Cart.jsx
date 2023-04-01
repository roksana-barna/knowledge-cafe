import React from 'react';
import "./Cart.css";

const Cart = ({ time, carts }) => {
    return (
        <div className="cart">
            <h6 className="read">Spend Time on Read:{time} min</h6>
            <p className='book'>Bookmarked Blogs:{carts?.length}</p>
            <div>
                <div className="blogTitle">

                    <div className='bookmark'>{
                        carts?.map(cart => <p key={cart} style={{ marginTop: '10px' }}>{cart}</p>)
                    }</div>

                </div>

            </div>


        </div>
    );
};

export default Cart;