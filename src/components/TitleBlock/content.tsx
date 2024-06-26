import phone from '../../assets/title-block_content/_phone1.png';
import onlyBestPromotion from '../../assets/title-block_content/only_popup.svg';
import shopGuide from '../../assets/title-block_content/shopguide.svg';
import downloadIOS from '../../assets/title-block_content/download_ios.svg';
import downloadAndroid from '../../assets/title-block_content/download_android.svg';

export default function Content () {
    return (
        <div className="title-block__content">
            <div className="title-block__wrapper-leftside">
                <div>
                    <img src={onlyBestPromotion} />
                </div>
                <span>ТОЛЬКО ЛУЧШИЕ АКЦИИ</span>
                <div>
                    <img src={shopGuide} />
                </div>
                <span>загрузить</span>
                <div className='title-block__wrapper-download-but'>
                    <div>
                        <img src={downloadIOS} />
                    </div>
                    <div>
                        <img src={downloadAndroid} />
                    </div>
                </div>
            </div>
            <img src={phone} />
        </div>
    )
}