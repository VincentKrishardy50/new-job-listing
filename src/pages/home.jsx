import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [formDisplay, setFormDisplay] = useState("")
  const [buttonDisplay, setButtonDisplay] = useState("hidden");
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("isLogin")){
        setFormDisplay('hidden')
        setButtonDisplay('')
    }
  }, []);

  function validateLogin(e) {
    e.preventDefault();

    const dataLogin = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    
    const header = { "Access-Control-Allow-Origin": "*" };

    axios
      .post(
        "https://teaching-careful-lioness.ngrok-free.app/api/v1/customer/login",
        dataLogin
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("isLogin", true)
        navigate("/jobs")
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

    

  return (
    <>
      <div className="min-h-screen bg-cyan-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
        <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 shadow-xl border p-4">
            Explore Programming <br /> Opportunities Worldwide
          </h1>
          <p className="max-w-prose text-lg md:text-xl lg:text-2xl text-white mb-8 text-center leading-relaxed">
            Unlock a world of programming opportunities with our developer jobs
            landing page. Whether you're a seasoned developer or just starting
            out, discover exciting roles in tech hubs across the globe
          </p>
          <div className="flex justify-center">
            <Link to={"/jobs"}>
              <button className={`bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${buttonDisplay}`}>
                Start Your Journey Now!
              </button>
            </Link>

            <form action="#" className={`${formDisplay}`}>
              <div className="mb-4 text-lg">
                <input
                  id="username"
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="id@email.com"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  id="password"
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={validateLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </main>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" // Replace with your image path
          alt="Developer working on code"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      </div>
    </>
  );
}
