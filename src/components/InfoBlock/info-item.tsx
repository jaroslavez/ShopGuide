type props = {
    img : string;
    title: string;
    text: string
}

export default function InfoItem({img, title, text}: props) {
    return (
        <div className="info-block__info-wrapper">
            <div className="info-block__img">
                <img src={img} />
            </div>
            <h2 className="info-block__title">
                {title}
            </h2>
            <span className="info-block__text">
                {text}
            </span>
        </div>
    )
}