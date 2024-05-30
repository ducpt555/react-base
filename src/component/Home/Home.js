import React from 'react';
import videoHomePage from "../../asset/video-homepage.mp4";
const Home = () => {
    return (
        <div className='homepage-contanier'>
            <video autoPlay muted loop>
                <source
                src={videoHomePage}
                type="video/mp4"
                />
            </video>
        <div className='homepage-content'>
            <div><b>Get more data—like </b></div>
        </div>
        </div>

    );
};

export default Home;
