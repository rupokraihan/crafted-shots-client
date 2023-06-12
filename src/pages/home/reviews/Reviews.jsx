import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://crafted-shots-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data))
      .catch((error) => console.error(error));
  }, []);

  const swiperResponsiveConfig = {
    520: {
      slidesPerView: 1, // For mobile devices
    },
    968: {
      slidesPerView: 4, // For desktop and larger screens
    },
  };

  return (
    <div className="my-container">
      <h2 className="text-4xl tracking-widest font-bold text-center mb-6">
        Student Success Stories
      </h2>
      <p className="tracking-widest font-medium text-center mb-10 max-w-4xl mx-auto">
        Discover the incredible journeys and achievements of our photography
        students. These stories showcase the impact of our courses, the
        dedication of our instructors, and the immense growth our students have
        achieved. Read on to be inspired by their progress, learn from their
        insights, and witness the power of photography education in shaping
        their success."
      </p>

      <Swiper
        breakpoints={swiperResponsiveConfig}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data._id}>
            <div>
              <div className="  h-96 bg-gray-500 rounded-xl  shadow-white text-white">
                <div className="py-4 px-6">
                  <div className="flex gap-6 mb-4 items-center">
                    <div>
                      <img src={data.image} alt="" />
                    </div>

                    <div>
                      <h2 className="card-title">{data.name}</h2>
                      <p className="mt-2 text-white text-medium">
                        {data.address}
                      </p>

                      <p className="mt-1">{data.date}</p>
                    </div>
                  </div>

                  <div className=" mt-4 relative ">
                    <p>{data.reviewText}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
