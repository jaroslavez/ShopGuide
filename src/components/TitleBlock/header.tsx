import icon_fb from '../../assets/header/icon_fb.svg';
import icon_ig from '../../assets/header/icon_ig.svg';
import icon_tw from '../../assets/header/icon_tw.svg';
import icon_ok from '../../assets/header/icon_ok.svg';
import icon_vk from '../../assets/header/icon_vk.svg';

import ItemHeader from './item-header';

export default function Header(){
    return(
        <header className="header">
            <ItemHeader icon={icon_vk} />
            <ItemHeader icon={icon_tw} />
            <ItemHeader icon={icon_ig} />
            <ItemHeader icon={icon_fb} />
            <ItemHeader icon={icon_ok} />

            <div className="header__bec-partnr-but" onClick={() => location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                <span>СТАТЬ ПАРТНЕРОМ</span>
            </div>
        </header>
    )
}