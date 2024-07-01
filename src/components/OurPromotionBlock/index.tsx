import phone1 from '../../assets/our-promotion-block/_phone3_1.png';
import phone2 from '../../assets/our-promotion-block/_phone3_2.png';

export default function OurPromotionBlock() {
    return (
        <div className="our-promotion-block">
            <div className='our-promotion-block__content'>
                <div className='our-promotion-block__text-block'>
                    <h2 className='our-promotion-block__title'>
                        НАШИ АКЦИИ
                    </h2>
                    <span className='our-promotion-block__text'>
                        Каждый день в Москве проходят распродажи. В акциях и скидках дня могут принимать участие любые группы 
                        товаров. Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.
                    </span>
                </div>
                <img src={phone1} className='our-promotion-block__phone1'/>
                <img src={phone2} className='our-promotion-block__phone2'/>
            </div>
        </div>
    )
}