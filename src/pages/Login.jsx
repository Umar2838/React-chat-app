import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-sky-500 font-bold">Hello there 👋🏻</h1>
          <p className="py-6 text-sky-900">
          Join the conversation, meet new people, and make connections in one shared room.
          </p>
          <button onClick={handleLogin} className="btn bg-sky-500 hover:bg-sky-900">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
