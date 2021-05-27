import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/May/GW_Desktop-9-2x._CB669570581_.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Luggage/May/BBS/Scrolls/Mens/GW_PC_BUNK_BBD_mens_3000x1200._CB668335263_.jpg"
            alt="banner"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Vaio/Avaiable/D23370646_IN_PC_Laptops-Vaio-laptops-Hero_3000x1200._CB668418973_.jpg"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
