import { useDispatch } from "react-redux"
import { Slides } from "../../store/current-slide-slice";
import { setCurrentSlide } from "../../store/current-slide-slice";
import { useEffect, useRef, MutableRefObject, useState } from "react";
import { setOffset } from "../../store/offsetSlice";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const GAP = 50;

interface props {
    text: Slides;
    currentSlide: Slides;
}

export default function SliderItem({text, currentSlide}: props) {
    const dispatch = useDispatch();
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [marginLeft, setMarginLeft] = useState<null | number>(null);
    const offset = useSelector((state: RootState) => state.offset);
    

    useEffect(() => {

        if(text === currentSlide) {
            const App = document.querySelector(".carousel-block")! as HTMLDivElement;
            const currentEl = ref.current;
            const previousEl = currentEl.previousElementSibling as (HTMLDivElement | null);

            setMarginLeft(calculateMarginLeft(App, currentEl, previousEl, offset));
        }
        else {
            setMarginLeft(null);
        }

       
    }, [ref, currentSlide, text]);


    useEffect(() => {
        if(text === currentSlide && marginLeft !== null) {
            dispatch(setOffset(ref.current?.offsetLeft))
        }
     }, [ref, currentSlide, text, marginLeft]);

    const handleClick = () => {
        dispatch(setCurrentSlide(text));
    }

    return (
        <div className={currentSlide ===  text ? "carousel-block__slider-item_actived" : "carousel-block__slider-item"} 
             onClick={handleClick} ref={ref}
             style={{marginLeft: `${marginLeft === null ? 0 : marginLeft}px`}}>
            {text}
        </div>
    )
} 

function calculateMarginLeft(App: HTMLDivElement, currentEl: HTMLDivElement, previousEl: (HTMLDivElement | null), offset: number): number {
    if(previousEl === null)
        return 0;
    const AppLeft = App.getBoundingClientRect().left;
    const currentElLeft = currentEl.getBoundingClientRect().left;
    const currentElOffsetLeft = currentEl.offsetLeft;
    const previousElWidth = previousEl.offsetWidth;

    return currentElLeft - AppLeft - currentElOffsetLeft - previousElWidth - GAP - 10 + offset;
}