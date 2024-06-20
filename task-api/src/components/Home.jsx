import React from 'react';
import dragon from '../assets/images/dragon_1.jpg';
import dragon2 from '../assets/images/dragon_2.jpg';
import dragon3 from '../assets/images/dragon_3.jpg';
import dragon4 from '../assets/images/dragon_4.jpg';
import dragon5 from '../assets/images/dragon_5.jpg';
import dragon6 from '../assets/images/dragon_6.jpg';
import dragon7 from '../assets/images/dragon_7.jpg';
import dragon8 from '../assets/images/dragon_8.jpg';
import dragon9 from '../assets/images/dragon_9.jpg';
import dragon10 from '../assets/images/dragon_10.jpg';
import './home.css';

const images = [
  dragon,
  dragon2,
  dragon3,
  dragon4,
  dragon5,
  dragon6,
  dragon7,
  dragon8,
  dragon9,
  dragon10
];

const Home = ({sidebarToggle}) => {
  return (
    <div className={`banner relative w-full h-screen text-center overflow-hidden z-99 transition-all duration-300`}>
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((image, index) => (
          <div className="item" key={index} style={{ '--position': index + 1 }}>
            <img src={image} alt={`Dragon ${index + 1}`} className='w-full h-full object-cover' draggable='false'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
