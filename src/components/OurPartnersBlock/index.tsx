import Strip from "./strip"

export default function OurPartnersBlock() {
    return (
        <div className="our-partners-block">
            <h2 className="our-partners-block__title">НАШИ ПАРТНЁРЫ</h2>

            <Strip />

            <div className="our-partners-block__text-wrapper">
                <p>Хотите стать партнёром?<br/>Напишите нам и про ваши акции узнают все.</p>
            </div>

            <button className="our-partners-block__became-partner-but" 
            onClick={() => location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                СТАТЬ ПАРТЕРОМ
            </button>
        </div>
    )
}