import React from 'react';
import Banner from '../banner/Banner';
import PopularCLass from '../classes/popularClass/PopularCLass';
import PopularInstructors from '../instructors/popularInstructors/PopularInstructors';

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