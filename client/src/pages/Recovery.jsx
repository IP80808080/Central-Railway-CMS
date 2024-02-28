import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Recovery() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    phonenumber: "",
  });

  const forgotpassword = async (e) => {
    e.preventDefault();
    const { uid, phonenumber } = data;
    try {
      const { data } = await axios.post("/forgotpassword", {
        uid,
        phonenumber,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("OTP!");
        navigate("/forgotpassword/otp");
      }
    } catch (error) {
      console.error("Error during forgot password:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Do not worry! Just type in your ID and phonenumber and we will send
            you a code to reset your password!
          </p>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={forgotpassword}
          >
            <div>
              <label
                htmlFor="uid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your ID
              </label>
              <input
                type="number"
                name="uid"
                id="uid"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your ID"
                required
                value={data.uid}
                onChange={(e) => setData({ ...data, uid: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="pnumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone Number
              </label>
              <input
                type="number"
                name="pnumber"
                id="pnumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Phone Number"
                required
                value={data.phonenumber}
                onChange={(e) =>
                  setData({ ...data, phonenumber: e.target.value })
                }
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                <span style={{ whiteSpace: "pre" }}>
                  {"  "}
                  Do not add the Country code.
                </span>
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    to="#"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
