import { useContext, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const{email, password} = data
    createUser(email, password)
      .then(result => {
        console.log(result);
      })
  };
  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Your Name" className="input input-bordered" {...register("fullName", { required: true })} />
          {errors.fullName && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input name="imageurl" type="text" placeholder="Image Url" className="input input-bordered" {...register("image")} />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          <span className="absolute mt-14 ml-64" onClick={()=> setShowPassword(!showPassword)}>
	            {
	              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
	            }
            </span>
          {errors.password && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="text-center mt-2">      
	        <p>Already have an account? Please <Link className="text-lime-600 font-bold" to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;