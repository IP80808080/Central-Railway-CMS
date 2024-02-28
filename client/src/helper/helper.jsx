// helper.jsx
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log("Decoded Token:", decodedToken);
    const username = decodedToken.username;
    const lastName = decodedToken.lastName;
    const firstName = decodedToken.firstName;
    const address = decodedToken.address;
    const role = decodedToken.role;
    const section = decodedToken.section;
    const phonenumber = decodedToken.phonenumber;
    const email = decodedToken.email; // Assuming the username is directly in the decoded token
    const photo = decodedToken.photo;
    const uid = decodedToken.uid;
    if (!username)
      return Promise.reject("Username not found in the decoded token");
    return Promise.resolve(decodedToken, {
      username: username,
      firstName: firstName,
      address: address,
      lastName: lastName,
      role: role,
      section: section,
      phonenumber: phonenumber,
      email: email,
      photo: photo,
      uid: uid,
    });
  } catch (error) {
    return Promise.reject("Error decoding token");
  }
}

/** update user profile function */
export async function updateUser(response) {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.put("/updateUser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}
