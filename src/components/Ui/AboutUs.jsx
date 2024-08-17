import React from 'react';
import Slider from 'react-slick';
import '../../Style/AboutUs.css'

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://th.bing.com/th/id/OIP.ypUorgxz96uzhN-FcjOHvQHaE6?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.2a0d6b375c597cf7fd069c23f8d42af7?rik=58PIYy%2biATaupg&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.RA5SQ_9XluymaxlhOtAO_AHaE8?w=1900&h=1267&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.Y0Za5Wm8EWkGk2-k7V1f8gHaE7?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.453638ab15d50c707898c9638278d4dc?rik=l1gUo4j6BY%2bgMQ&pid=ImgRaw&r=0',
    'https://media.istockphoto.com/id/1265609391/photo/young-business-people-on-meeting-in-board-room.jpg?s=612x612&w=0&k=20&c=5r8LvnxyXeNtt3__Uzym4yF8so-D57ikaGhJNd-j6Ho=',
  ];

  return (

    <div>
        {/* <h1>About US</h1> */}
   
    <div className="about-us-section" id="about">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing the best
          services to our customers. Our team is passionate, and we pride
          ourselves on our high standards and attention to detail.
        </p>
      </div>
      <div className="about-us-slider">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
