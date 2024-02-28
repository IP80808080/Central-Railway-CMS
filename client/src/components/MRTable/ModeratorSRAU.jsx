import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ModeratorSRAU() {
  const [ocbForms, setOcbForms] = useState([]);
  const [mrbForms, setMrbForms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    form: "",
    uid: "",
    submittedDate: "",
    revertReason: "",
  });

  useEffect(() => {
    const fetchForms = async () => {
      try {
        // Fetch OCB forms
        const ocbResponse = await axios.get("/daily/ocb");
        setOcbForms(ocbResponse.data);

        // Fetch MRB forms
        const mrbResponse = await axios.get("/daily/mrb");
        setMrbForms(mrbResponse.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchForms();
  }, []);

  const acceptOCBForm = async (formId) => {
    try {
      await axios.put(`/ocb/${formId}/accept`);
      // Reload OCB forms after accepting
      const response = await axios.get("/daily/ocb");
      setOcbForms(response.data);
      toast.success("OCB accepted");
    } catch (error) {
      console.error("Error accepting OCB form:", error);
      toast.error("Error Will accepting OCB");
    }
  };

  const acceptMRBForm = async (formId) => {
    try {
      await axios.put(`/mrb/${formId}/accept`);
      // Reload MRB forms after accepting
      const response = await axios.get("/daily/mrb");
      setMrbForms(response.data);
      toast.success("MRB accepted");
    } catch (error) {
      console.error("Error accepting MRB form:", error);
      toast.error("Error Will accepting MRB");
    }
  };

  const openModal = (form, uid, submittedDate) => {
    setIsOpen(true);
    setFormData({ form, uid, submittedDate, revertReason: "" });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setFormData({ ...formData, revertReason: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      closeModal();
      const { form, uid, submittedDate, revertReason } = formData;
      await axios.post(`/revert/${form}/${uid}/${submittedDate}`, {
        revertReason,
      });
      toast.success("Form reverted successfully");
    } catch (error) {
      console.error("Error reverting form:", error);
      toast.error("Error reverting form. Please try again later.");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              PID
            </th>
            <th scope="col" className="px-6 py-3">
              Equipment Number
            </th>
            <th scope="col" className="px-6 py-3">
              Checklist
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render OCB forms */}
          {ocbForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                OCB
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-ocb-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptOCBForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => openModal("OCB", form.uid, form.submittedDate)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}

          {/* Render MRB forms */}
          {mrbForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                MRB
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-mrb-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptMRBForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => openModal("MRB", form.uid, form.submittedDate)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Enter Revert Reason"
      >
        <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Enter Revert Reason</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md resize-none"
          value={message}
          rows={5}
          onChange={handleChange}
        />
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
}
