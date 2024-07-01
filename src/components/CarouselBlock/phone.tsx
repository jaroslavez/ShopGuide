import { Slides } from "../../store/current-slide-slice"; 
import { setCurrentSlide } from "../../store/current-slide-slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import actions from "../../assets/carousel-block/phone2_actions.jpg";
import subscriptions from "../../assets/carousel-block/phone2_subsribtions.jpg";
import map from "../../assets/carousel-block/phone2_map.jpg";
import list from "../../assets/carousel-block/phone2_list.jpg";
import favorites from "../../assets/carousel-block/phone2_favorites.jpg";
import { useEffect, useState, useRef } from "react";


export default function Phone() {
    const [page, setPage] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    
    const dispatch = useDispatch();
    const slide = useSelector((state: RootState) => state.currentSlide);
    
    const arraySlides = Object.values(Slides);

    useEffect(() => {
        let touchstartX = 0
        let touchendX = 0
    
        function checkDirection() {
            if (touchendX < touchstartX){
                if(page === 4)
                    return;
                dispatch(setCurrentSlide(arraySlides[page + 1]));
            }
            if (touchendX > touchstartX){
                if(page === 0)
                    return;
                dispatch(setCurrentSlide(arraySlides[page - 1]));
            }
        }

        sliderRef.current?.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
        })

        sliderRef.current?.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX
            checkDirection()
        })
    });

    useEffect(() => {
        let isMouseDown = false;
        let [xStart, x] = [0, 0];

        sliderRef.current?.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            xStart = e.offsetX;
        });

        sliderRef.current?.addEventListener('mousemove', (e) => {
            if(isMouseDown){
                x = e.offsetX;
                check(xStart, x);
            }
        });

        sliderRef.current?.addEventListener('mouseup', () => {
            isMouseDown = false;
            [xStart, x] = [0, 0]
        });

        function check(xStart: number, x: number): void {
            if(x > xStart + 100 && page !== 0) {
                dispatch(setCurrentSlide(arraySlides[page - 1]));
            }
            else if(x < xStart - 100 && page !== 4){
                dispatch(setCurrentSlide(arraySlides[page + 1]));
            }
            else{
                return;
            }

            isMouseDown = false;
            [xStart, x] = [0, 0];
        }
    })

    useEffect(() => {
        setPage(arraySlides.indexOf(slide));
    }, [slide])

    return (
        <div className="phone">
            <div className="phone__slider" ref={sliderRef}>
                <div className="phone__strip" style={{transform: `translateX(-${page * 243}px)`}}>
                    <img src={favorites} />
                    <img src={actions} />
                    <img src={subscriptions} />
                    <img src={map} />
                    <img src={list} />
                </div>
                
            </div>
        </div>
    )
}