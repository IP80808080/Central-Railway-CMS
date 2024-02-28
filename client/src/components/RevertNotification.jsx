import { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaExpandArrowsAlt } from "react-icons/fa";
import { getUsername } from "../helper/helper";
import { Toaster, toast } from "react-hot-toast";

export default function RevertNotification(uid) {
  const [revertMessages, setRevertMessages] = useState([]);
  const [revertCount, setRevertCount] = useState(0);
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    const fetchRevertMessages = async () => {
      try {
        const { uid } = await getUsername();

        const response = await axios.get(`/revert/messages/${uid}`);
        setRevertMessages(response.data.revertMessages);

        const responseCount = await axios.get(`/revert/count/${uid}`);
        setRevertCount(responseCount.data.revertCount);
      } catch (error) {
        console.error("Error fetching revert messages:", error);
      }
    };

    fetchRevertMessages();
  }, [uid]);

  const toggleShowMessages = () => {
    setShowMessages(!showMessages);
  };

  const handleDelete = async (revertReason) => {
    try {
      // Send the revertReason to the backend for deletion
      await axios.delete(`/revertdelete`, { data: { revertReason } });
      const { uid } = await getUsername();

      const response = await axios.get(`/revert/messages/${uid}`);
      setRevertMessages(response.data.revertMessages);

      const responseCount = await axios.get(`/revert/count/${uid}`);
      setRevertCount(responseCount.data.revertCount);
      toast.success("Notification Cleared");
      // Update revert count
    } catch (error) {
      console.error("Error deleting revert message:", error);
    }
  };
  return (
    <div className="flex items-center">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />
      <div className="relative">
        <button
          onClick={toggleShowMessages}
          className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 focus:outline-none"
        >
          <FaEnvelope />
          <span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white font-bold px-2 py-1 rounded-full">
            {revertCount}
          </span>
        </button>
        {showMessages && (
          <div className="absolute bottom-full right-0 w-80 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg overflow-y-auto max-h-48">
            <ul>
              {revertMessages.map((message, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-4 py-2 border-b border-gray-200"
                >
                  <div>
                    <span className="font-bold">Form:</span> {message.form}
                    <br />
                    <span className="font-bold">Revert Reason:</span>{" "}
                    {message.revertReason}
                  </div>
                  <button
                    onClick={() => handleDelete(message.revertReason)}
                    className="text-red-600 focus:outline-none"
                  >
                    <FaExpandArrowsAlt />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
