import React from "react";
import './Home.css';

import hero_bg from '../../images/hero_pet.png';
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c3 from '../../images/c3.png';
import c4 from '../../images/c4.png';
import c5 from '../../images/c5.png';
import c6 from '../../images/c6.png';

const Home = () => {
    return (
        <div className="container" id="home">
            <div className="row home_content">
                <div className="col-md-6">
                    <h1 className="home_title">For the healthy growth of your pets.</h1>
                    <p className="sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className="mt-2 shop_now_button">Shop Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div className="col-md-6 hero_photo">
                    <img src={hero_bg} className="hero_image img-fluid" alt="Hero Image"></img>
                </div>
            </div>

            <div className="row category">
                <div className="col-md-2 col-4 category_card">
                    <img src={c1} className="img-fluid" alt="c1"></img>
                    <p className="sub_title mt-2">Cat</p>
                </div>
                <div className="col-md-2 col-4 category_card">
                    <img src={c2} className="img-fluid" alt="c2"></img>
                    <p className="sub_title mt-2">Dog</p>
                </div>
                <div className="col-md-2 col-4 category_card">
                    <img src={c3} className="img-fluid" alt="c3"></img>
                    <p className="sub_title mt-2">Bird</p>
                </div>
                <div className="col-md-2 col-4 category_card">
                    <img src={c4} className="img-fluid" alt="c4"></img>
                    <p className="sub_title mt-2">Aquatic</p>
                </div>
                <div className="col-md-2 col-4 category_card">
                    <img src={c5} className="img-fluid" alt="c5"></img>
                    <p className="sub_title mt-2">Reptile</p>
                </div>
                <div className="col-md-2 col-4 category_card">
                    <img src={c6} className="img-fluid" alt="c6"></img>
                    <p className="sub_title mt-2">FarmAnimal</p>
                </div>
            </div>
        </div>
    )
}

export default Home;