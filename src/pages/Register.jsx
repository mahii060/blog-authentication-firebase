import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
    const { userSignUp, setUser } = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    // Handling show password
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleUserSignUp = (e) => {
        e.preventDefault()
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.name.value;
        // Creating new user
        userSignUp(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            }
            )
            .catch(error => {
                setUser(null)
                console.log(error)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUserSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="example@gmail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered" required />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={handleShowPassword} className="-ml-5 text-lg text-gray-600" /> :
                                        <FaEye onClick={handleShowPassword} className="-ml-5 text-lg text-gray-600" />
                                }
                            </div>
                            <label className="label">
                                <p><span>Already Have an Account?</span></p> <br />
                                <Link to="/login" className="text-blue-700 font-medium link-hover">Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;