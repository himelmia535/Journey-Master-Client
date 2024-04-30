import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import MyCard from '../components/MyCard';
import useAuth from '../hooks/useAuth';

const MyList = () => {
    const {user} = useAuth();

    const loadedSpot = useLoaderData();
    const [spots, setSpots] = useState(loadedSpot);
    
    const useremail = user.email;
    const userSpots = spots.filter(spot => spot.useremail === useremail);
    // console.log(useremail);
    // console.log(userSpots);
    // console.log(spots);
    console.log(loadedSpot);
    

    return (
        <div className='m-20'>
      <div className=''>
        {
          userSpots.map(spot => <MyCard
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