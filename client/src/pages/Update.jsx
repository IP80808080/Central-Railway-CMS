import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUsername } from "../helper/helper";

export default function Update() {
  const token = localStorage.getItem("token"); // Retrieve the token from local storage
  console.log("Token in Update page:", token);
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    address: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username, phonenumber, email, address, firstName, lastName } =
          await getUsername();
        setFormData({
          username,
          phonenumber,
          email,
          lastName,
          firstName,
          address,
        });
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { role } = await getUsername();
        setRole(role);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedFields = {};

      if (formData.username !== "") {
        updatedFields.username = formData.username;
      }

      if (formData.phonenumber !== "") {
        updatedFields.phonenumber = formData.phonenumber;
      }

      if (formData.email !== "") {
        updatedFields.email = formData.email;
      }
      if (formData.firstName !== "") {
        updatedFields.firstName = formData.firstName;
      }
      if (formData.lastName !== "") {
        updatedFields.lastName = formData.lastName;
      }
      if (formData.address !== "") {
        updatedFields.address = formData.address;
      }

      const response = await axios.put("/updateUser", updatedFields, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const updatedUser = response.data.data;

      dispatch({
        type: "UPDATE_PROFILE",
        payload: { updatedUser },
      });

      setFormData({
        username: updatedUser.userData.username,
        phonenumber: updatedUser.userData.phonenumber,
        email: updatedUser.userData.email,
        firstName: updatedUser.userData.firstName,
        lastName: updatedUser.userData.lastName,
        address: updatedUser.userData.address,
      });

      toast.success("Profile updated successfully");
      navigate("/dashboard/update");
    } catch (error) {
      console.error(error.response.data);
      toast.error("Failed to update profile");
    }
  };

  let dashboardLink;
  switch (role) {
    case "admin":
      dashboardLink = "/admin-dashboard";
      break;
    case "moderator":
      dashboardLink = "/moderator-dashboard";
      break;
    default:
      dashboardLink = "/dashboard";
      break;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 5500 }}
        />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <form className="max-w-md mx-auto px-5" onSubmit={handleUpdate}>
              <br></br>

              <br></br>
              <br></br>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="username"
                  className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor=""
                    className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor=""
                    className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="phonenumber"
                    id="phonenumber"
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formData.phonenumber}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="phonenumber"
                    className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (+91)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor=""
                    className="peer-focus:font-medium absolute text-base text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap justify-between space-y-2">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>

                <Link
                  to={dashboardLink}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Dashboard
                </Link>
              </div>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
}
