
const AddTouristsSpot = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.tourists_spot_name.value;
        const country = form.country_Name.value;
        const cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const photo = form.photo.value;

        const newCoffee = { name, country, cost, seasonality, travel_time, totaVisitorsPerYear, photo }

        console.log(newCoffee);
    }
        
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Tourists Spot</h2>
            <form onSubmit={handleAddCoffee}>
                {/* tourists spot name and country name*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* average cost and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* travel time and totaVisitorsPerYear*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* new */}
                
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddTouristsSpot;