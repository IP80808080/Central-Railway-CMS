import PropTypes from "prop-types";
export default function Table({
  date_1,
  date_2,
  date_3,
  date_4,
  date_5,
  date_6,
  date_7,
  date_8,
  date_9,
  date_10,
  date_11,
  date_12,
  loco_no_1,
  loco_no_2,
  loco_no_3,
  loco_no_4,
  loco_no_5,
  loco_no_6,
  loco_no_7,
  loco_no_8,
  loco_no_9,
  loco_no_10,
  loco_no_11,
  loco_no_12,
  reason_1,
  reason_2,
  reason_3,
  reason_4,
  reason_5,
  reason_6,
  reason_7,
  reason_8,
  reason_9,
  reason_10,
  reason_11,
  reason_12,
  defect_1,
  defect_2,
  defect_3,
  defect_4,
  defect_5,
  defect_6,
  defect_7,
  defect_8,
  defect_9,
  defect_10,
  defect_11,
  defect_12,
  date_OH_1,
  date_OH_2,
  date_OH_3,
  date_OH_4,
  date_OH_5,
  date_OH_6,
  date_OH_7,
  date_OH_8,
  date_OH_9,
  date_OH_10,
  date_OH_11,
  date_OH_12,
  oh_1,
  oh_2,
  oh_3,
  oh_4,
  oh_5,
  oh_6,
  oh_7,
  oh_8,
  oh_9,
  oh_10,
  oh_11,
  of_12,
  cb_12,
  c_12,
  free_1,
  free_2,
  free_3,
  free_4,
  free_5,
  free_6,
  free_7,
  free_8,
  free_9,
  free_10,
  free_11,

  condition_1,
  condition_2,
  condition_3,
  condition_4,
  condition_5,
  condition_6,
  condition_7,
  condition_8,
  condition_9,
  condition_10,
  condition_11,

  cleaning_1,
  cleaning_2,
  cleaning_3,
  cleaning_4,
  cleaning_5,
  cleaning_6,
  cleaning_7,
  cleaning_8,
  cleaning_9,
  cleaning_10,
  cleaning_11,

  body_1,
  body_2,
  body_3,
  body_4,
  body_5,
  body_6,
  body_7,
  body_8,
  body_9,
  body_10,
  body_11,

  provided_1,
  provided_2,
  provided_3,
  provided_4,
  provided_5,
  provided_6,
  provided_7,
  provided_8,
  provided_9,
  provided_10,
  provided_11,
  provided_12,
  //CHECKSHEET SECOND PAGE STARTED
  apply_pressure_1,
  apply_pressure_2,
  apply_pressure_3,
  apply_pressure_4,
  apply_pressure_5,
  apply_pressure_6,
  apply_pressure_7,
  apply_pressure_8,
  apply_pressure_9,
  apply_pressure_10,
  apply_pressure_11,

  apply_3_1,
  apply_3_2,
  apply_3_3,
  apply_3_4,
  apply_3_5,
  apply_3_6,
  apply_3_7,
  apply_3_8,
  apply_3_9,
  apply_3_10,
  apply_3_11,

  leakage_1,
  leakage_2,
  leakage_3,
  leakage_4,
  leakage_5,
  leakage_6,
  leakage_7,
  leakage_8,
  leakage_9,
  leakage_10,
  leakage_11,

  provided_in_loco_1,
  provided_in_loco_2,
  provided_in_loco_3,
  provided_in_loco_4,
  provided_in_loco_5,
  provided_in_loco_6,
  provided_in_loco_7,
  provided_in_loco_8,
  provided_in_loco_9,
  provided_in_loco_10,
  provided_in_loco_11,

  technician_sign_1,
  technician_sign_2,
  technician_sign_3,
  technician_sign_4,
  technician_sign_5,
  technician_sign_6,
  technician_sign_7,
  technician_sign_8,
  technician_sign_9,
  technician_sign_10,
  technician_sign_11,

  supervisior_sign_1,
  supervisior_sign_2,
  supervisior_sign_3,
  supervisior_sign_4,
  supervisior_sign_5,
  supervisior_sign_6,
  supervisior_sign_7,
  supervisior_sign_8,
  supervisior_sign_9,
  supervisior_sign_10,
  supervisior_sign_11,
}) {
  return (
    <>
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
              <th scope="row">{date_1}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_1}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_1}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_1}
                </div>
              </td>
              <td>{date_OH_1}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_1}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_1}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_1}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_1}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_1}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_1}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_2}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_2}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_2}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_2}
                </div>
              </td>
              <td>{date_OH_2}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_2}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_2}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_2}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_2}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_2}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_2}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_3}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_3}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_3}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_3}
                </div>
              </td>
              <td>{date_OH_3}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_3}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_3}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_3}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_3}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_3}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_3}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_4}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_4}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_4}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_4}
                </div>
              </td>
              <td>{date_OH_4}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_4}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_4}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_4}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_4}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_4}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_4}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_5}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_5}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_5}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_5}
                </div>
              </td>
              <td>{date_OH_5}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_5}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_5}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_5}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_5}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_5}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_5}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_6}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_6}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_6}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_6}
                </div>
              </td>
              <td>{date_OH_6}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_6}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_6}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_6}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_6}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_6}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_6}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_7}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_7}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_7}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_7}
                </div>
              </td>
              <td>{date_OH_7}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_7}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_7}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_7}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_7}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_7}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_7}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_8}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_8}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_8}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_8}
                </div>
              </td>
              <td>{date_OH_8}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_8}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_8}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_8}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_8}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_8}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_8}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_9}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_9}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_9}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_9}
                </div>
              </td>
              <td>{date_OH_9}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">{oh_9}</div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_9}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_9}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_9}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_9}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_9}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_10}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_10}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_10}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_10}
                </div>
              </td>
              <td>{date_OH_10}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {oh_10}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_10}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_10}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_10}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_10}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_10}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_11}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_11}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_11}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_11}
                </div>
              </td>
              <td>{date_OH_11}</td>
              <tr>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {oh_11}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {free_11}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {condition_11}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {cleaning_11}
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center justify-center">
                    {body_11}
                  </div>
                </td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_11}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">{date_12}</th>
              <td>
                <div className="flex items-center justify-center">
                  {loco_no_12}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {reason_12}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {defect_12}
                </div>
              </td>
              <td>{date_OH_12}</td>
              <tr>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10">
                  <div className="flex items-center justify-center">
                    {of_12}
                  </div>
                </td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>

                <td className="border" colSpan="10"></td>
                <td className="border" colSpan="10">
                  <div className="flex items-center justify-center">{c_12}</div>
                </td>

                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border">
                  <div className="flex items-center justify-center">
                    {cb_12}
                  </div>
                </td>
                <td className="invisible-border" colSpan="10"></td>
                <td className="invisible-border" colSpan="10"></td>
              </tr>
              <td className="border">
                <div className="flex items-center justify-center">
                  {provided_12}
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
              <th colSpan="3">Testing Parameters as per OEM (SIL & FTRTIL)</th>
              <th rowSpan="2">Provided in Loco no. and date of provission</th>

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
                  Apply 5.0 or 3.0 kg/cm2 pressure at port no. 2 Air from port
                  no. 1 should flow through port no. 3
                </div>
              </th>
            </tr>

            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_1}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_1}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_1}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_1}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_1}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_1}
                </div>
              </td>
            </tr>

            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_2}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_2}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_2}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_2}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_2}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_2}
                </div>
              </td>
            </tr>

            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_3}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_3}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_3}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_3}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_3}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_3}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_4}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_4}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_4}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_4}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_4}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_4}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_5}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_5}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_5}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_5}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_5}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_5}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_6}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_6}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_6}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_6}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_6}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_6}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_7}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_7}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_7}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_7}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_7}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_7}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_8}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_8}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_8}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_8}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_8}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_8}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_9}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_9}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_9}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_9}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_9}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_9}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_10}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_10}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_10}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_10}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_10}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_10}
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_pressure_11}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {apply_3_11}
                </div>
              </td>

              <td rowSpan="1">
                <div className="flex items-center justify-center">
                  {leakage_11}
                </div>
              </td>
              <td colSpan="2  ">
                <div className="flex items-center justify-center">
                  {provided_in_loco_11}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {technician_sign_11}
                </div>
              </td>
              <td colSpan="1">
                <div className="flex items-center justify-center">
                  {supervisior_sign_11}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
    </>
  );
}

Table.propTypes = {
  date_1: PropTypes.string.isRequired,
  date_2: PropTypes.string.isRequired,
  date_3: PropTypes.string.isRequired,
  date_4: PropTypes.string.isRequired,
  date_5: PropTypes.string.isRequired,
  date_6: PropTypes.string.isRequired,
  date_7: PropTypes.string.isRequired,
  date_8: PropTypes.string.isRequired,
  date_9: PropTypes.string.isRequired,
  date_10: PropTypes.string.isRequired,
  date_11: PropTypes.string.isRequired,
  date_12: PropTypes.string.isRequired,
  loco_no_1: PropTypes.string.isRequired,
  loco_no_2: PropTypes.string.isRequired,
  loco_no_3: PropTypes.string.isRequired,
  loco_no_4: PropTypes.string.isRequired,
  loco_no_5: PropTypes.string.isRequired,
  loco_no_6: PropTypes.string.isRequired,
  loco_no_7: PropTypes.string.isRequired,
  loco_no_8: PropTypes.string.isRequired,
  loco_no_9: PropTypes.string.isRequired,
  loco_no_10: PropTypes.string.isRequired,
  loco_no_11: PropTypes.string.isRequired,
  loco_no_12: PropTypes.string.isRequired,
  reason_1: PropTypes.string.isRequired,
  reason_2: PropTypes.string.isRequired,
  reason_3: PropTypes.string.isRequired,
  reason_4: PropTypes.string.isRequired,
  reason_5: PropTypes.string.isRequired,
  reason_6: PropTypes.string.isRequired,
  reason_7: PropTypes.string.isRequired,
  reason_8: PropTypes.string.isRequired,
  reason_9: PropTypes.string.isRequired,
  reason_10: PropTypes.string.isRequired,
  reason_11: PropTypes.string.isRequired,
  reason_12: PropTypes.string.isRequired,
  defect_1: PropTypes.string.isRequired,
  defect_2: PropTypes.string.isRequired,
  defect_3: PropTypes.string.isRequired,
  defect_4: PropTypes.string.isRequired,
  defect_5: PropTypes.string.isRequired,
  defect_6: PropTypes.string.isRequired,
  defect_7: PropTypes.string.isRequired,
  defect_8: PropTypes.string.isRequired,
  defect_9: PropTypes.string.isRequired,
  defect_10: PropTypes.string.isRequired,
  defect_11: PropTypes.string.isRequired,
  defect_12: PropTypes.string.isRequired,
  date_OH_1: PropTypes.string.isRequired,
  date_OH_2: PropTypes.string.isRequired,
  date_OH_3: PropTypes.string.isRequired,
  date_OH_4: PropTypes.string.isRequired,
  date_OH_5: PropTypes.string.isRequired,
  date_OH_6: PropTypes.string.isRequired,
  date_OH_7: PropTypes.string.isRequired,
  date_OH_8: PropTypes.string.isRequired,
  date_OH_9: PropTypes.string.isRequired,
  date_OH_10: PropTypes.string.isRequired,
  date_OH_11: PropTypes.string.isRequired,
  date_OH_12: PropTypes.string.isRequired,
  oh_1: PropTypes.string.isRequired,
  oh_2: PropTypes.string.isRequired,
  oh_3: PropTypes.string.isRequired,
  oh_4: PropTypes.string.isRequired,
  oh_5: PropTypes.string.isRequired,
  oh_6: PropTypes.string.isRequired,
  oh_7: PropTypes.string.isRequired,
  oh_8: PropTypes.string.isRequired,
  oh_9: PropTypes.string.isRequired,
  oh_10: PropTypes.string.isRequired,
  oh_11: PropTypes.string.isRequired,
  oh_12: PropTypes.string.isRequired,
  cb_12: PropTypes.string.isRequired,
  c_12: PropTypes.string.isRequired,
  free_1: PropTypes.string.isRequired,
  free_2: PropTypes.string.isRequired,
  free_3: PropTypes.string.isRequired,
  free_4: PropTypes.string.isRequired,
  free_5: PropTypes.string.isRequired,
  free_6: PropTypes.string.isRequired,
  free_7: PropTypes.string.isRequired,
  free_8: PropTypes.string.isRequired,
  free_9: PropTypes.string.isRequired,
  free_10: PropTypes.string.isRequired,
  free_11: PropTypes.string.isRequired,
  condition_1: PropTypes.string.isRequired,
  condition_2: PropTypes.string.isRequired,
  condition_3: PropTypes.string.isRequired,
  condition_4: PropTypes.string.isRequired,
  condition_5: PropTypes.string.isRequired,
  condition_6: PropTypes.string.isRequired,
  condition_7: PropTypes.string.isRequired,
  condition_8: PropTypes.string.isRequired,
  condition_9: PropTypes.string.isRequired,
  condition_10: PropTypes.string.isRequired,
  condition_11: PropTypes.string.isRequired,
  cleaning_1: PropTypes.string.isRequired,
  cleaning_2: PropTypes.string.isRequired,
  cleaning_3: PropTypes.string.isRequired,
  cleaning_4: PropTypes.string.isRequired,
  cleaning_5: PropTypes.string.isRequired,
  cleaning_6: PropTypes.string.isRequired,
  cleaning_7: PropTypes.string.isRequired,
  cleaning_8: PropTypes.string.isRequired,
  cleaning_9: PropTypes.string.isRequired,
  cleaning_10: PropTypes.string.isRequired,
  cleaning_11: PropTypes.string.isRequired,
  body_1: PropTypes.string.isRequired,
  body_2: PropTypes.string.isRequired,
  body_3: PropTypes.string.isRequired,
  body_4: PropTypes.string.isRequired,
  body_5: PropTypes.string.isRequired,
  body_6: PropTypes.string.isRequired,
  body_7: PropTypes.string.isRequired,
  body_8: PropTypes.string.isRequired,
  body_9: PropTypes.string.isRequired,
  body_10: PropTypes.string.isRequired,
  body_11: PropTypes.string.isRequired,
  provided_1: PropTypes.string.isRequired,
  provided_2: PropTypes.string.isRequired,
  provided_3: PropTypes.string.isRequired,
  provided_4: PropTypes.string.isRequired,
  provided_5: PropTypes.string.isRequired,
  provided_6: PropTypes.string.isRequired,
  provided_7: PropTypes.string.isRequired,
  provided_8: PropTypes.string.isRequired,
  provided_9: PropTypes.string.isRequired,
  provided_10: PropTypes.string.isRequired,
  provided_11: PropTypes.string.isRequired,
  provided_12: PropTypes.string.isRequired,
  apply_pressure_1: PropTypes.string.isRequired,
  apply_pressure_2: PropTypes.string.isRequired,
  apply_pressure_3: PropTypes.string.isRequired,
  apply_pressure_4: PropTypes.string.isRequired,
  apply_pressure_5: PropTypes.string.isRequired,
  apply_pressure_6: PropTypes.string.isRequired,
  apply_pressure_7: PropTypes.string.isRequired,
  apply_pressure_8: PropTypes.string.isRequired,
  apply_pressure_9: PropTypes.string.isRequired,
  apply_pressure_10: PropTypes.string.isRequired,
  apply_pressure_11: PropTypes.string.isRequired,
  apply_3_1: PropTypes.string.isRequired,
  apply_3_2: PropTypes.string.isRequired,
  apply_3_3: PropTypes.string.isRequired,
  apply_3_4: PropTypes.string.isRequired,
  apply_3_5: PropTypes.string.isRequired,
  apply_3_6: PropTypes.string.isRequired,
  apply_3_7: PropTypes.string.isRequired,
  apply_3_8: PropTypes.string.isRequired,
  apply_3_9: PropTypes.string.isRequired,
  apply_3_10: PropTypes.string.isRequired,
  apply_3_11: PropTypes.string.isRequired,
  leakage_1: PropTypes.string.isRequired,
  leakage_2: PropTypes.string.isRequired,
  leakage_3: PropTypes.string.isRequired,
  leakage_4: PropTypes.string.isRequired,
  leakage_5: PropTypes.string.isRequired,
  leakage_6: PropTypes.string.isRequired,
  leakage_7: PropTypes.string.isRequired,
  leakage_8: PropTypes.string.isRequired,
  leakage_9: PropTypes.string.isRequired,
  leakage_10: PropTypes.string.isRequired,
  leakage_11: PropTypes.string.isRequired,
  provided_in_loco_1: PropTypes.string.isRequired,
  provided_in_loco_2: PropTypes.string.isRequired,
  provided_in_loco_3: PropTypes.string.isRequired,
  provided_in_loco_4: PropTypes.string.isRequired,
  provided_in_loco_5: PropTypes.string.isRequired,
  provided_in_loco_6: PropTypes.string.isRequired,
  provided_in_loco_7: PropTypes.string.isRequired,
  provided_in_loco_8: PropTypes.string.isRequired,
  provided_in_loco_9: PropTypes.string.isRequired,
  provided_in_loco_10: PropTypes.string.isRequired,
  provided_in_loco_11: PropTypes.string.isRequired,
  technician_sign_1: PropTypes.string.isRequired,
  technician_sign_2: PropTypes.string.isRequired,
  technician_sign_3: PropTypes.string.isRequired,
  technician_sign_4: PropTypes.string.isRequired,
  technician_sign_5: PropTypes.string.isRequired,
  technician_sign_6: PropTypes.string.isRequired,
  technician_sign_7: PropTypes.string.isRequired,
  technician_sign_8: PropTypes.string.isRequired,
  technician_sign_9: PropTypes.string.isRequired,
  technician_sign_10: PropTypes.string.isRequired,
  technician_sign_11: PropTypes.string.isRequired,
  supervisior_sign_1: PropTypes.string.isRequired,
  supervisior_sign_2: PropTypes.string.isRequired,
  supervisior_sign_3: PropTypes.string.isRequired,
  supervisior_sign_4: PropTypes.string.isRequired,
  supervisior_sign_5: PropTypes.string.isRequired,
  supervisior_sign_6: PropTypes.string.isRequired,
  supervisior_sign_7: PropTypes.string.isRequired,
  supervisior_sign_8: PropTypes.string.isRequired,
  supervisior_sign_9: PropTypes.string.isRequired,
  supervisior_sign_10: PropTypes.string.isRequired,
  supervisior_sign_11: PropTypes.string.isRequired,
  of_12: PropTypes.string.isRequired,
};
