import React, { useEffect } from 'react';
import './Client.css';
import img from '../../../assets/Review_Slider_Img/pic1.jpg';
import img1 from '../../../assets/Review_Slider_Img/pic2.jpg';
import img2 from '../../../assets/Review_Slider_Img/pic3.jpg';
import img3 from '../../../assets/Review_Slider_Img/pic4.jpg';
import img4 from '../../../assets/Review_Slider_Img/up-arrow.png';
import img5 from '../../../assets/Review_Slider_Img/down-arrow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
    useEffect(() => {
        function slide() {
            const slidee = document.getElementById('slide');
            const upArrowe = document.getElementById('upArrow');
            const downArrowe = document.getElementById('downArrow');
            let x = 0;

            upArrowe.onclick = function () {
                if (x > -900) {
                    x -= 300;
                    slidee.style.top = x + "px";
                }
            }
            downArrowe.onclick = function () {
                if (x < 0) {
                    x += 300;
                    slidee.style.top = x + "px";
                }
            }
        }

        slide();
    }, []);
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-right" className='client-hero py-16 mt-[75px]'>
            <div className="testimonial-heading">
                <h3 className='text-[15px] text-[#ff000a] text-center font-bold uppercase top-heading'>
                    <span>testimonial</span>
                </h3>
                <h1 className="heading text-[15px] text-center font-semibold uppercase">What our client say</h1>
            </div>
            <div className="review-box mt-16">
                <div id="slide">
                    <div className="review-card">
                        <div className="profile">
                            <img src={img} alt="" />
                            <div>
                                <h3>Riley Olie</h3>
                                <p>Busketball</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam molestias soluta voluptatibus quo, aliquam voluptas ipsa optio quod, harum possimus maiores similique, vel deleniti alias excepturi impedit ipsam. Autem.</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img1} alt="" />
                            <div>
                                <h3>Jhonson</h3>
                                <p>Cricketer</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam molestias soluta voluptatibus quo, aliquam voluptas ipsa optio quod, harum possimus maiores similique, vel deleniti alias excepturi impedit ipsam. Autem.</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img2} alt="" />
                            <div>
                                <h3>Ananta</h3>
                                <p>Footballer</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam molestias soluta voluptatibus quo, aliquam voluptas ipsa optio quod, harum possimus maiores similique, vel deleniti alias excepturi impedit ipsam. Autem.</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img3} alt="" />
                            <div>
                                <h3>Fernandez</h3>
                                <p>Football</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam molestias soluta voluptatibus quo, aliquam voluptas ipsa optio quod, harum possimus maiores similique, vel deleniti alias excepturi impedit ipsam. Autem.</p>
                    </div>
                </div>
                <div className='sidebar'>
                    <img src={img4} alt="" id="upArrow" />
                    <img src={img5} alt="" id="downArrow" />
                </div>
            </div>
        </div>
    );
};

export default Client;