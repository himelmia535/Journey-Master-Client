import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
// import { toast } from 'react-toastify';

const Register = () => {
  const {createUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const[registerError, setRegisterError] = useState('');
  const[success, setSuccess] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const{email, password} = data
    console.log(data)

    // Password verification
     // reset error and success
     setRegisterError('');
     setSuccess('');

     // password must be up to 6 character
     if(password.length < 6){
         setRegisterError('Password should be at least 6 characters')
         setTimeout(() => {
             setRegisterError('');
         }, 4000);
         return;
     }
     // Password should have at least one uppercase character
     else if(!/[A-Z]/.test(password)){
         setRegisterError('Password should have at least one uppercase character')
         setTimeout(() => {
             setRegisterError('');
         }, 4000);
         return;
     }
     // Password should have at least one lowercase character
     else if(!/[a-z]/.test(password)){
         setRegisterError('Password should have at least one Lowercase character')
         setTimeout(() => {
             setRegisterError('');
         }, 4000);
         return;
     }

    createUser(email, password)
      .then(result => {
        // Show success toast
        setSuccess("Registration successful!");
        console.log(result);
      })
      .catch(error => {
        // Handle registration errors
        setRegisterError("Registration failed. Please try again.");
        console.error(error);
      });
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
      {/* Success and Error message */}
      {
        registerError && <div className="toast toast-center toast-middle bg-red-500 rounded-3xl">
        <div className="alert alert-info">
          <span>{registerError}</span>
        </div>
      </div>
      }
      
      {
        success && <div className="toast toast-center toast-middle bg-blue-500 rounded-3xl">
        <div className="alert alert-info">
          <span>{success}</span>
        </div>
      </div>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;