import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import AdminFilter from "../components/Filter/AdminFilter";

export default function Promotion(user) {
  const [users, setUsers] = useState([]);
  const [selectedSection, setSelectedSection] = useState(user.section);
  const [selectedRole, setSelectedRole] = useState(user.role);
  //pagination

  //search
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  //Update
  const handleUpdate = async (uid) => {
    try {
      const response = await axios.put(`/${uid}/rolensection`, {
        role: selectedRole,
        section: selectedSection,
      });
      console.log("User details updated:", response.data);
      toast.success("User details updated");
      // You can add additional logic here, such as showing a success message or updating the UI
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("Error updating user details");
      // You can handle errors here, such as showing an error message to the user
    }
  };

  //Delete
  const handleDelete = async (uid) => {
    try {
      const userId = uid;
      await axios.delete(`/userdelete/${userId}`);
      setUsers(users.filter((user) => user.userId !== userId));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters); // Update selected filters state
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <br></br>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form
                className="flex items-center"
                onChange={(e) => setSearch(e.target.value)}
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search either Username or PID"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 ">
              <span>
                <Link
                  to="/admin-dashboard"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Dashboard
                </Link>
              </span>
              {"           "}

              <div className="flex items-center space-x-3 w-full md:w-auto">
                <AdminFilter onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>
          <br></br>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-3 ">
                    <div className="flex justify-center items-center"></div>
                    Registration Date
                  </th>
                  <th scope="col" className="px-5 py-3">
                    <div className="flex justify-center items-center">
                      Username
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex justify-center items-center">PID</div>
                  </th>
                  <th scope="col" className="px-3 py-3">
                    <div className="flex justify-center items-center">
                      Section
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3">
                    <div className="flex justify-center items-center">Role</div>
                  </th>
                  <th scope="col" className="px-3 py-3 ">
                    <div className="flex justify-center items-center">
                      Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => {
                    const searchLower = search.toLowerCase();
                    const uidString = user.uid.toString();
                    return (
                      searchLower === "" ||
                      user.username.toLowerCase().includes(searchLower) ||
                      (uidString.toLowerCase().includes(searchLower) &&
                        (selectedFilters.admin
                          ? user.role === "admin"
                          : true) &&
                        (selectedFilters.moderator
                          ? user.role === "moderator"
                          : true) &&
                        (selectedFilters.client
                          ? user.role === "client"
                          : true))
                    );
                  })
                  .map((user) => (
                    <tr
                      className="border-b dark:border-gray-700"
                      key={user.uid}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user.createdAt}
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-center items-center">
                          {user.username}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-center items-center">
                          {user.uid}
                        </div>
                      </th>
                      <th className=" px-1 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-center items-center">
                          <Box sx={{ minWidth: 140 }}>
                            <FormControl fullWidth>
                              <InputLabel
                                id="demo-simple-select-label"
                                style={{ color: "rgba(0, 0, 0, 0.97)" }}
                              >
                                {user.section}
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedSection}
                                label="section"
                                onChange={(e) =>
                                  setSelectedSection(e.target.value)
                                }
                              >
                                <MenuItem value={"Pneumatic"}>
                                  Pneumatic
                                </MenuItem>
                                <MenuItem value={"Test_Room"}>
                                  Test Room
                                </MenuItem>
                                <MenuItem value={"Electronics"}>
                                  Electronics
                                </MenuItem>
                                <MenuItem value={"Traction_Motor"}>
                                  Traction Motor
                                </MenuItem>
                                <MenuItem value={"Static"}>Static</MenuItem>
                                <MenuItem value={"Auxiliary"}>
                                  Auxiliary
                                </MenuItem>
                                <MenuItem value={"Body_Repair"}>
                                  Body Repair
                                </MenuItem>
                                <MenuItem value={"Heavy_Repair"}>
                                  Heavy Repair
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                      </th>
                      <th className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-center items-center">
                          <Box sx={{ minWidth: 130 }}>
                            <FormControl fullWidth>
                              <InputLabel
                                id="demo-simple-select-label"
                                style={{ color: "rgba(0, 0, 0, 0.97)" }}
                              >
                                {user.role}
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedRole}
                                label="role"
                                onChange={(e) =>
                                  setSelectedRole(e.target.value)
                                }
                              >
                                <MenuItem value={"admin"}>Admin</MenuItem>
                                <MenuItem value={"moderator"}>
                                  Moderator
                                </MenuItem>
                                <MenuItem value={"client"}>Client</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                      </th>
                      <td className="py-6 flex items-stretch justify-center border-zinc-500">
                        <div className="flex justify-end space-x-3">
                          <button
                            onClick={() => handleUpdate(user.uid)}
                            type="button"
                            className="text-white bg-blue-700
                          hover:bg-blue-800 focus:ring-4 focus:outline-none
                          focus:ring-blue-300 font-medium rounded-lg text-sm
                          w-full sm:w-auto px-3 py-2.5 text-center
                          dark:bg-blue-600 dark:hover:bg-blue-700
                          dark:focus:ring-blue-800"
                          >
                            {" "}
                            Update
                          </button>

                          <button
                            to
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => handleDelete(user.uid)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
