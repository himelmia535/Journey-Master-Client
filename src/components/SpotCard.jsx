import { Link } from "react-router-dom";
import "animate.css";
// import Swal from "sweetalert2";

const SpotCard = ({ spot, spots, setspots }) => {
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
    <div className="card glass">
      <figure>
        <img src={photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-green-500">{name}</h2>
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
        <div className="card-actions justify-end">
          {/* Use Link component to navigate to Details page */}
          <Link
            to={`/details/${_id}`} // Link to the Details page with spot ID
            className="btn btn-primary"
          >
            View Details!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
