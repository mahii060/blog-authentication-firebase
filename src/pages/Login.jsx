import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    // Handling show password
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered" required />
                                {/* Handling show password */}
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={handleShowPassword} className="-ml-5 text-lg text-gray-600" /> :
                                        <FaEye onClick={handleShowPassword} className="-ml-5 text-lg text-gray-600" />
                                }
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <span>New here?</span>
                                <Link to="/register" className="label-text-alt font-medium link-hover text-base text-blue-700">Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;