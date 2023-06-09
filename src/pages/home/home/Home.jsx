import React from 'react';
import Banner from '../banner/Banner';
import PopularCLass from '../popularClass/PopularCLass';
import PopularInstructors from '../popularInstructors/PopularInstructors';
import Reviews from '../reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCLass />
      <PopularInstructors />
      <Reviews/>
    </div>
  );
};

export default Home;