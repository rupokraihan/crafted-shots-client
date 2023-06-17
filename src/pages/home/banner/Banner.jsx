import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./banner.css"
import sliderImg1 from "../../../assets/banner/jose-p-ortiz-1wNKrHwU44c-unsplash.jpg";
import sliderImg2 from "../../../assets/banner/kal-visuals-I-nd-LSCY04-unsplash.jpg";
import sliderImg3 from "../../../assets/banner/nordwood-themes-F3Dde_9thd8-unsplash.jpg";
import sliderImg4 from "../../../assets/banner/pexels-kaique-rocha-108148.jpg";
import sliderImg5 from "../../../assets/banner/jose-p-ortiz-LZ4dnFdhmVw-unsplash.jpg";
import sliderImg6 from "../../../assets/banner/stacey-koenitz-bduka9UJzrk-unsplash.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <Carousel className="slide text-center">
        <div>
          <img src={sliderImg5} />
        </div>
        <div>
          <img src={sliderImg6} />
        </div>
        <div>
          <img src={sliderImg3} />
        </div>
        <div>
          <img src={sliderImg2} />
        </div>
        <div>
          <img src={sliderImg1} />
        </div>
        <div>
          <img src={sliderImg4} />
        </div>
      </Carousel>
      <div className=" lg:text-white ml-5 lg:ml-20 lg:absolute top-1/3 mt-20    transform  lg:-translate-y-1/2">
        <h1 className="text-4xl lg:text-7xl font-bold tracking-wide font-sans">
          A Beginner's Guide <br /> to Elevating Your <br /> Photography <br />
          Skills
        </h1>
        <p className=" text-lg mt-4 tracking-widest">
          This comprehensive guide takes you through the essential fundamentals{" "}
          <br />
          of photography, providing a solid foundation for beginners. Learn
          about <br /> camera settings, exposure techniques, composition
          principles, and <br /> unleash your creativity through the lens.
        </p>
        <Link to={"classes"}>
          <button className="my-btn mt-4">Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
