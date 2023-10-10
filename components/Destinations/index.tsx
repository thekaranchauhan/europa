import React from 'react';
import SingleDestination from "./SingleDestination";
import destinationsData from "./destinationsData";

const Destinations = () => {
  return (
    <>
      <section
        id="destinations"
        className="bg-primary/[.03] py-10 md:py-20 lg:py-28"
      >
        <div className="container">

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
            {destinationsData.map((destination) => (
              <SingleDestination key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
