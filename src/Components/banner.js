import React from 'react';
import '../App.css';
import banImg from '../Images/banner-img.png';

const Banner = ()=>{
    return(
        <header>
            {/* <div className='banner-img'></div> */}
            <img src={banImg} alt=''/>
            <section className="Title">
                <h1>Hire people with the skills you need</h1>
                <p className='title-para'>Find people with profiles that best match your description or post your own skill.</p>
                <form>
                    <input className='search' type='text'/>
                </form>
                <div className='tags'>
                    <ul className='tag-items'>
                        <li>Food</li>
                        <li>Clothes</li>
                        <li>Paintings</li>
                        <li>Crafts</li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Banner;