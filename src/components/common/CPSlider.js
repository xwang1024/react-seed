import React, {Component} from 'react'
import { Icon } from 'antd';
import CarouselService from '../service/Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CPSlider extends Component {
    constructor (props) {
        super(props)

    }

    state = {
        images: []
    }

    async componentWillMount () {
        let result = await CarouselService.getImages();
        (result && result.length) && (this.setState({ images: result }));
    }

    componentWillUnmount () {

    }

    render () {
        var settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="cp-slider">
            {
                (!this.state.images.length) ? (
                    <Icon type="loading" />
                ) : (
                    <Slider {...settings}>
                        {this.state.images.map((img) => (
                            <div key={img.id}><a href={img.link_url} ><img src={img.img_url} className="slider-image" /></a></div>
                        ))}
                    </Slider>
                )
            }
                
            </div>
        )
    }
}

export default CPSlider