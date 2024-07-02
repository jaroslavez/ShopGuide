import contact from '../../assets/footer/contact.svg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <span className="footer__shopguide">2016 © SHOPGUIDE</span>
                <div className="footer__info">
                    <a>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                    <a>ПРАВИЛА ПОЛЬЗОВАНИЯ</a>
                </div>
            </div>

            <button className="footer__contact-us-but">
                <img className="footer__contact-us-but-image" src={contact} />
                <span className='footer__contact-us-but-text'>СВЯЗАТЬСЯ С НАМИ</span>
            </button>
        </div>
    )
}