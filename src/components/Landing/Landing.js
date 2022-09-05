import React from 'react';
import './Landing.css'
import Cart from '../Cart/Cart';
import LoadData from '../LoadData/LoadData';

const Landing = () => {
    return (
        <div>

            {/* title Section */}
            <div className="title">
                <h1>React Practice Site</h1>
            </div>


            {/* loadData and Cart Section*/}
            <section className='data-cart'>
                <div className="data">
                    <LoadData></LoadData>
                </div>
                
                <div className="cart">
                    <Cart></Cart>
                </div>
            </section>













        </div>
    );
};

export default Landing;