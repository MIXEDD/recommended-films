import React from 'react';
import './SwiperSlide.scss';
import Star from '../../../../assets/images/icons/start.svg';
import RightBorder from '../../../../assets/images/icons/border-right.svg';

const swiperSlide = (props) => (
    <div className="swiper-slide">
        <div className="slide-container">
            <div className="top">
                <div className="left-side">
                    <img data-src={props.slideObject.image} alt="slide-img" className="swiper-lazy"/>
                </div>
                <div className="right-side">
                    <h2 className="slide-title">{props.slideObject.title}</h2>
                    <div className="categories-link">
                        <p className="categories">{props.slideObject.categories}</p>
                        <a>{props.slideObject.more}</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="left-side">
                    <img className="rating-img" src={Star} alt="rating"/>
                    <p className="rating">{props.slideObject.rating}</p>
                    <img className="right-border" src={RightBorder} alt="border"/>
                </div>
                <div className="right-side">
                    <p className="description">{props.slideObject.description}</p>
                </div>
            </div>
        </div>
             <div className={["swiper-lazy-preloader swiper-lazy-preloader-white", props.slideObject.isIE].join(' ')}></div>

    </div>
);

export default swiperSlide;