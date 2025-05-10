import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-bold mb-5">Login WIth</h3>
      <button className="btn btn-outline w-full btn-secondary mb-2">
        <FcGoogle size={20} />
        Login With Google
      </button>
      <button className="btn btn-outline w-full btn-primary">
        <FaGithub size={20} />
        Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
