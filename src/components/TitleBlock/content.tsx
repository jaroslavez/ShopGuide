import phone from '../../assets/title-block_content/_phone1.png';
import onlyBestPromotion from '../../assets/title-block_content/only_popup.svg';
import shopGuide from '../../assets/title-block_content/shopguide.svg';
import downloadIOS from '../../assets/title-block_content/download_ios.svg';
import downloadAndroid from '../../assets/title-block_content/download_android.svg';

export default function Content () {
    return (
        <div className="title-block__content">
            <div className="title-block__wrapper-leftside">
                <div className='only-best-prom-wrapper'>
                    <img src={onlyBestPromotion} />
                    <span className='only-best-prom-wrapper__text'>ТОЛЬКО ЛУЧШИЕ АКЦИИ</span>
                </div>
                
                <div className='title-block__shop-guide'>
                    <img src={shopGuide} />
                </div>
                <span className='title-block__download-text'>загрузить</span>

                <div className='download-but-wrapper'>
                    <div className='download-but-wrapper__download-but'>
                        <img src={downloadIOS} />
                    </div>
                    <div className='download-but-wrapper__download-but'>
                        <img src={downloadAndroid} />
                    </div>
                </div>
            </div>
            <img className="title-block__phone" src={phone} />
        </div>
    )
}