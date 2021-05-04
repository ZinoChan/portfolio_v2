import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slide = ({ children }) => {
  return (
    <Carousel autoPlay infiniteLoop showIndicators={false}>
      {children}
    </Carousel>
  );
};

export default Slide;
