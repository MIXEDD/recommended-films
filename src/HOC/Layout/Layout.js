import React, {Component} from 'react';
import Auxillary from '../../HOC/Auxillary/Auxillary'
import SwiperWrap from '../../components/SwiperWrap/SwiperWrap';


class Layout extends Component {

    render(){
        return(
            <Auxillary>
                <SwiperWrap/>
            </Auxillary>
        );
    }
}

export default Layout;