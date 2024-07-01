import DownButton from "./down-button";
import InfoItem from "./info-item";

import like from '../../assets/info-block/like.svg';
import geo from '../../assets/info-block/geo.svg';
import sheet from '../../assets/info-block/sheet.svg';
import bell from '../../assets/info-block/bell.svg';


export default function InfoBlock() {
    return (
        <div className="info-block">
            <DownButton />
            <div className="info-block__info-list-wrapper">
                <InfoItem img={content.like.img} title={content.like.title} text={content.like.text}/>
                <InfoItem img={content.geo.img} title={content.geo.title} text={content.geo.text}/>
                <InfoItem img={content.sheet.img} title={content.sheet.title} text={content.sheet.text}/>
                <InfoItem img={content.bell.img} title={content.bell.title} text={content.bell.text}/>
            </div>
        </div>
    )
}

const content = {
    like: {
        img: like,
        title: "ТОЛЬКО ЛУЧШИЕ",
        text: "Всегда актуальные акции у вас в телефоне",
    },
    geo: {
        img: geo,
        title: "ВСЕГДА РЯДОМ",
        text: "Находите ближайшие акции на карте рядом с вами",
    },
    sheet: {
        img: sheet,
        title: "УВЕДОМЛЕНИЯ",
        text: "Находите ближайшие акции на карте рядом с вами",
    },
    bell: {
        img: bell,
        title: "КАТАЛОГ",
        text: "Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой"
    }
}