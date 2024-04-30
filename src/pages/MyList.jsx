import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import MyCard from '../components/MyCard';

const MyList = () => {
    const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);
    return (
        <div className='m-20'>
      <div className=''>
        {
          spots.map(spot => <MyCard
            key={spot._id}
            spot={spot}
            spots={spots}
            setspots={setSpots}
          ></MyCard>)
        }
      </div>
    </div>
    );
};

export default MyList;