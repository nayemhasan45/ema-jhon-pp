import React from 'react';
import img from '../../images/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="text-content">
                <div>
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                </div>
                <div className='btn'>
                    <button>Shop Now</button>
                </div>

            </div>
            <div className="img-content">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;