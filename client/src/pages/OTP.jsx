import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function OTP() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
  });

  const verifyOtp = async (e) => {
    e.preventDefault();
    const { otp } = data;
    try {
      const { data } = await axios.post("/forgotpassword/otp", {
        otp,
      });
      if (data.error) {
        toast.error(data.error);
        toast.success("OTP Not Verified");
      } else {
        setData({});
        toast.success("OTP Verified Successful");
        navigate("/forgotpassword/otp/reset");
      }
    } catch (error) {
      console.log(error);
      toast.success("OTP Not Verified");
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
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter the OTP
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Enter the SMS provided OTP to Change the password
          </p>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={verifyOtp}
          >
            <div>
              <label
                htmlFor="otp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                OTP
              </label>
              <input
                type="otp"
                name="otp"
                id="otp"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="OTP"
                required
                value={data.otp}
                onChange={(e) => setData({ ...data, otp: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
