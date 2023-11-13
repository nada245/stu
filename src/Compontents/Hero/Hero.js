import React from 'react'
import './Hero.css'
import CountUp from 'react-countup';
import { HiLocationMarker  } from 'react-icons/hi'
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className='flecColStart hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle' />
                        <h1>Discover<br /> Most Suitable
                            <br /> Property</h1>
                    </div>
                    <div className='flexColStart hero-des'>

                        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker  color="var(--blue)" size={25} />
                        <input type="text"/>
                        <button className='button'>Search</button>
                    </div>
<div className='flexCenter stats'>
    <div className='flexColStart stat'>
        <span>
            <CountUp start={8000} end={9000} duration={4}/>
            <span className='one'>+</span>
            <br/>
            <span className='secondaryText'>Permium Products</span>
        </span>
        </div>

        <div className='flexColStart stat'>
        <span>
            <CountUp end={800} />
            <span className='two'>+</span>
            <br/>
            <span className='secondaryText' >Award Winning</span>
        </span>
        </div>

        <div className='flexColStart stat'>
        <span>
            <CountUp start={800} end={5000} duration={4}/>
            <span className='three'>+</span>
            <br/>
            <span className='secondaryText'>playing</span>
        </span>
    </div>

</div>

                </div>
                <div className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image.png' alt="" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero