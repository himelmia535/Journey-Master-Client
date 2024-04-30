import { useLoaderData } from "react-router-dom";

const Details = () => {
  const spot = useLoaderData();
  const {
    _id,
    name,
    country,
    cost,
    seasonality,
    travel_time,
    totaVisitorsPerYear,
    username,
    useremail,
    message,
    location,
    photo,
  } = spot;
  return (
    <div className="card glass m-4 md:m-8">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-green-500">
          Spot Name: {name}
        </h2>
        <h2 className="text-xl font-semibold">Country: {country}</h2>
        <div className="">
          <h2 className="text-base">
            <span className="font-medium">Average Cost:</span> {cost}
          </h2>
          <h2 className="text-base">
            <span className="font-medium">Total Visitors Per Year:</span>{" "}
            {totaVisitorsPerYear}
          </h2>
        </div>
        <div className="">
          <h2 className="text-base">
            <span className="font-medium">Travel Time:</span> {travel_time}
          </h2>
          <h2 className="text-base">
            <span className="font-medium">Seasonality:</span> {seasonality}
          </h2>
        </div>
        <p>
          <span className="font-medium">Spot Location:</span> {location}
        </p>
        <p>
          <span className="font-medium">Short Discription about Spot:</span>{" "}
          {message}
        </p>
        <div className="">
          <h2 className="text-base">
            <span className="font-medium">User Name: </span> {username}
          </h2>
          <h2 className="text-base">
            <span className="font-medium">User Email: </span>
            {useremail}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
