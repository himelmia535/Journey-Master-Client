import { Link } from "react-router-dom";
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

//   const handleDelete = (_id) => {
//     console.log(_id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/spot/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your spot has been deleted.", "success");
//               const remaining = spots.filter((cof) => cof._id !== _id);
//               setspots(remaining);
//             }
//           });
//       }
//     });
//   };

  return (
    <div className="card glass">
    <figure><img src={photo} alt="car!"/></figure>
    <div className="card-body">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="md: flex justify-between">
        <h2 className="text-base"><span className="font-medium">Average Cost:</span> {cost} $</h2>
        <h2 className="text-base"><span className="font-medium">Total Visitors Per Year:</span> {totaVisitorsPerYear}</h2>
      </div>
      <div className="md: flex justify-between">
        <h2 className="text-base"><span className="font-medium">Travel Time:</span> {travel_time}</h2>
        <h2 className="text-base"><span className="font-medium">Seasonality:</span> {seasonality}</h2>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">View Details!</button>
      </div>
    </div>
  </div>
  );
};

export default SpotCard;