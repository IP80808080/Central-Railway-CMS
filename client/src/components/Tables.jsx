import { Link } from "react-router-dom";
import { handlePrint } from "./handlePrint";

const TablesDashboard = ({ section }) => {
  const sectionData = {
    Pneumatic: [
      {
        checklistName: "A9",
        items: [{ id: "001", equipment: "A9", uid: "Technician", key: 1 }],
      },
      {
        checklistName: "AFMV",
        items: [{ id: "002", equipment: "AFMV", uid: "Technician", key: 2 }],
      },
      {
        checklistName: "C2",
        items: [{ id: "003", equipment: "C2", uid: "Technician", key: 3 }],
      },
    ],
    Test_Room: [
      {
        checklistName: "REV_CTF",
        items: [{ id: "004", equipment: "Equil22", uid: "kk86568", key: 4 }],
      },
      {
        checklistName: "VCB_SB_AAL",
        items: [{ id: "005", equipment: "Equil22", uid: "kk86568", key: 5 }],
      },
      {
        checklistName: "VCB_SB_AREVA",
        items: [{ id: "006", equipment: "Equil22", uid: "kk86568", key: 6 }],
      },
      {
        checklistName: "VCB_SB_BT",
        items: [{ id: "007", equipment: "Equil22", uid: "kk86568", key: 7 }],
      },
    ],
    Electronics: [
      {
        checklistName: "CHBA",
        items: [{ id: "008", equipment: "CHBA", uid: "Technician", key: 8 }],
      },
      {
        checklistName: "SPM",
        items: [{ id: "009", equipment: "SPM", uid: "Technician", key: 9 }],
      },
    ],
    Traction_Motor: [
      {
        checklistName: "HS_15250A",
        items: [{ id: "010", equipment: "Equil22", uid: "kk86568", key: 10 }],
      },
      {
        checklistName: "TAO_659 ",
        items: [{ id: "011", equipment: "Equil22", uid: "kk86568", key: 11 }],
      },
      {
        checklistName: "TM_6RA6068",
        items: [{ id: "012", equipment: "Equil22", uid: "kk86568", key: 12 }],
      },
    ],
    Static: [
      {
        checklistName: "RSI",
        items: [{ id: "013", equipment: "Equil22", uid: "kk86568", key: 13 }],
      },
      {
        checklistName: "SMGR",
        items: [{ id: "014", equipment: "Equil22", uid: "kk86568", key: 14 }],
      },
    ],
    Auxiliary: [
      {
        checklistName: "MRB",
        items: [{ id: "015", equipment: "MRB", uid: "Technician", key: 15 }],
      },
      {
        checklistName: "OCB",
        items: [{ id: "016", equipment: "OCB", uid: "Technician", key: 16 }],
      },
    ],
    Body_Repair: [
      {
        checklistName: "Mechanical",
        items: [{ id: "017", equipment: "Equil22", uid: "kk86568", key: 17 }],
      },
      {
        checklistName: "Panto",
        items: [{ id: "018", equipment: "Equil22", uid: "kk86568", key: 18 }],
      },
    ],
    Heavy_Repair: [
      {
        checklistName: "WAG-5",
        items: [{ id: "019", equipment: "Equil22", uid: "kk86568", key: 19 }],
      },
      {
        checklistName: "WAP-4",
        items: [{ id: "020", equipment: "Equil22", uid: "kk86568", key: 20 }],
      },
      {
        checklistName: "AOH",
        items: [{ id: "021", equipment: "Equil22", uid: "kk86568", key: 21 }],
      },
      {
        checklistName: "IOH",
        items: [{ id: "022", equipment: "Equil22", uid: "kk86568", key: 22 }],
      },
    ],
  };
  const currentSectionData = sectionData[section] || [];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-center">User</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-center">Checklist</div>
            </th>
            <th>
              <div className="flex justify-center">View</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSectionData.map((checklist) => (
            <tr
              key={checklist.checklistName}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  {checklist.items[0].uid}
                </div>
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  {checklist.items[0].equipment}
                </div>
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  <Link
                    to={`/dashboard/${section}/${checklist.checklistName}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Open
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablesDashboard;
