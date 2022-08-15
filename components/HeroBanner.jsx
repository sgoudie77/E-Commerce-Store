import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-text'>
        <h2>Pro Rims</h2>
        <p className='banner-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        {console.log(heroBanner)}
      </div>
        
      <div className='hero-banner-image-area'>
        <img src={urlFor(heroBanner.image)} alt="chrome rim" className='hero-banner-image' />
      </div>

      <div className='desc'>
        <h5>Description</h5>
        <p>{heroBanner.desc}</p>
      </div>
    </div>
  )
}

export default HeroBanner