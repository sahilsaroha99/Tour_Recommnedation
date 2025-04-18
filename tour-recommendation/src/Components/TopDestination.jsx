
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../topdestination.css';

const destinations = [
  { name: 'Goa', image: '/images/goa.jpg' },
  { name: 'Udaipur', image: '/images/jaipur.jpg' },
  { name: 'Manali', image: '/images/manali.jpg' },
  { name: 'Shimla', image: '/images/shimla.jpg' },
];

const TopDestination = () => {
  return (
    <div className="section-container">
      <h2 className="top-destination-heading">Top Destinations</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <img src={dest.image} alt={dest.name} className="slide-card-image" />
              <div className="slide-card-content">
                <h3 className="slide-card-title">{dest.name}</h3>
                <button className="slide-card-button">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopDestination;
