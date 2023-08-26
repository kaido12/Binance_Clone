import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <div className="bg-slate-50 fixed top-0 left-0 w-full h-screen overflow-y-scroll no-scrollbar"></div>
        <div className="fixed w-full px-4 py-6 z-50">
          <div className="max-w-[370px] h-[420px] mx-auto rounded-2xl bg-slate-300/70 text-black">
            <div className="max-w-[320px] mx-auto py-8">
              {/* <img src="./images/logo.png" width={120} alt="logo" className=" mb-4" /> */}
              <h1 className="text-xl text-center font-semibold">Login</h1>
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-slate-50 rounded-xl"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-slate-50 rounded-xl"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-yellow-600 py-3 my-6 rounded-xl font-bold">Login</button>
                <div className="flex justify-between items-center text-sm text-gray-800">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-800">Make an account </span>
                  <Link to="/signup" className="text-yellow-600">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
