import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import SpotCard from '../components/SpotCard';

const AllTouristsSpot = () => {
    const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);
    return (
        <div className='m-20'>
      <h1 className='text-5xl font-bold text-center my-16 text-purple-600'>Total Tourists Spots: {spots.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          spots.map(spot => <SpotCard
            key={spot._id}
            spot={spot}
            spots={spots}
            setspots={setSpots}
          ></SpotCard>)
        }
      </div>
    </div>
    );
};

export default AllTouristsSpot;