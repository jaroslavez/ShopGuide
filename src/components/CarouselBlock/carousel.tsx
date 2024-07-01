import SliderItem from "./slider-item";
import Text from "./text";

import { Slides } from "../../store/current-slide-slice"; 
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Carousel() {
    const slide = useSelector((state: RootState) => state.currentSlide);
    const offset = useSelector((state: RootState) => state.offset);
    
    return (
        <div className="carousel-block__carousel-wrapper">
            <div className="carousel-block__slider" style={{transform: `translateX(-${offset}px)`}}>
                <SliderItem text={Slides.Favorites} currentSlide={slide}/>
                <SliderItem text={Slides.Actions} currentSlide={slide}/>
                <SliderItem text={Slides.Subscriptions} currentSlide={slide}/>
                <SliderItem text={Slides.Map} currentSlide={slide}/>
                <SliderItem text={Slides.List} currentSlide={slide}/>
            </div>
            <Text slide={slide}/>
        </div>
    )
}

