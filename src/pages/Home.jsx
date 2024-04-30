import { useState } from "react";
import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import Slider from "../components/Slider";
import SpotCard from "../components/SpotCard";
import { useLoaderData } from "react-router-dom";
import About from "../components/About";
import Accordion from "../components/Accordion";

const Home = () => {
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);
  // Slice the spots array to show only 6 items
  const spotsToShow = spots.slice(0, 6);

  return (
    <div className="mx-6">
      <Slider></Slider>

      <div className="text-center m-10">
        <h2 className="animate__animated animate__zoomIn my-14 text-purple-600 font-bold lg:text-5xl">
          Tourists Spots
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {spotsToShow.map((spot) => (
            <SpotCard
              key={spot._id}
              spot={spot}
              spots={spots}
              setspots={setSpots}
            ></SpotCard>
          ))}
        </div>
      </div>

      <div className="lg:m-8">
        <h2 className="animate__animated animate__slideInLeft text-center my-14 text-purple-600 font-bold lg:text-5xl">Fascinating Questions and Answers</h2>
        <Accordion></Accordion>
      </div>

      <div className="m-10">
        <About></About>
      </div>

      <FirebaseProvider></FirebaseProvider>
    </div>
  );
};

export default Home;
