import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'react-slick';
import userSkills from '../user.json';
import img from '../Images/tailor-coat.jpg';

import '../App.css';

const SkillSlider =()=>{

    let settings={
        dots: true,
        arrows:         true,
        autoplay:       false,
        autoplaySpeed:  4500,
        infinite:       true,
        slidesToShow:   4,
        slidesToScroll: 3,
        className: 'Slide',

        adaptiveHeight: true,
        focusOnSelect: true
    }
    return(
        <div>
            <section>
                <Slider {...settings}>
                    {userSkills.map((skill)=>{
                        return <div className='slider-area slider'>
                            <div className='slide-content' >
                            <div className='sample-img'><img src={`../Images/${skill.image}`} alt='smth here' background= 'url(../Images/tailor-coat.jpg)'/></div>
                            <h2 >{skill.skillTitle}</h2>
                            <div>
                                <div className='stars'></div>
                                <div>
                                    <p>starting at</p>
                                     <p className='price'>{skill.price}</p>
                                </div>
                            </div>
                        
                            </div>
                    </div>
                    })}

                </Slider>
                </section>
        </div>
    )
}

export default SkillSlider;