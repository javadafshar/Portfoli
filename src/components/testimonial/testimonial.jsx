import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";

import Topimg from "../background/topimg";

const testimonialData = [
  {
    name: "Liam Anderson",
    comment:
      "Javad Afshar is an exceptional professional with unmatched dedication and expertise.",
    image:
      "https://srmahour.github.io/custom-testimonial-slider-and-blog/images/5.jpg",
  },
  {
    name: "Benjamin Martinez",
    comment:
      "Working with Javad has been a privilege; his skills have truly impressed me.",
    image:
      "https://srmahour.github.io/custom-testimonial-slider-and-blog/images/4.jpg",
  },
  {
    name: "Emma Brown",
    comment:
      "I highly recommend mr Afshar for their exceptional skills and professional expertise.",
    image:
      "https://srmahour.github.io/custom-testimonial-slider-and-blog/images/3.jpg",
  },
  {
    name: "William Taylor",
    comment:
      "Working with your team  is a pleasure. Their professionalism and skills are remarkable",
    image:
      "https://srmahour.github.io/custom-testimonial-slider-and-blog/images/2.jpg",
  },
  {
    name: "Olivia Carter",
    comment:
      "Afshar's commitment to excellence is evident in every project he takes on.",
    image:
      "https://srmahour.github.io/custom-testimonial-slider-and-blog/images/1.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 slide on screens less than or equal to 768px wide
        },
      },
    ],
  };

  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="heading">
          <h2>Colleague Testimonials</h2>
          <p>
            My colleagues have shared their thoughts about working with me and
            Their feedback has been exceptionally positive,
          </p>
        </div>
        <Slider {...settings} className="testimonials wow fadeInUp">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="author-img">
                <img
                  src={testimonial.image}
                  alt="img"
                  className="img-fluid rounded"
                />
              </div>
              <div className="author-quote">
                <h4>{testimonial.name}</h4>
                <blockquote>
                  {" "}
                  <i className="fa fa-quote-left" /> {testimonial.comment}{" "}
                  <i className="fa fa-quote-right" />{" "}
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Topimg />
    </section>
  );
};

export default TestimonialSlider;
