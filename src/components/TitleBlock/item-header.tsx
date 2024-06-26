import icon_rect from '../../assets/header/icon_rect.svg'

type props = {
    icon: string;
}

export default function ItemHeader({icon} : props) {
    return (
        <div className='header__item-header'>
            <img src={icon_rect} />
            <img src={icon} className='header__icon' />
        </div>
    )
}