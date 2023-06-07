import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./banner.css"
import sliderImg1 from "../../../assets/banner/cody-scott-milewski-rUngkoF36zM-unsplash.jpg";
import sliderImg2 from "../../../assets/banner/kal-visuals-I-nd-LSCY04-unsplash.jpg";
import sliderImg3 from "../../../assets/banner/nordwood-themes-F3Dde_9thd8-unsplash.jpg";
import sliderImg4 from "../../../assets/banner/pexels-luis-quintero-1787220.jpg";
import sliderImg5 from "../../../assets/banner/jose-p-ortiz-1wNKrHwU44c-unsplash.jpg";
import sliderImg6 from "../../../assets/banner/stacey-koenitz-bduka9UJzrk-unsplash.jpg";

const Banner = () => {
  return (
    <div className="">
      <Carousel className="slide text-center">
        <div>
          <img src={sliderImg6} />
        </div>
        <div>
          <img src={sliderImg5} />
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
      <h1 className="text-7xl text-white ml-20 absolute top-1/3 font-bold font-sans tracking-wide  transform  -translate-y-1/2">
        A Beginner's Guide <br /> to Elevating Your <br /> Photography <br />{" "}
        Skills
      </h1>
    </div>
  );
};

export default Banner;
