import React, {Component} from 'react';
import './SwiperSlides.scss';
import Auxillary from '../../../HOC/Auxillary/Auxillary';
import Swiper from "swiper/dist/js/swiper.min";
import firstImage from '../../../assets/images/MV5BNmMxNTQ4NTUtMWI4MS00ZmIzLWIxZjktYjlhNWE0YjY5MzE3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.png';
import secondImage from '../../../assets/images/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_.png';
import SwiperSlide from './SwiperSlide/SwiperSlide';
import _ from 'lodash';

class SwiperSlides extends Component{

    state = {
        swiper: null,
        slides: [],
        swiperLoaded: false,
        intervalInstance: null,
        isContainerHovered: false
    };

    // swiper initializer
    initSwiper = () => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            watchSlidesVisibility:true,
            allowTouchMove:false,
            lazy:true,
            on: {
                resize: function () {
                    swiper.update();
                }
            },
            pagination: {
                el: '.swiper-pagination',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                360: {
                    allowTouchMove:true,
                }
            }
        });
        this.setState({swiper:swiper});
    };

    // checks if browser IE
    isIE = () => {
        const userAgent = userAgent || navigator.userAgent;
        return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
    };

    // enables interval that does scrolling automatically
    enableAutoScroll = () => {
        clearInterval(this.state.intervalInstance);
        const interval = setInterval(() => {
            if(!this.state.isContainerHovered) {
                const slides = document.getElementsByClassName('swiper-slide');
                let lastSlide = false;
                for(let i = 0; i < slides.length; i++) {
                    if(_.includes(slides[i].className, 'swiper-slide-active') && i === slides.length - 1)
                        lastSlide = true;
                }

                if(lastSlide) this.state.swiper.slideTo(0,500);
                else this.state.swiper.slideNext(500);
            }
        }, 10000);

      this.setState({intervalInstance: interval});
    };

    // clears interval
    disableAutoScroll = () => {
        if(this.state.intervalInstance !== null) {
            clearInterval(this.state.intervalInstance);
            this.setState({intervalInstance: null});
        }
    };

    // scroll handler based on screen size
    autoScrollHandler = () => {
        if(window.innerWidth <= 360)  this.enableAutoScroll();
        else this.disableAutoScroll();
    };

    // checks if number is odd or even
    isOdd = (num) => {
        return ( num & 1 ) ? "odd" : "even";
    };

    // adds commmas to category array
    setCategories = (cats) => {
        let categories = '';

        for(let i = 0; i < cats.length; i++) {
            if(i === 0) categories += cats[i];
            else categories += `, ${cats[i]}`;
        }

        return categories;
    };

    // sets a slides array
    // in real world scenario here would be a GET request
    // slides are hardcoded for example purposes
    createSlides = () => {
        const slides = [];
        let IEClassHandle = null;
        if(this.isIE()) IEClassHandle = 'IEClassHandle';

        const firstSlide = {
            title: 'A Bug\'s Life',
            categories: this.setCategories(['ANIMATION', 'ADVENTURE', 'COMEDY']),
            description: `A misfit ant, looking for "warriors" to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.`,
            rating: '8.1',
            image: firstImage,
            more:'more',
            isIE:IEClassHandle
        };

        const secondSlide = {
            title: `All Quiet on the Western Front`,
            categories: this.setCategories(['DRAMA','WAR']),
            description: `A young soldier faces profound disillusionment in the soul-destroying horror of World War I.`,
            rating: '8.1',
            image: secondImage,
            more: 'more',
            isIE:IEClassHandle
        };

        for(let i = 0; i < 15; i++) {
            if(this.isOdd(i) === 'even')  slides.push(firstSlide);
            else slides.push(secondSlide);
        }

        this.setState({slides:slides}, () => {
                this.initSwiper();
                this.autoScrollHandler();
        });
    };

    componentDidMount() {
        this.createSlides();
        const self = this;

        // disables/enables auto scroll
        window.onresize = function() {
            self.autoScrollHandler();
        };

        // fires when is touching the swiper
        // prevents auto scroll
        document.getElementById('swiper-block').addEventListener('touchstart', function () {
            self.setState({isContainerHovered:true});
        });

        // fires when user has released the swiper
        document.addEventListener('touchend', function () {
            if(self.state.isContainerHovered)
                self.setState({isContainerHovered:false});
        });

    }

    render() {
        return(
            <Auxillary>
                {
                    this.state.slides.map((element,index) => {
                            return <SwiperSlide key={index} slideObject={element}/>
                    })
                }
            </Auxillary>
        );

    }
}

export default SwiperSlides;