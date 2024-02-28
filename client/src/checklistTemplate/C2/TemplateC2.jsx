import { useEffect, useState } from "react";
import axios from "axios";
import "./c2index.css";

export default function TemplateOCB() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getForm/C2");
        console.log(response.data);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <br></br>
      <div className="flex flex-col justify-center container overflow-x">
        <div className="text-center">
          <header>
            <h1 className="custom-font-size">C2 Relay Valve Record Register</h1>
          </header>
        </div>

        <div className="container mt-5 f-flex justify-content-center">
          <div className="container mt-5">
            <div className="grid grid-cols-3 gap-4 px-8">
              <div className="col-span-3 sm:col-span-1">
                <label htmlFor="BSL" className="col-form-label custom-label">
                  <span>BSL PN NO. :- {data.bsl}</span>
                </label>
                <input
                  id="BSL"
                  type="text"
                  className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                  placeholder="BSL"
                  aria-label="BSL"
                ></input>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <label htmlFor="Sr" className="col-form-label custom-label">
                  <span>Sr. No. :- {data.equipmentNumber}</span>
                </label>
                <input
                  id="Sr"
                  type="text"
                  className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                  placeholder="Sr. No"
                  aria-label="Sr"
                ></input>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <label htmlFor="Make" className="col-form-label custom-label">
                  <span>Make :- {data.make}</span>
                </label>
                <input
                  id="Make"
                  type="text"
                  className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                  placeholder="Make"
                  aria-label="Make"
                ></input>
              </div>

              <div className="col-span-3 sm:col-span-1">
                <label htmlFor="Mfg" className="col-form-label custom-label">
                  <span>Mfg dt. :- {data.mfg}</span>
                </label>
                <input
                  id="Mfg"
                  type="date"
                  className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                  placeholder="Mfg"
                  aria-label="Mfg"
                ></input>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="overflow-x-auto">
            <table id="id1" className="table-auto border-collapse ">
              <thead>
                <tr>
                  <th className="border" scope="col">
                    Date of removal
                  </th>
                  <th className="border" scope="col">
                    Loco No.
                  </th>
                  <th className="border" scope="col">
                    Reason of removal
                  </th>
                  <th className="border" scope="col">
                    Defects Noticed
                  </th>
                  <th className="border" scope="col">
                    Date of O/H
                  </th>
                  <tr>
                    <th className="border" scope="col" colSpan="10">
                      Work done during O/H
                    </th>
                  </tr>
                  <tr>
                    <th className="invisible-border"></th>
                    <th className="invisible-border"></th>
                    <th className="invisible-border"></th>
                    <th className="invisible-border">O/H</th>
                    <th className="invisible-border" scope="col"></th>
                    <th className="border" scope="col"></th>
                    <th className="border" scope="col">
                      Free movement of Supply valve
                    </th>
                    <th className="border" scope="col">
                      Condition of stem
                    </th>
                    <th className="border" scope="col">
                      Cleanig of choke of control port
                    </th>
                    <th className="border" scope="col">
                      Body checked for crackness
                    </th>
                  </tr>

                  <th className="border" scope="col">
                    Provided R/kit Make & dt. Of Mfg
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{data.date_1}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_1}
                    </div>
                  </td>
                  <td>{data.date_OH_1}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_1}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_1}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_1}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_1}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_1}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_2}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_2}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_2}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_2}
                    </div>
                  </td>
                  <td>{data.date_OH_2}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_2}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_2}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_2}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_2}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_2}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_3}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_3}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_3}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_3}
                    </div>
                  </td>
                  <td>{data.date_OH_3}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_3}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_3}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_3}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_3}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_3}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_4}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_4}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_4}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_4}
                    </div>
                  </td>
                  <td>{data.date_OH_4}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_4}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_4}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_4}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_4}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_4}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_5}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_5}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_5}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_5}
                    </div>
                  </td>
                  <td>{data.date_OH_5}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_5}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_5}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_5}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_5}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_5}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_6}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_6}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_6}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_6}
                    </div>
                  </td>
                  <td>{data.date_OH_6}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_6}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_6}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_6}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_6}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_6}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_6}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_7}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_7}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_7}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_7}
                    </div>
                  </td>
                  <td>{data.date_OH_7}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_7}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_7}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_7}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_7}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_7}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_7}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_8}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_8}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_8}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_8}
                    </div>
                  </td>
                  <td>{data.date_OH_8}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_8}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_8}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_8}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_8}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_8}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_8}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_9}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_9}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_9}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_9}
                    </div>
                  </td>
                  <td>{data.date_OH_9}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_9}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_9}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_9}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_9}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_9}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_9}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_10}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_10}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_10}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_10}
                    </div>
                  </td>
                  <td>{data.date_OH_10}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_10}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_10}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_10}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_10}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_10}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_10}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_11}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_11}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_11}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_11}
                    </div>
                  </td>
                  <td>{data.date_OH_11}</td>
                  <tr>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.oh_11}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.free_11}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.condition_11}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.cleaning_11}
                      </div>
                    </td>
                    <td className="border">
                      <div className="flex items-center justify-center">
                        {data.body_11}
                      </div>
                    </td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_11}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{data.date_12}</th>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.loco_no_12}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.reason_12}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.defect_12}
                    </div>
                  </td>
                  <td>{data.date_OH_12}</td>
                  <tr>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10">
                      <div className="flex items-center justify-center">
                        {data.of_12}
                      </div>
                    </td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>

                    <td className="border" colSpan="10"></td>
                    <td className="border" colSpan="10">
                      <div className="flex items-center justify-center">
                        {data.c_12}
                      </div>
                    </td>

                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border">
                      <div className="flex items-center justify-center">
                        {data.cb_12}
                      </div>
                    </td>
                    <td className="invisible-border" colSpan="10"></td>
                    <td className="invisible-border" colSpan="10"></td>
                  </tr>
                  <td className="border">
                    <div className="flex items-center justify-center">
                      {data.provided_12}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
          <div className="overflow-x-auto">
            <table id="id2" className="table border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th colSpan="3">
                    Testing Parameters as per OEM (SIL & FTRTIL)
                  </th>
                  <th rowSpan="2">
                    Provided in Loco no. and date of provission
                  </th>

                  <th colSpan="3">Signature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">
                    <div className="flex items-center justify-center">
                      Check Operation
                    </div>
                  </th>
                  <th rowSpan="2">
                    <div className="flex items-center justify-center">
                      Leakage Test No Leakage
                    </div>
                  </th>
                  <td colSpan="2"></td>
                  <th rowSpan="2">
                    <div className="flex items-center justify-center">
                      Technician
                    </div>
                  </th>
                  <th rowSpan="2">
                    <div className="flex items-center justify-center">
                      Supervisor
                    </div>
                  </th>
                </tr>

                <tr>
                  <th colSpan="">
                    <div className="flex items-center justify-center">
                      Apply pressure 10 kg/cm2 at port no. <br></br>1 <br></br>
                      No air leakage through port 2 & 3
                    </div>
                  </th>
                  <th colSpan="">
                    <div className="flex items-center justify-center">
                      Apply 5.0 or 3.0 kg/cm2 pressure at port no. 2 Air from
                      port no. 1 should flow through port no. 3
                    </div>
                  </th>
                </tr>

                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_1}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_1}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_1}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_1}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_1}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_1}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_2}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_2}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_2}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_2}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_2}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_2}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_3}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_3}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_3}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_3}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_3}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_4}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_4}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_4}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_4}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_4}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_5}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_5}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_5}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_5}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_5}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_6}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_6}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_6}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_6}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_6}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_6}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_7}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_7}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_7}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_7}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_7}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_7}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_8}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_8}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_8}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_8}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_8}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_8}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_9}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_9}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_9}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_9}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_9}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_9}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_10}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_10}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_10}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_10}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_10}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_10}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_pressure_11}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.apply_3_11}
                    </div>
                  </td>

                  <td rowSpan="1">
                    <div className="flex items-center justify-center">
                      {data.leakage_11}
                    </div>
                  </td>
                  <td colSpan="2  ">
                    <div className="flex items-center justify-center">
                      {data.provided_in_loco_11}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.technician_sign_11}
                    </div>
                  </td>
                  <td colSpan="1">
                    <div className="flex items-center justify-center">
                      {data.supervisior_sign_11}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
        </div>

        <br></br>
        <button className="bg-blue-500 py-2 px-8 rounded shadow border-2  border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          Preview from
        </button>
        <button className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5">
          Submit
        </button>
      </div>
    </>
  );
}
