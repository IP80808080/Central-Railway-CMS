import { useState } from "react";
import axios from "axios";
import Details from "../Template/details";
import Table from "../Template/table";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./c2index.css";

function AppC2() {
  const [showForm, setShowForm] = useState(false);
  const [bsl, setBsl] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [make, setMake] = useState("");
  const [mfg, setMfg] = useState("");
  const [date_1, setDate_1] = useState("");
  const [date_2, setDate_2] = useState("");
  const [date_3, setDate_3] = useState("");
  const [date_4, setDate_4] = useState("");
  const [date_5, setDate_5] = useState("");
  const [date_6, setDate_6] = useState("");
  const [date_7, setDate_7] = useState("");
  const [date_8, setDate_8] = useState("");
  const [date_9, setDate_9] = useState("");
  const [date_10, setDate_10] = useState("");
  const [date_11, setDate_11] = useState("");
  const [date_12, setDate_12] = useState("");
  const [loco_no_1, setLoco_no_1] = useState("");
  const [loco_no_2, setLoco_no_2] = useState("");
  const [loco_no_3, setLoco_no_3] = useState("");
  const [loco_no_4, setLoco_no_4] = useState("");
  const [loco_no_5, setLoco_no_5] = useState("");
  const [loco_no_6, setLoco_no_6] = useState("");
  const [loco_no_7, setLoco_no_7] = useState("");
  const [loco_no_8, setLoco_no_8] = useState("");
  const [loco_no_9, setLoco_no_9] = useState("");
  const [loco_no_10, setLoco_no_10] = useState("");
  const [loco_no_11, setLoco_no_11] = useState("");
  const [loco_no_12, setLoco_no_12] = useState("");
  const [reason_1, setReason_1] = useState("");
  const [reason_2, setReason_2] = useState("");
  const [reason_3, setReason_3] = useState("");
  const [reason_4, setReason_4] = useState("");
  const [reason_5, setReason_5] = useState("");
  const [reason_6, setReason_6] = useState("");
  const [reason_7, setReason_7] = useState("");
  const [reason_8, setReason_8] = useState("");
  const [reason_9, setReason_9] = useState("");
  const [reason_10, setReason_10] = useState("");
  const [reason_11, setReason_11] = useState("");
  const [reason_12, setReason_12] = useState("");
  const [defect_1, setDefect_1] = useState("");
  const [defect_2, setDefect_2] = useState("");
  const [defect_3, setDefect_3] = useState("");
  const [defect_4, setDefect_4] = useState("");
  const [defect_5, setDefect_5] = useState("");
  const [defect_6, setDefect_6] = useState("");
  const [defect_7, setDefect_7] = useState("");
  const [defect_8, setDefect_8] = useState("");
  const [defect_9, setDefect_9] = useState("");
  const [defect_10, setDefect_10] = useState("");
  const [defect_11, setDefect_11] = useState("");
  const [defect_12, setDefect_12] = useState("");
  const [date_OH_1, setDate_OH_1] = useState("");
  const [date_OH_2, setDate_OH_2] = useState("");
  const [date_OH_3, setDate_OH_3] = useState("");
  const [date_OH_4, setDate_OH_4] = useState("");
  const [date_OH_5, setDate_OH_5] = useState("");
  const [date_OH_6, setDate_OH_6] = useState("");
  const [date_OH_7, setDate_OH_7] = useState("");
  const [date_OH_8, setDate_OH_8] = useState("");
  const [date_OH_9, setDate_OH_9] = useState("");
  const [date_OH_10, setDate_OH_10] = useState("");
  const [date_OH_11, setDate_OH_11] = useState("");
  const [date_OH_12, setDate_OH_12] = useState("");
  const [oh_1, setOh_1] = useState("");
  const [oh_2, setOh_2] = useState("");
  const [oh_3, setOh_3] = useState("");
  const [oh_4, setOh_4] = useState("");
  const [oh_5, setOh_5] = useState("");
  const [oh_6, setOh_6] = useState("");
  const [oh_7, setOh_7] = useState("");
  const [oh_8, setOh_8] = useState("");
  const [oh_9, setOh_9] = useState("");
  const [oh_10, setOh_10] = useState("");
  const [oh_11, setOh_11] = useState("");
  const [of_12, setOf_12] = useState("");
  const [c_12, setC_12] = useState("");
  const [cb_12, setCb_12] = useState("");
  const [free_1, setFree_1] = useState("");
  const [free_2, setFree_2] = useState("");
  const [free_3, setFree_3] = useState("");
  const [free_4, setFree_4] = useState("");
  const [free_5, setFree_5] = useState("");
  const [free_6, setFree_6] = useState("");
  const [free_7, setFree_7] = useState("");
  const [free_8, setFree_8] = useState("");
  const [free_9, setFree_9] = useState("");
  const [free_10, setFree_10] = useState("");
  const [free_11, setFree_11] = useState("");

  const [condition_1, setCondition_1] = useState("");
  const [condition_2, setCondition_2] = useState("");
  const [condition_3, setCondition_3] = useState("");
  const [condition_4, setCondition_4] = useState("");
  const [condition_5, setCondition_5] = useState("");
  const [condition_6, setCondition_6] = useState("");
  const [condition_7, setCondition_7] = useState("");
  const [condition_8, setCondition_8] = useState("");
  const [condition_9, setCondition_9] = useState("");
  const [condition_10, setCondition_10] = useState("");
  const [condition_11, setCondition_11] = useState("");

  const [cleaning_1, setCleaning_1] = useState("");
  const [cleaning_2, setCleaning_2] = useState("");
  const [cleaning_3, setCleaning_3] = useState("");
  const [cleaning_4, setCleaning_4] = useState("");
  const [cleaning_5, setCleaning_5] = useState("");
  const [cleaning_6, setCleaning_6] = useState("");
  const [cleaning_7, setCleaning_7] = useState("");
  const [cleaning_8, setCleaning_8] = useState("");
  const [cleaning_9, setCleaning_9] = useState("");
  const [cleaning_10, setCleaning_10] = useState("");
  const [cleaning_11, setCleaning_11] = useState("");

  const [body_1, setBody_1] = useState("");
  const [body_2, setBody_2] = useState("");
  const [body_3, setBody_3] = useState("");
  const [body_4, setBody_4] = useState("");
  const [body_5, setBody_5] = useState("");
  const [body_6, setBody_6] = useState("");
  const [body_7, setBody_7] = useState("");
  const [body_8, setBody_8] = useState("");
  const [body_9, setBody_9] = useState("");
  const [body_10, setBody_10] = useState("");
  const [body_11, setBody_11] = useState("");

  const [provided_1, setProvided_1] = useState("");
  const [provided_2, setProvided_2] = useState("");
  const [provided_3, setProvided_3] = useState("");
  const [provided_4, setProvided_4] = useState("");
  const [provided_5, setProvided_5] = useState("");
  const [provided_6, setProvided_6] = useState("");
  const [provided_7, setProvided_7] = useState("");
  const [provided_8, setProvided_8] = useState("");
  const [provided_9, setProvided_9] = useState("");
  const [provided_10, setProvided_10] = useState("");
  const [provided_11, setProvided_11] = useState("");
  const [provided_12, setProvided_12] = useState("");
  const [apply_pressure_1, setApply_pressure_1] = useState("");
  const [apply_pressure_2, setApply_pressure_2] = useState("");
  const [apply_pressure_3, setApply_pressure_3] = useState("");
  const [apply_pressure_4, setApply_pressure_4] = useState("");
  const [apply_pressure_5, setApply_pressure_5] = useState("");
  const [apply_pressure_6, setApply_pressure_6] = useState("");
  const [apply_pressure_7, setApply_pressure_7] = useState("");
  const [apply_pressure_8, setApply_pressure_8] = useState("");
  const [apply_pressure_9, setApply_pressure_9] = useState("");
  const [apply_pressure_10, setApply_pressure_10] = useState("");
  const [apply_pressure_11, setApply_pressure_11] = useState("");
  const [apply_3_1, setApply_3_1] = useState("");
  const [apply_3_2, setApply_3_2] = useState("");
  const [apply_3_3, setApply_3_3] = useState("");
  const [apply_3_4, setApply_3_4] = useState("");
  const [apply_3_5, setApply_3_5] = useState("");
  const [apply_3_6, setApply_3_6] = useState("");
  const [apply_3_7, setApply_3_7] = useState("");
  const [apply_3_8, setApply_3_8] = useState("");
  const [apply_3_9, setApply_3_9] = useState("");
  const [apply_3_10, setApply_3_10] = useState("");
  const [apply_3_11, setApply_3_11] = useState("");
  const [leakage_1, setLeakage_1] = useState("");
  const [leakage_2, setLeakage_2] = useState("");
  const [leakage_3, setLeakage_3] = useState("");
  const [leakage_4, setLeakage_4] = useState("");
  const [leakage_5, setLeakage_5] = useState("");
  const [leakage_6, setLeakage_6] = useState("");
  const [leakage_7, setLeakage_7] = useState("");
  const [leakage_8, setLeakage_8] = useState("");
  const [leakage_9, setLeakage_9] = useState("");
  const [leakage_10, setLeakage_10] = useState("");
  const [leakage_11, setLeakage_11] = useState("");
  const [provided_in_loco_1, setProvided_in_loco_1] = useState("");
  const [provided_in_loco_2, setProvided_in_loco_2] = useState("");
  const [provided_in_loco_3, setProvided_in_loco_3] = useState("");
  const [provided_in_loco_4, setProvided_in_loco_4] = useState("");
  const [provided_in_loco_5, setProvided_in_loco_5] = useState("");
  const [provided_in_loco_6, setProvided_in_loco_6] = useState("");
  const [provided_in_loco_7, setProvided_in_loco_7] = useState("");
  const [provided_in_loco_8, setProvided_in_loco_8] = useState("");
  const [provided_in_loco_9, setProvided_in_loco_9] = useState("");
  const [provided_in_loco_10, setProvided_in_loco_10] = useState("");
  const [provided_in_loco_11, setProvided_in_loco_11] = useState("");

  const [technician_sign_1, setTechnician_sign_1] = useState("");
  const [technician_sign_2, setTechnician_sign_2] = useState("");
  const [technician_sign_3, setTechnician_sign_3] = useState("");
  const [technician_sign_4, setTechnician_sign_4] = useState("");
  const [technician_sign_5, setTechnician_sign_5] = useState("");
  const [technician_sign_6, setTechnician_sign_6] = useState("");
  const [technician_sign_7, setTechnician_sign_7] = useState("");
  const [technician_sign_8, setTechnician_sign_8] = useState("");
  const [technician_sign_9, setTechnician_sign_9] = useState("");
  const [technician_sign_10, setTechnician_sign_10] = useState("");
  const [technician_sign_11, setTechnician_sign_11] = useState("");

  const [supervisior_sign_1, setSupervisior_sign_1] = useState("");
  const [supervisior_sign_2, setSupervisior_sign_2] = useState("");
  const [supervisior_sign_3, setSupervisior_sign_3] = useState("");
  const [supervisior_sign_4, setSupervisior_sign_4] = useState("");
  const [supervisior_sign_5, setSupervisior_sign_5] = useState("");
  const [supervisior_sign_6, setSupervisior_sign_6] = useState("");
  const [supervisior_sign_7, setSupervisior_sign_7] = useState("");
  const [supervisior_sign_8, setSupervisior_sign_8] = useState("");
  const [supervisior_sign_9, setSupervisior_sign_9] = useState("");
  const [supervisior_sign_10, setSupervisior_sign_10] = useState("");
  const [supervisior_sign_11, setSupervisior_sign_11] = useState("");

  const [uid, setUID] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    bsl: "",
    equipmentNumber: "",
    mfg: "",
    make: "",
    date_1: "",
    date_2: "",
    date_3: "",
    date_4: "",
    date_5: "",
    date_6: "",
    date_7: "",
    date_8: "",
    date_9: "",
    date_10: "",
    date_11: "",
    date_12: "",
    loco_no_1: "",
    loco_no_2: "",
    loco_no_3: "",
    loco_no_4: "",
    loco_no_5: "",
    loco_no_6: "",
    loco_no_7: "",
    loco_no_8: "",
    loco_no_9: "",
    loco_no_10: "",
    loco_no_11: "",
    loco_no_12: "",
    reason_1: "",
    reason_2: "",
    reason_3: "",
    reason_4: "",
    reason_5: "",
    reason_6: "",
    reason_7: "",
    reason_8: "",
    reason_9: "",
    reason_10: "",
    reason_11: "",
    reason_12: "",
    defect_1: "",
    defect_2: "",
    defect_3: "",
    defect_4: "",
    defect_5: "",
    defect_6: "",
    defect_7: "",
    defect_8: "",
    defect_9: "",
    defect_10: "",
    defect_11: "",
    defect_12: "",
    date_OH_1: "",
    date_OH_2: "",
    date_OH_3: "",
    date_OH_4: "",
    date_OH_5: "",
    date_OH_6: "",
    date_OH_7: "",
    date_OH_8: "",
    date_OH_9: "",
    date_OH_10: "",
    date_OH_11: "",
    date_OH_12: "",
    oh_1: "",
    oh_2: "",
    oh_3: "",
    oh_4: "",
    oh_5: "",
    oh_6: "",
    oh_7: "",
    oh_8: "",
    oh_9: "",
    oh_10: "",
    oh_11: "",
    of_12: "",
    c_12: "",
    cb_12: "",

    free_1: "",
    free_2: "",
    free_3: "",
    free_4: "",
    free_5: "",
    free_6: "",
    free_7: "",
    free_8: "",
    free_9: "",
    free_10: "",
    free_11: "",

    condition_1: "",
    condition_2: "",
    condition_3: "",
    condition_4: "",
    condition_5: "",
    condition_6: "",
    condition_7: "",
    condition_8: "",
    condition_9: "",
    condition_10: "",
    condition_11: "",

    cleaning_1: "",
    cleaning_2: "",
    cleaning_3: "",
    cleaning_4: "",
    cleaning_5: "",
    cleaning_6: "",
    cleaning_7: "",
    cleaning_8: "",
    cleaning_9: "",
    cleaning_10: "",
    cleaning_11: "",

    body_1: "",
    body_2: "",
    body_3: "",
    body_4: "",
    body_5: "",
    body_6: "",
    body_7: "",
    body_8: "",
    body_9: "",
    body_10: "",
    body_11: "",

    provided_1: "",
    provided_2: "",
    provided_3: "",
    provided_4: "",
    provided_5: "",
    provided_6: "",
    provided_7: "",
    provided_8: "",
    provided_9: "",
    provided_10: "",
    provided_11: "",
    provided_12: "",
    //CHECKSHEET SECOND PAGE STARTED
    apply_pressure_1: "",
    apply_pressure_2: "",
    apply_pressure_3: "",
    apply_pressure_4: "",
    apply_pressure_5: "",
    apply_pressure_6: "",
    apply_pressure_7: "",
    apply_pressure_8: "",
    apply_pressure_9: "",
    apply_pressure_10: "",
    apply_pressure_11: "",

    apply_3_1: "",
    apply_3_2: "",
    apply_3_3: "",
    apply_3_4: "",
    apply_3_5: "",
    apply_3_6: "",
    apply_3_7: "",
    apply_3_8: "",
    apply_3_9: "",
    apply_3_10: "",
    apply_3_11: "",

    leakage_1: "",
    leakage_2: "",
    leakage_3: "",
    leakage_4: "",
    leakage_5: "",
    leakage_6: "",
    leakage_7: "",
    leakage_8: "",
    leakage_9: "",
    leakage_10: "",
    leakage_11: "",

    provided_in_loco_1: "",
    provided_in_loco_2: "",
    provided_in_loco_3: "",
    provided_in_loco_4: "",
    provided_in_loco_5: "",
    provided_in_loco_6: "",
    provided_in_loco_7: "",
    provided_in_loco_8: "",
    provided_in_loco_9: "",
    provided_in_loco_10: "",
    provided_in_loco_11: "",

    technician_sign_1: "",
    technician_sign_2: "",
    technician_sign_3: "",
    technician_sign_4: "",
    technician_sign_5: "",
    technician_sign_6: "",
    technician_sign_7: "",
    technician_sign_8: "",
    technician_sign_9: "",
    technician_sign_10: "",
    technician_sign_11: "",

    supervisior_sign_1: "",
    supervisior_sign_2: "",
    supervisior_sign_3: "",
    supervisior_sign_4: "",
    supervisior_sign_5: "",
    supervisior_sign_6: "",
    supervisior_sign_7: "",
    supervisior_sign_8: "",
    supervisior_sign_9: "",
    supervisior_sign_10: "",
    supervisior_sign_11: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      equipmentNumber,
      uid,
      bsl,
      make,
      mfg,
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
    } = data;

    try {
      const { data } = await axios.post("/submitForm/C2", {
        equipmentNumber,
        uid,
        make,
        bsl,
        mfg,
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
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful, Welcome!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during checklist submission:", error);
      toast.error("Error during checklist submission");
    }
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <br></br>
              <div className="flex flex-col justify-center container overflow-x">
                <Details
                  equipmentNumber={equipmentNumber}
                  make={make}
                  mfg={mfg}
                  bsl={bsl}
                />
                <br></br>
                <br></br>
                <div className="container mt-5 f-flex justify-content-center">
                  <Table
                    uid={uid}
                    date_1={date_1}
                    date_2={date_2}
                    date_3={date_3}
                    date_4={date_4}
                    date_5={date_5}
                    date_6={date_6}
                    date_7={date_7}
                    date_8={date_8}
                    date_9={date_9}
                    date_10={date_10}
                    date_11={date_11}
                    date_12={date_12}
                    loco_no_1={loco_no_1}
                    loco_no_2={loco_no_2}
                    loco_no_3={loco_no_3}
                    loco_no_4={loco_no_4}
                    loco_no_5={loco_no_5}
                    loco_no_6={loco_no_6}
                    loco_no_7={loco_no_7}
                    loco_no_8={loco_no_8}
                    loco_no_9={loco_no_9}
                    loco_no_10={loco_no_10}
                    loco_no_11={loco_no_11}
                    loco_no_12={loco_no_12}
                    reason_1={reason_1}
                    reason_2={reason_2}
                    reason_3={reason_3}
                    reason_4={reason_4}
                    reason_5={reason_5}
                    reason_6={reason_6}
                    reason_7={reason_7}
                    reason_8={reason_8}
                    reason_9={reason_9}
                    reason_10={reason_10}
                    reason_11={reason_11}
                    reason_12={reason_12}
                    defect_1={defect_1}
                    defect_2={defect_2}
                    defect_3={defect_3}
                    defect_4={defect_4}
                    defect_5={defect_5}
                    defect_6={defect_6}
                    defect_7={defect_7}
                    defect_8={defect_8}
                    defect_9={defect_9}
                    defect_10={defect_10}
                    defect_11={defect_11}
                    defect_12={defect_12}
                    date_OH_1={date_OH_1}
                    date_OH_2={date_OH_2}
                    date_OH_3={date_OH_3}
                    date_OH_4={date_OH_4}
                    date_OH_5={date_OH_5}
                    date_OH_6={date_OH_6}
                    date_OH_7={date_OH_7}
                    date_OH_8={date_OH_8}
                    date_OH_9={date_OH_9}
                    date_OH_10={date_OH_10}
                    date_OH_11={date_OH_11}
                    date_OH_12={date_OH_12}
                    oh_1={oh_1}
                    oh_2={oh_2}
                    oh_3={oh_3}
                    oh_4={oh_4}
                    oh_5={oh_5}
                    oh_6={oh_6}
                    oh_7={oh_7}
                    oh_8={oh_8}
                    oh_9={oh_9}
                    oh_10={oh_10}
                    oh_11={oh_11}
                    of_12={of_12}
                    c_12={c_12}
                    cb_12={cb_12}
                    free_1={free_1}
                    free_2={free_2}
                    free_3={free_3}
                    free_4={free_4}
                    free_5={free_5}
                    free_6={free_6}
                    free_7={free_7}
                    free_8={free_8}
                    free_9={free_9}
                    free_10={free_10}
                    free_11={free_11}
                    condition_1={condition_1}
                    condition_2={condition_2}
                    condition_3={condition_3}
                    condition_4={condition_4}
                    condition_5={condition_5}
                    condition_6={condition_6}
                    condition_7={condition_7}
                    condition_8={condition_8}
                    condition_9={condition_9}
                    condition_10={condition_10}
                    condition_11={condition_11}
                    cleaning_1={cleaning_1}
                    cleaning_2={cleaning_2}
                    cleaning_3={cleaning_3}
                    cleaning_4={cleaning_4}
                    cleaning_5={cleaning_5}
                    cleaning_6={cleaning_6}
                    cleaning_7={cleaning_7}
                    cleaning_8={cleaning_8}
                    cleaning_9={cleaning_9}
                    cleaning_10={cleaning_10}
                    cleaning_11={cleaning_11}
                    body_1={body_1}
                    body_2={body_2}
                    body_3={body_3}
                    body_4={body_4}
                    body_5={body_5}
                    body_6={body_6}
                    body_7={body_7}
                    body_8={body_8}
                    body_9={body_9}
                    body_10={body_10}
                    body_11={body_11}
                    provided_1={provided_1}
                    provided_2={provided_2}
                    provided_3={provided_3}
                    provided_4={provided_4}
                    provided_5={provided_5}
                    provided_6={provided_6}
                    provided_7={provided_7}
                    provided_8={provided_8}
                    provided_9={provided_9}
                    provided_10={provided_10}
                    provided_11={provided_11}
                    provided_12={provided_12}
                    apply_pressure_1={apply_pressure_1}
                    apply_pressure_2={apply_pressure_2}
                    apply_pressure_3={apply_pressure_3}
                    apply_pressure_4={apply_pressure_4}
                    apply_pressure_5={apply_pressure_5}
                    apply_pressure_6={apply_pressure_6}
                    apply_pressure_7={apply_pressure_7}
                    apply_pressure_8={apply_pressure_8}
                    apply_pressure_9={apply_pressure_9}
                    apply_pressure_10={apply_pressure_10}
                    apply_pressure_11={apply_pressure_11}
                    apply_3_1={apply_3_1}
                    apply_3_2={apply_3_2}
                    apply_3_3={apply_3_3}
                    apply_3_4={apply_3_4}
                    apply_3_5={apply_3_5}
                    apply_3_6={apply_3_6}
                    apply_3_7={apply_3_7}
                    apply_3_8={apply_3_8}
                    apply_3_9={apply_3_9}
                    apply_3_10={apply_3_10}
                    apply_3_11={apply_3_11}
                    leakage_1={leakage_1}
                    leakage_2={leakage_2}
                    leakage_3={leakage_3}
                    leakage_4={leakage_4}
                    leakage_5={leakage_5}
                    leakage_6={leakage_6}
                    leakage_7={leakage_7}
                    leakage_8={leakage_8}
                    leakage_9={leakage_9}
                    leakage_10={leakage_10}
                    leakage_11={leakage_11}
                    provided_in_loco_1={provided_in_loco_1}
                    provided_in_loco_2={provided_in_loco_2}
                    provided_in_loco_3={provided_in_loco_3}
                    provided_in_loco_4={provided_in_loco_4}
                    provided_in_loco_5={provided_in_loco_5}
                    provided_in_loco_6={provided_in_loco_6}
                    provided_in_loco_7={provided_in_loco_7}
                    provided_in_loco_8={provided_in_loco_8}
                    provided_in_loco_9={provided_in_loco_9}
                    provided_in_loco_10={provided_in_loco_10}
                    provided_in_loco_11={provided_in_loco_11}
                    technician_sign_1={technician_sign_1}
                    technician_sign_2={technician_sign_2}
                    technician_sign_3={technician_sign_3}
                    technician_sign_4={technician_sign_4}
                    technician_sign_5={technician_sign_5}
                    technician_sign_6={technician_sign_6}
                    technician_sign_7={technician_sign_7}
                    technician_sign_8={technician_sign_8}
                    technician_sign_9={technician_sign_9}
                    technician_sign_10={technician_sign_10}
                    technician_sign_11={technician_sign_11}
                    supervisor_sign_1={supervisior_sign_1}
                    supervisor_sign_2={supervisior_sign_2}
                    supervisor_sign_3={supervisior_sign_3}
                    supervisor_sign_4={supervisior_sign_4}
                    supervisor_sign_5={supervisior_sign_5}
                    supervisor_sign_6={supervisior_sign_6}
                    supervisor_sign_7={supervisior_sign_7}
                    supervisor_sign_8={supervisior_sign_8}
                    supervisor_sign_9={supervisior_sign_9}
                    supervisor_sign_10={supervisior_sign_10}
                    supervisor_sign_11={supervisior_sign_11}
                  />
                </div>
                <footer className="flex justify-center items-center space-x-4 px-4">
                  <span style={{ whiteSpace: "pre" }}> </span>
                  <button
                    onClick={() => setShowForm(false)}
                    className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handlePrint}
                    className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                  >
                    Print
                  </button>
                  <button
                    className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </footer>
              </div>
            </div>
          </div>
        ) : (
          <>
            <br></br>
            <div className="flex flex-col justify-center container overflow-x">
              <div className="text-center">
                <header>
                  <h1 className="custom-font-size">
                    C2 Relay Valve Record Register
                  </h1>
                </header>
              </div>

              <div className="container mt-5 f-flex justify-content-center">
                <div className="container mt-5">
                  <div className="grid grid-cols-3 gap-4 px-8">
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="BSL"
                        className="col-form-label custom-label"
                      >
                        <span>BSL PN NO. :- </span>
                      </label>
                      <input
                        id="BSL"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="BSL"
                        aria-label="BSL"
                        value={data.bsl}
                        onChange={(e) => {
                          setData({ ...data, bsl: e.target.value });
                          setBsl(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="Sr"
                        className="col-form-label custom-label"
                      >
                        <span>Sr. No. :- </span>
                      </label>
                      <input
                        id="Sr"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="Sr. No"
                        aria-label="Sr"
                        required
                        value={data.equipmentNumber}
                        onChange={(e) => {
                          setData({ ...data, equipmentNumber: e.target.value });
                          setEquipmentNumber(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="Make"
                        className="col-form-label custom-label"
                      >
                        <span>Make :- </span>
                      </label>
                      <input
                        id="Make"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="Make"
                        aria-label="Make"
                        value={data.make}
                        onChange={(e) => {
                          setData({ ...data, make: e.target.value });
                          setMake(e.target.value);
                        }}
                      ></input>
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="Mfg"
                        className="col-form-label custom-label"
                      >
                        <span>Mfg dt. :- </span>
                      </label>
                      <input
                        id="Mfg"
                        type="date"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="Mfg"
                        aria-label="Mfg"
                        value={data.mfg}
                        onChange={(e) => {
                          setData({ ...data, mfg: e.target.value });
                          setMfg(e.target.value);
                        }}
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
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_1}
                            onChange={(e) => {
                              setData({ ...data, date_1: e.target.value });
                              setDate_1(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_1}
                              onChange={(e) => {
                                setData({ ...data, loco_no_1: e.target.value });
                                setLoco_no_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_1}
                              onChange={(e) => {
                                setData({ ...data, reason_1: e.target.value });
                                setReason_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_1}
                              onChange={(e) => {
                                setData({ ...data, defect_1: e.target.value });
                                setDefect_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_1}
                            onChange={(e) => {
                              setData({ ...data, date_OH_1: e.target.value });
                              setDate_OH_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_1}
                                onChange={(e) => {
                                  setData({ ...data, oh_1: e.target.value });
                                  setOh_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_1}
                                onChange={(e) => {
                                  setData({ ...data, free_1: e.target.value });
                                  setFree_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_1: e.target.value,
                                  });
                                  setCondition_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_1: e.target.value,
                                  });
                                  setCleaning_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_1}
                                onChange={(e) => {
                                  setData({ ...data, body_1: e.target.value });
                                  setBody_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_1: e.target.value,
                                });
                                setProvided_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_2}
                            onChange={(e) => {
                              setData({ ...data, date_2: e.target.value });
                              setDate_2(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_2}
                              onChange={(e) => {
                                setData({ ...data, loco_no_2: e.target.value });
                                setLoco_no_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_2}
                              onChange={(e) => {
                                setData({ ...data, reason_2: e.target.value });
                                setReason_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_2}
                              onChange={(e) => {
                                setData({ ...data, defect_2: e.target.value });
                                setDefect_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_2}
                            onChange={(e) => {
                              setData({ ...data, date_OH_2: e.target.value });
                              setDate_OH_2(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_2}
                                onChange={(e) => {
                                  setData({ ...data, oh_2: e.target.value });
                                  setOh_2(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_2}
                                onChange={(e) => {
                                  setData({ ...data, free_2: e.target.value });
                                  setFree_2(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_2: e.target.value,
                                  });
                                  setCondition_2(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_2: e.target.value,
                                  });
                                  setCleaning_2(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_2}
                                onChange={(e) => {
                                  setData({ ...data, body_2: e.target.value });
                                  setBody_2(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_2: e.target.value,
                                });
                                setProvided_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_3}
                            onChange={(e) => {
                              setData({ ...data, date_3: e.target.value });
                              setDate_3(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_3}
                              onChange={(e) => {
                                setData({ ...data, loco_no_3: e.target.value });
                                setLoco_no_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_3}
                              onChange={(e) => {
                                setData({ ...data, reason_3: e.target.value });
                                setReason_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_3}
                              onChange={(e) => {
                                setData({ ...data, defect_3: e.target.value });
                                setDefect_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_3}
                            onChange={(e) => {
                              setData({ ...data, date_OH_3: e.target.value });
                              setDate_OH_3(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_3}
                                onChange={(e) => {
                                  setData({ ...data, oh_3: e.target.value });
                                  setOh_3(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_3}
                                onChange={(e) => {
                                  setData({ ...data, free_3: e.target.value });
                                  setFree_3(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_3: e.target.value,
                                  });
                                  setCondition_3(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_3: e.target.value,
                                  });
                                  setCleaning_3(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_3}
                                onChange={(e) => {
                                  setData({ ...data, body_3: e.target.value });
                                  setBody_3(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_3: e.target.value,
                                });
                                setProvided_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_4}
                            onChange={(e) => {
                              setData({ ...data, date_4: e.target.value });
                              setDate_4(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_4}
                              onChange={(e) => {
                                setData({ ...data, loco_no_4: e.target.value });
                                setLoco_no_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_4}
                              onChange={(e) => {
                                setData({ ...data, reason_4: e.target.value });
                                setReason_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_4}
                              onChange={(e) => {
                                setData({ ...data, defect_4: e.target.value });
                                setDefect_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_4}
                            onChange={(e) => {
                              setData({ ...data, date_OH_4: e.target.value });
                              setDate_OH_4(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_4}
                                onChange={(e) => {
                                  setData({ ...data, oh_4: e.target.value });
                                  setOh_4(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_4}
                                onChange={(e) => {
                                  setData({ ...data, free_4: e.target.value });
                                  setFree_4(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_4: e.target.value,
                                  });
                                  setCondition_4(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_4: e.target.value,
                                  });
                                  setCleaning_4(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_4}
                                onChange={(e) => {
                                  setData({ ...data, body_4: e.target.value });
                                  setBody_4(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_4: e.target.value,
                                });
                                setProvided_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_5}
                            onChange={(e) => {
                              setData({ ...data, date_5: e.target.value });
                              setDate_5(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_5}
                              onChange={(e) => {
                                setData({ ...data, loco_no_5: e.target.value });
                                setLoco_no_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_5}
                              onChange={(e) => {
                                setData({ ...data, reason_5: e.target.value });
                                setReason_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_5}
                              onChange={(e) => {
                                setData({ ...data, defect_5: e.target.value });
                                setDefect_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_5}
                            onChange={(e) => {
                              setData({ ...data, date_OH_5: e.target.value });
                              setDate_OH_5(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_5}
                                onChange={(e) => {
                                  setData({ ...data, oh_5: e.target.value });
                                  setOh_5(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_5}
                                onChange={(e) => {
                                  setData({ ...data, free_5: e.target.value });
                                  setFree_5(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_5: e.target.value,
                                  });
                                  setCondition_5(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_5: e.target.value,
                                  });
                                  setCleaning_5(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_5}
                                onChange={(e) => {
                                  setData({ ...data, body_5: e.target.value });
                                  setBody_5(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_5: e.target.value,
                                });
                                setProvided_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_6}
                            onChange={(e) => {
                              setData({ ...data, date_6: e.target.value });
                              setDate_6(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_6}
                              onChange={(e) => {
                                setData({ ...data, loco_no_6: e.target.value });
                                setLoco_no_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_6}
                              onChange={(e) => {
                                setData({ ...data, reason_6: e.target.value });
                                setReason_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_6}
                              onChange={(e) => {
                                setData({ ...data, defect_6: e.target.value });
                                setDefect_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_6}
                            onChange={(e) => {
                              setData({ ...data, date_OH_6: e.target.value });
                              setDate_OH_6(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_6}
                                onChange={(e) => {
                                  setData({ ...data, oh_6: e.target.value });
                                  setOh_6(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_6}
                                onChange={(e) => {
                                  setData({ ...data, free_6: e.target.value });
                                  setFree_6(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_6}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_6: e.target.value,
                                  });
                                  setCondition_6(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_6}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_6: e.target.value,
                                  });
                                  setCleaning_6(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_6}
                                onChange={(e) => {
                                  setData({ ...data, body_6: e.target.value });
                                  setBody_6(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_6: e.target.value,
                                });
                                setProvided_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_7}
                            onChange={(e) => {
                              setData({ ...data, date_7: e.target.value });
                              setDate_7(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_7}
                              onChange={(e) => {
                                setData({ ...data, loco_no_7: e.target.value });
                                setLoco_no_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_7}
                              onChange={(e) => {
                                setData({ ...data, reason_7: e.target.value });
                                setReason_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_7}
                              onChange={(e) => {
                                setData({ ...data, defect_7: e.target.value });
                                setDefect_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_7}
                            onChange={(e) => {
                              setData({ ...data, date_OH_7: e.target.value });
                              setDate_OH_7(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_7}
                                onChange={(e) => {
                                  setData({ ...data, oh_7: e.target.value });
                                  setOh_7(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_7}
                                onChange={(e) => {
                                  setData({ ...data, free_7: e.target.value });
                                  setFree_7(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_7}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_7: e.target.value,
                                  });
                                  setCondition_7(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_7}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_7: e.target.value,
                                  });
                                  setCleaning_7(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_7}
                                onChange={(e) => {
                                  setData({ ...data, body_7: e.target.value });
                                  setBody_7(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_7: e.target.value,
                                });
                                setProvided_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_8}
                            onChange={(e) => {
                              setData({ ...data, date_8: e.target.value });
                              setDate_8(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_8}
                              onChange={(e) => {
                                setData({ ...data, loco_no_8: e.target.value });
                                setLoco_no_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_8}
                              onChange={(e) => {
                                setData({ ...data, reason_8: e.target.value });
                                setReason_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_8}
                              onChange={(e) => {
                                setData({ ...data, defect_8: e.target.value });
                                setDefect_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_8}
                            onChange={(e) => {
                              setData({ ...data, date_OH_8: e.target.value });
                              setDate_OH_8(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_8}
                                onChange={(e) => {
                                  setData({ ...data, oh_8: e.target.value });
                                  setOh_8(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_8}
                                onChange={(e) => {
                                  setData({ ...data, free_8: e.target.value });
                                  setFree_8(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_8}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_8: e.target.value,
                                  });
                                  setCondition_8(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_8}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_8: e.target.value,
                                  });
                                  setCleaning_8(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_8}
                                onChange={(e) => {
                                  setData({ ...data, body_8: e.target.value });
                                  setBody_8(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_8: e.target.value,
                                });
                                setProvided_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_9}
                            onChange={(e) => {
                              setData({ ...data, date_9: e.target.value });
                              setDate_9(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_9}
                              onChange={(e) => {
                                setData({ ...data, loco_no_9: e.target.value });
                                setLoco_no_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_9}
                              onChange={(e) => {
                                setData({ ...data, reason_9: e.target.value });
                                setReason_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_9}
                              onChange={(e) => {
                                setData({ ...data, defect_9: e.target.value });
                                setDefect_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_9}
                            onChange={(e) => {
                              setData({ ...data, date_OH_9: e.target.value });
                              setDate_OH_9(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_9}
                                onChange={(e) => {
                                  setData({ ...data, oh_9: e.target.value });
                                  setOh_9(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_9}
                                onChange={(e) => {
                                  setData({ ...data, free_9: e.target.value });
                                  setFree_9(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_9}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_9: e.target.value,
                                  });
                                  setCondition_9(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_9}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_9: e.target.value,
                                  });
                                  setCleaning_9(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_9}
                                onChange={(e) => {
                                  setData({ ...data, body_9: e.target.value });
                                  setBody_9(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_9: e.target.value,
                                });
                                setProvided_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_10}
                            onChange={(e) => {
                              setData({ ...data, date_10: e.target.value });
                              setDate_10(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  loco_no_10: e.target.value,
                                });
                                setLoco_no_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_10}
                              onChange={(e) => {
                                setData({ ...data, reason_10: e.target.value });
                                setReason_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_10}
                              onChange={(e) => {
                                setData({ ...data, defect_10: e.target.value });
                                setDefect_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_10}
                            onChange={(e) => {
                              setData({ ...data, date_OH_10: e.target.value });
                              setDate_OH_10(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_10}
                                onChange={(e) => {
                                  setData({ ...data, oh_10: e.target.value });
                                  setOh_10(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_10}
                                onChange={(e) => {
                                  setData({ ...data, free_10: e.target.value });
                                  setFree_10(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_10}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_10: e.target.value,
                                  });
                                  setCondition_10(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_10}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_10: e.target.value,
                                  });
                                  setCleaning_10(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_10}
                                onChange={(e) => {
                                  setData({ ...data, body_10: e.target.value });
                                  setBody_10(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_10: e.target.value,
                                });
                                setProvided_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_11}
                            onChange={(e) => {
                              setData({ ...data, date_11: e.target.value });
                              setDate_11(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  loco_no_11: e.target.value,
                                });
                                setLoco_no_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_11}
                              onChange={(e) => {
                                setData({ ...data, reason_11: e.target.value });
                                setReason_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_11}
                              onChange={(e) => {
                                setData({ ...data, defect_11: e.target.value });
                                setDefect_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_11}
                            onChange={(e) => {
                              setData({ ...data, date_OH_11: e.target.value });
                              setDate_OH_11(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.oh_11}
                                onChange={(e) => {
                                  setData({ ...data, oh_11: e.target.value });
                                  setOh_11(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.free_11}
                                onChange={(e) => {
                                  setData({ ...data, free_11: e.target.value });
                                  setFree_11(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.condition_11}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    condition_11: e.target.value,
                                  });
                                  setCondition_11(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cleaning_11}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cleaning_11: e.target.value,
                                  });
                                  setCleaning_11(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.body_11}
                                onChange={(e) => {
                                  setData({ ...data, body_11: e.target.value });
                                  setBody_11(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_11: e.target.value,
                                });
                                setProvided_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_12}
                            onChange={(e) => {
                              setData({ ...data, date_12: e.target.value });
                              setDate_12(e.target.value);
                            }}
                          ></input>
                        </th>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.loco_no_12}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  loco_no_12: e.target.value,
                                });
                                setLoco_no_12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.reason_12}
                              onChange={(e) => {
                                setData({ ...data, reason_12: e.target.value });
                                setReason_12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.defect_12}
                              onChange={(e) => {
                                setData({ ...data, defect_12: e.target.value });
                                setDefect_12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <input
                            id="Date"
                            type="date"
                            className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                            placeholder="Date"
                            aria-label="Date"
                            value={data.date_OH_12}
                            onChange={(e) => {
                              setData({ ...data, date_OH_12: e.target.value });
                              setDate_OH_12(e.target.value);
                            }}
                          ></input>
                        </td>
                        <tr>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.of_12}
                                onChange={(e) => {
                                  setData({ ...data, of_12: e.target.value });
                                  setOf_12(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>

                          <td className="border" colSpan="10"></td>
                          <td className="border" colSpan="10">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.c_12}
                                onChange={(e) => {
                                  setData({ ...data, c_12: e.target.value });
                                  setC_12(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>

                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border">
                            <div className="flex items-center justify-center">
                              <input
                                id="Make"
                                type="text"
                                className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                                placeholder="Make"
                                aria-label="Make"
                                value={data.cb_12}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    cb_12: e.target.value,
                                  });
                                  setCb_12(e.target.value);
                                }}
                              ></input>
                            </div>
                          </td>
                          <td className="invisible-border" colSpan="10"></td>
                          <td className="invisible-border" colSpan="10"></td>
                        </tr>
                        <td className="border">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_12}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_12: e.target.value,
                                });
                                setProvided_12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
                <br></br>
                <div className="overflow-x-auto">
                  <table
                    id="id2"
                    className="table border-collapse overflow-x-auto"
                  >
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
                            Apply pressure 10 kg/cm2 at port no. <br></br>1{" "}
                            <br></br>
                            No air leakage through port 2 & 3
                          </div>
                        </th>
                        <th colSpan="">
                          <div className="flex items-center justify-center">
                            Apply 5.0 or 3.0 kg/cm2 pressure at port no. 2 Air
                            from port no. 1 should flow through port no. 3
                          </div>
                        </th>
                      </tr>

                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_1: e.target.value,
                                });
                                setApply_pressure_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_1}
                              onChange={(e) => {
                                setData({ ...data, apply_3_1: e.target.value });
                                setApply_3_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_1}
                              onChange={(e) => {
                                setData({ ...data, leakage_1: e.target.value });
                                setLeakage_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_1: e.target.value,
                                });
                                setProvided_in_loco_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_1: e.target.value,
                                });
                                setTechnician_sign_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_1: e.target.value,
                                });
                                setSupervisior_sign_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_2: e.target.value,
                                });
                                setApply_pressure_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_2}
                              onChange={(e) => {
                                setData({ ...data, apply_3_2: e.target.value });
                                setApply_3_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_2}
                              onChange={(e) => {
                                setData({ ...data, leakage_2: e.target.value });
                                setLeakage_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_2: e.target.value,
                                });
                                setProvided_in_loco_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_2: e.target.value,
                                });
                                setTechnician_sign_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_2: e.target.value,
                                });
                                setSupervisior_sign_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_3: e.target.value,
                                });
                                setApply_pressure_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_3}
                              onChange={(e) => {
                                setData({ ...data, apply_3_3: e.target.value });
                                setApply_3_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_3}
                              onChange={(e) => {
                                setData({ ...data, leakage_3: e.target.value });
                                setLeakage_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_3: e.target.value,
                                });
                                setProvided_in_loco_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_3: e.target.value,
                                });
                                setTechnician_sign_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_3: e.target.value,
                                });
                                setSupervisior_sign_3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_4: e.target.value,
                                });
                                setApply_pressure_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_4}
                              onChange={(e) => {
                                setData({ ...data, apply_3_4: e.target.value });
                                setApply_3_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_4}
                              onChange={(e) => {
                                setData({ ...data, leakage_4: e.target.value });
                                setLeakage_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_4: e.target.value,
                                });
                                setProvided_in_loco_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_4: e.target.value,
                                });
                                setTechnician_sign_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_4: e.target.value,
                                });
                                setSupervisior_sign_4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_5: e.target.value,
                                });
                                setApply_pressure_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_5}
                              onChange={(e) => {
                                setData({ ...data, apply_3_5: e.target.value });
                                setApply_3_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_5}
                              onChange={(e) => {
                                setData({ ...data, leakage_5: e.target.value });
                                setLeakage_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_5: e.target.value,
                                });
                                setProvided_in_loco_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_5: e.target.value,
                                });
                                setTechnician_sign_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_5: e.target.value,
                                });
                                setSupervisior_sign_5(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_6: e.target.value,
                                });
                                setApply_pressure_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_6}
                              onChange={(e) => {
                                setData({ ...data, apply_3_6: e.target.value });
                                setApply_3_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_6}
                              onChange={(e) => {
                                setData({ ...data, leakage_6: e.target.value });
                                setLeakage_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_6: e.target.value,
                                });
                                setProvided_in_loco_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_6: e.target.value,
                                });
                                setTechnician_sign_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_6: e.target.value,
                                });
                                setSupervisior_sign_6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_7: e.target.value,
                                });
                                setApply_pressure_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_7}
                              onChange={(e) => {
                                setData({ ...data, apply_3_7: e.target.value });
                                setApply_3_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_7}
                              onChange={(e) => {
                                setData({ ...data, leakage_7: e.target.value });
                                setLeakage_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_7: e.target.value,
                                });
                                setProvided_in_loco_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_7: e.target.value,
                                });
                                setTechnician_sign_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_7: e.target.value,
                                });
                                setSupervisior_sign_7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_8: e.target.value,
                                });
                                setApply_pressure_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_8}
                              onChange={(e) => {
                                setData({ ...data, apply_3_8: e.target.value });
                                setApply_3_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_8}
                              onChange={(e) => {
                                setData({ ...data, leakage_8: e.target.value });
                                setLeakage_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_8: e.target.value,
                                });
                                setProvided_in_loco_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_8: e.target.value,
                                });
                                setTechnician_sign_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_8: e.target.value,
                                });
                                setSupervisior_sign_8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_9: e.target.value,
                                });
                                setApply_pressure_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_9}
                              onChange={(e) => {
                                setData({ ...data, apply_3_9: e.target.value });
                                setApply_3_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_9}
                              onChange={(e) => {
                                setData({ ...data, leakage_9: e.target.value });
                                setLeakage_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_9: e.target.value,
                                });
                                setProvided_in_loco_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_9: e.target.value,
                                });
                                setTechnician_sign_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_9: e.target.value,
                                });
                                setSupervisior_sign_9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_10: e.target.value,
                                });
                                setApply_pressure_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_3_10: e.target.value,
                                });
                                setApply_3_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  leakage_10: e.target.value,
                                });
                                setLeakage_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_10: e.target.value,
                                });
                                setProvided_in_loco_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_10: e.target.value,
                                });
                                setTechnician_sign_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_10: e.target.value,
                                });
                                setSupervisior_sign_10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_pressure_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_pressure_11: e.target.value,
                                });
                                setApply_pressure_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.apply_3_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  apply_3_11: e.target.value,
                                });
                                setApply_3_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>

                        <td rowSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.leakage_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  leakage_11: e.target.value,
                                });
                                setLeakage_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="2  ">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.provided_in_loco_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  provided_in_loco_11: e.target.value,
                                });
                                setProvided_in_loco_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.technician_sign_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  technician_sign_11: e.target.value,
                                });
                                setTechnician_sign_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td colSpan="1">
                          <div className="flex items-center justify-center">
                            <input
                              id="Make"
                              type="text"
                              className="text-sm placeholder-center text-center form-control custom-input border border-gray-300 rounded-md px-2 py-2"
                              placeholder="Make"
                              aria-label="Make"
                              value={data.supervisior_sign_11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  supervisior_sign_11: e.target.value,
                                });
                                setSupervisior_sign_11(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
              </div>
              <footer>
                <div className="container mx-auto p-4">
                  <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                      <input
                        type="text"
                        className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                        placeholder="ID"
                        aria-label="ID"
                        required
                        value={data.uid}
                        onChange={(e) => {
                          setData({ ...data, uid: e.target.value });
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
              </footer>
              <br></br>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-500 py-2 px-8 rounded shadow border-2  border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview from
              </button>
              <button
                className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default AppC2;
