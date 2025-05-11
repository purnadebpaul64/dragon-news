import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-10">
          <h2 className="text-xl text-center font-semibold">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name  */}
            <label className="label font-bold text-accent">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {/* photo url  */}
            <label className="label font-bold text-accent">Photo Url</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="photo url"
            />
            {/* email  */}
            <label className="label font-bold text-accent">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password  */}
            <label className="label font-bold text-accent">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center pt-5 text-accent">
              Do You Already Have An Account ?
              <Link className="text-secondary font-bold" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
