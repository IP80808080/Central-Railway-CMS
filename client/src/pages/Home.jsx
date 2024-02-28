import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import E1 from "../assets/Emblem.png";
import E2 from "../assets/IRLogo.png";

export default function Home() {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [data, setData] = useState({
    uid: "",
    password: "",
  });

  const signin = async (e) => {
    e.preventDefault();
    const { uid, password } = data;
    try {
      const { data: responseData } = await axios.post("/", { uid, password });
      console.log("Response from server:", data);

      if (responseData.error) {
        toast.error(responseData.error + ", Please check your Credentials");
      } else if (responseData.user) {
        // Retrieve the token from the response
        const token = responseData.token;

        // Store token in local storage
        localStorage.setItem("token", token);
        setData({});
        toast.success("Login Successful, Welcome!");
        // Determine dashboard based on user role
        dispatch({
          type: "LOGIN",
          payload: {
            user: responseData.user,
            section: responseData.user.section,
          },
        });
        dispatch({ type: "LOGIN", payload: { user: responseData.user } });
        switch (responseData.user.role) {
          case "admin":
            navigate("/admin-dashboard");
            break;
          case "moderator":
            navigate("/moderator-dashboard");
            break;
          default:
            navigate("/dashboard");
            break;
        }
      }
    } catch (error) {
      toast.error(error + ", Please check your Credentials");
      console.log(error);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />

      <header className="flex justify-around items-center space-x-4 space-y-3 px-3 bg-white py-2  ">
        <img src={E1} alt="logo" className="w-16 h-16" />
        <h1 className="text-xl lg:text-4xl font-bold">
          ELECTRIC LOCO SHED, BHUSAWAL
        </h1>
        <img src={E2} alt="logo" className="w-16 h-16 " />
      </header>

      <div className="container mx-auto px-4 py-8 grid justify-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 p-6 justify-center">
          <div className="bg-white order-2 lg:order-1  p-4 lg:p-6 rounded-lg shadow-lg max-w-xl">
            <div className="text-xl font-bold mb-4">About</div>
            <div className="scrollable-content max-h-96 overflow-y-auto">
              <h4 className="text-lg font-bold mb-2">History and Activities</h4>
              <p>
                <b>Electric Loco Shed, Bhusawal</b> is one of the pioneer
                maintenance sheds on <strong>Indian Railways</strong>, situated
                on Mumbai - Howrah & Mumbai - Delhi mainline and came into
                existence in the year 1968. The shed was originally designed for
                a holding capacity of 55 engines.
              </p>
            </div>
          </div>

          <div className="bg-white order-1 lg:order-2 p-4 lg:p-6 rounded-lg shadow-lg max-w-xl">
            <div className="text-xl font-bold mb-4">Login</div>
            <form className="space-y-4 md:space-y-6" onSubmit={signin}>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ID"
                  required
                  value={data.uid}
                  onChange={(e) => setData({ ...data, uid: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgotpassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
