import TitleBlock from './TitleBlock/index';
import InfoBlock from './InfoBlock';
import CarouselBlock from './CarouselBlock';
import OurPromotionBlock from './OurPromotionBlock';
import OurPartnersBlock from './OurPartnersBlock';
import Footer from './Footer';

export default function App() {

  return (
   <div className='App'>
     <TitleBlock />
     <InfoBlock />
     <CarouselBlock />
     <OurPromotionBlock />
     <OurPartnersBlock />
     <Footer />
   </div>
  )
}

