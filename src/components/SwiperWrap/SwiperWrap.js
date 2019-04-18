import React, {Component} from 'react';
import './SwiperWrap.scss';
import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import SwiperHeader from './SwiperHeader/SwiperHeader';
import SwiperSlides from './SwiperSlides/SwiperSlides';
import Auxillary from '../../HOC/Auxillary/Auxillary';

class SwiperWrap  extends Component{

    state = {
        swiper: null,
        swiperHeader: {
            imdbTitle: 'Recommends',
            moviesTitle: 'Movies'
        }
    };

    render() {
        return(
            <div className="wrapper container" id="swiper-block">
                <SwiperHeader swiperHeader={this.state.swiperHeader}/>

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlides/>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        );
    }
}

export default SwiperWrap;