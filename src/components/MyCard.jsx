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
    <div className="h-auto bg-slate-300 rounded-3xl mb-4 p-4">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="avatar">
          <div className="mask mask-squircle w-16 h-16">
            <img src={photo} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-500">
            Spot Name: {name}
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Country: {country}</h2>
        </div>
        <div>
          <h2 className="text-base">
            <span className="font-medium">Seasonality:</span> {seasonality}
          </h2>
        </div>
        <div className="btn-group btn-group-vertical space-y-4 mb-8">
          <Link to={`/details/${_id}`} className="btn btn-primary">
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
  );
};

export default MyCard;
