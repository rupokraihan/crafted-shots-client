import React from 'react';
import Banner from '../banner/Banner';
import PopularCLass from '../popularClass/PopularCLass';
import PopularInstructors from '../popularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCLass />
      <PopularInstructors/>
    </div>
  );
};

export default Home;