import React, { useEffect, useState } from 'react';
import {
  ClockIcon,MapPinIcon,ArrowLongRightIcon
} from "@heroicons/react/24/solid";

const Events = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("https://crafted-shots-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="my-container">
      <h2 className="text-4xl tracking-widest font-bold text-center mb-6">
        Upcoming Events
      </h2>
      <div className="flex gap-3 items-center">
        <h3 className="text-xl tracking-wider text-gray-500 underline underline-offset-4">
          View All Events
        </h3>
        <ArrowLongRightIcon className="h-6" />
      </div>
      <div className="lg:grid gap-2 lg:grid-cols-4 mt-10 ">
        {eventData.map((data) => (
          <div key={data._id}>
            <div className="card card-compact w-full lg:w-80 mb-6 shadow-xl">
              <figure>
                <img src={data.eventImage} />
              </figure>

              <div className="card-body">
                <p className="text-md font-sans font-semibold text-gray-500 tracking-wider">
                  {data.eventDate}
                </p>
                <h2 className="card-title tracking-wider font-sans font-bold">
                  {data.eventName}
                </h2>
                <div className="flex gap-2 items-center tracking-wider text-blue-800 font-semibold">
                  <ClockIcon className="h-6" />
                  <p>{data.eventTime}</p>
                </div>
                <div className="flex gap-2 items-center tracking-wider text-blue-800 font-semibold">
                  <MapPinIcon className="h-6" />
                  <p>{data.eventAddress}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;