import { Carousel } from '@mantine/carousel';
import { FirstSlide } from './components/FirtsSlide';
import { SecondSlide } from './components/SecondSlide';
import { ThirdSlide } from './components/ThirdSlide';
import './FinishPresentation.css'; // Importa el archivo CSS
import { FourthSlide } from './components/FourthSlide';

export function FinishPresentation() {
  return (
    <Carousel
      slideSize="100%"
      controlSize={27}
      draggable={false}
      withIndicators
      className="carousel-container"
    >
      <Carousel.Slide className="carousel-slide">
        <FirstSlide />
      </Carousel.Slide>
      {/* <Carousel.Slide className="carousel-slide">
        <SecondSlide />
      </Carousel.Slide> */}
      <Carousel.Slide className="carousel-slide">
        <ThirdSlide />
      </Carousel.Slide>
      <Carousel.Slide className="carousel-slide">
        <FourthSlide />
      </Carousel.Slide>
    </Carousel>
  );
}