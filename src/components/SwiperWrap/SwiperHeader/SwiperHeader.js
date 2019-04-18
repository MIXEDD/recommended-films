import React from 'react';
import './SwiperHeader.scss';
import Imdb from '../../../assets/images/icons/IMDb_icon_.svg';
import Movies from '../../../assets/images/icons/Movies-icon.svg';

const swiperHeader = (props) => (
    <div className="swiper-header">
        <div className="header-block">
            <img id="imdb" src={Imdb} alt="imdb"/>
            <p className="header-title">{props.swiperHeader.imdbTitle}</p>
        </div>
        <div className="header-block">
            <img id="movies" src={Movies} alt="movies"/>
            <p className="header-title">{props.swiperHeader.moviesTitle}</p>
        </div>
    </div>
);

export default swiperHeader;