import React from 'react';
import '../App.css';


const Footer = ()=>{
    return(
        <div className='footer'>  
            <div className='footer-content'>
                <div className='footer-search'>
                    <div className='search-items'>
                        <h3>search</h3>
                        <a href><li>categories</li></a>
                        <a href><li>projects</li></a>
                        <a href><li>featured</li></a>
                        <a href><li>freelancers</li></a>
                        <a href><li>showcase</li></a>
                        <a href><li>reviews</li></a>
                        <a href><li>catalogs</li></a>
                    </div>
                    <div className='search-items'>
                        <h3>about</h3>
                        <a href><li>about us</li></a>
                        <a href><li>how it works</li></a>
                        <a href><li>careers</li></a>
                        <a href><li>accessibility</li></a>
                        <a href><li>trust and safety</li></a>
                    </div>
                    <div className='search-items'>
                        <h3>Terms</h3>
                        <a href><li>privacy policy</li></a>
                        <a href><li>terms and conditions</li></a>
                        <a href><li>code of conduct</li></a>
                        <a href><li>copyright policy</li></a>
                        <a href><li>payment and cargers</li></a>
                    </div>
                </div>
                <div className='footer-app'>
                    <h3>our application</h3>
                    <img src={require('../Images/google.png')} alt='app' />
                    <img src={require('../Images/app store.png')} alt='app store' className='appstore-image'/>
                </div>
            </div> 
            <div className='footer-bottom'>
                    <div className='social-media'>
                        <a href='facebook.com'><i className="fa fa-facebook"></i></a>
                        <a href='youtube.com'><i className="fa fa-youtube"></i></a>
                        <a href='twitter.com'><i className="fa fa-twitter"></i></a>
                        <a href='instagram.com'><i className="fa fa-instagram"></i></a>
                        <p>find us on social media</p>
                    </div>
                    <p>&copy; 2019 - 2020 Khudi Global Inc</p>
            </div> 

            
        </div>

    );
}

export default Footer;