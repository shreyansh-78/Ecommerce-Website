import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className='home__row'>
          <Product category={"shoes"} />
        </div>
        <div className='home__row'>
        <Product category={"Home appliances"} />

        </div>
        <div className='home__row'>
        <Product category={"apperal"} />

        </div>
        <div className='home__row'>
        <Product category={"electronics"} />
        </div>
      </div>
    </div>
  )
}

export default Home
