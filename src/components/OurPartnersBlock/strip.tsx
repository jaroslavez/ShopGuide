import arrowLeft from '../../assets/our-partners-block/arrow_left.svg'
import arrowRight from '../../assets/our-partners-block/arrow_right.svg';

import logoAdidas from '../../assets/our-partners-block/logo_adidas.png';
import logoCarlo from '../../assets/our-partners-block/logo_carlo.png';
import logoCym from '../../assets/our-partners-block/logo_cym.png';
import logoGum from '../../assets/our-partners-block/logo_gum.png';
import logoNike from '../../assets/our-partners-block/logo_nike.png';
import logoPrada from '../../assets/our-partners-block/logo_prada.png';
import logoZara from '../../assets/our-partners-block/logo_zara.png';

import { useRef, useEffect, useState } from 'react';

export default function Strip() {
    const [showButtons, setShowButtons] = useState(false)
    const windowRef = useRef<HTMLDivElement | null>(null);
    const stripRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleResize() {
            if(windowRef.current && stripRef.current) {
                const windowWidth = windowRef.current?.offsetWidth;

                windowWidth < 1170 ? setShowButtons(true) : setShowButtons(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize, false);
    }, []);

    function handleClickOnLeftButton(e: any) {
        e.stopPropagation();
        if(windowRef.current) {
            windowRef.current.scrollBy({left: -250, behavior: 'smooth'})
        }
    }

    function handleClickOnRightButton(e: any) {
        e.stopPropagation();
        if(windowRef.current) {
            windowRef.current.scrollBy({left: 250, behavior: 'smooth'})
        }
    }

    return (
        <div className="our-partners-block__strip-wrapper">
            <button className='our-partners-block__strip-but our-partners-block__strip-but-left' 
            style={{display: showButtons ? "block" : "none"}}
            onClick={handleClickOnLeftButton}>

                <img className="our-partners-block__strip-but-image" src={arrowLeft} />
                
            </button>

            <div className="our-partners-block__strip-window" ref={windowRef}>
                <div className="our-partners-block__strip" ref={stripRef}>
                    <img className="our-partners-block__strip-image" src={logoPrada} />
                    <img className="our-partners-block__strip-image" src={logoNike} />
                    <img className="our-partners-block__strip-image" src={logoCym} />
                    <img className="our-partners-block__strip-image" src={logoAdidas} />
                    <img className="our-partners-block__strip-image" src={logoGum} />
                    <img className="our-partners-block__strip-image" src={logoZara} />
                    <img className="our-partners-block__strip-image" src={logoCarlo} />
                </div>
            </div>

            <button className='our-partners-block__strip-but our-partners-block__strip-but-right' 
            style={{display: showButtons ? "block" : "none"}}
            onClick={handleClickOnRightButton}>
                <img className="our-partners-block__strip-but-image" src={arrowRight} />
            </button>
        </div>
    )
}