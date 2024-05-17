import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image'; // Import Image from next/image
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JohnDoe from "/public/images/John Doe.jpg";
import JaneSmith from "/public/images/Jane Smith.jpg";
import AliceJohnson from "/public/images/Alice_Johnson_-_2019_State_of_the_Union_Guests_(40035011983)_(cropped).jpg";
import BobBrown from "/public/images/Bob_Brown_profile.png";
import CharliDavis from "/public/images/Charlie Davis.jpg";

export default function Testimonial() {
  const testimonials = [
    {
      img: JohnDoe, // Remove curly braces around the image imports
      name: 'John Doe',
      comment: 'Highly recommended!!.',
      rating: 5,
    },
    {
      img: JaneSmith,
      name: 'Jane Smith',
      comment: 'Best experience can get!!.',
      rating: 4,
    },
    {
      img: AliceJohnson,
      name: 'Alice Johnson',
      comment: 'Satisfied with the service.',
      rating: 5,
    },
    {
      img: BobBrown,
      name: 'Bob Brown',
      comment: 'Great service and support!',
      rating: 4,
    },
    {
      img: CharliDavis,
      name: 'Charlie Davis',
      comment: 'Highly professional and reliable.',
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
        <div className="testimonial-section mx-auto py-12 sm:py-24 sm:max-w-screen-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Testimonials</h2>
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-box p-6 bg-white shadow-lg rounded-md text-center mx-4" style={{ width: '90%', maxWidth: '300px' }}>
                <div className="mx-auto mb-4 rounded-full overflow-hidden w-24 h-24 object-cover">
                  <Image src={testimonial.img} alt={testimonial.name} width={96} height={96} className="rounded-full" />
                </div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="mt-2">{testimonial.comment}</p>
                <div className="mt-2">
                {Array(testimonial.rating).fill().map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
                {Array(5 - testimonial.rating).fill().map((_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span>
                ))}
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
}
