import { Link } from "react-router-dom";
import "animate.css";
import Swal from "sweetalert2";

const MyCard = ({ spot, spots, setspots }) => {
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

    const handleDelete = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/touristsSpot/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your spot has been deleted.", "success");
                const remaining = spots.filter((cof) => cof._id !== _id);
                setspots(remaining);
              }
            });
        }
      });
    };

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
          <div className="btn-group btn-group-vertical space-y-4">
            <Link
              to={`/details/${_id}`} // Link to the Details page with spot ID
              className="btn btn-primary"
            >
              View Details!
            </Link>
            <Link to={`updatespot/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
                onClick={() => handleDelete(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
