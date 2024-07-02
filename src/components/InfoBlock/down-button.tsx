import arrow_down from '../../assets/info-block/arrow_down.svg'

export default function DownButton() {

    return (
        <div className="info-block__down-button" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})}>
            <div className="info-block__arrow-down-wrapper">
                <img src={arrow_down} />
            </div>
        </div>
    )
}