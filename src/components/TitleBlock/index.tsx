// import background from '../../assets/bg.jpg';
import Header from './header';
import Content from './content';

export default function TitleBlock() {
    return (
        <div className="title-block">
            <div className='title-block__background'>
                <Header />
                <Content />
            </div>
            
        </div>
    )
}