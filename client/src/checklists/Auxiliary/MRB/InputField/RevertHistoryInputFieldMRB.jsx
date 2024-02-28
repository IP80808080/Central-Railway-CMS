import { useState, useEffect } from "react";
import Details from "../TemplateMRB/details";
import Table from "../TemplateMRB/table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Footer from "../TemplateMRB/footer";
import "./mrbindex.css";

function RevertHistoryInputFieldMRB() {
  const [showForm, setShowForm] = useState(false);
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [commissioningDate, setcommissioningDate] = useState("");
  const [motor_no, setMotor_no] = useState("");
  const [mek1, setMek1] = useState("");
  const [productionDate, setproductionDate] = useState("");
  const [vastvik, setVastvik] = useState("");
  const [vastvik1, setVastvik1] = useState("");
  const [manak3, setManak3] = useState("");
  const [uv, setUv] = useState("");
  const [vw, setVw] = useState("");
  const [wu, setWu] = useState("");
  const [vastvik4, setVastvik4] = useState("");
  const [uv5, setUv5] = useState("");
  const [vw5, setVw5] = useState("");
  const [wu5, setWu5] = useState("");
  const [vastvik6, setVastvik6] = useState("");
  const [vastvik7, setVastvik7] = useState("");
  const [vastvik8, setVastvik8] = useState("");
  const [vastvik9, setVastvik9] = useState("");
  const [vastvik10, setVastvik10] = useState("");
  const [vastvik11, setVastvik11] = useState("");
  const [vastvik11_1, setVastvik11_1] = useState("");
  const [vastvik12, setVastvik12] = useState("");
  const [vastvik13, setVastvik13] = useState("");
  const [vastvik14, setVastvik14] = useState("");
  const [uv15, setUv15] = useState("");
  const [vw15, setVw15] = useState("");
  const [wu15, setWu15] = useState("");
  const [uv15_1, setUv15_1] = useState("");
  const [vw15_1, setVw15_1] = useState("");
  const [wu15_1, setWu15_1] = useState("");
  const [de, setDe] = useState("");
  const [nde, setNde] = useState("");
  const [de_17, setDe_17] = useState("");
  const [Body, setBody] = useState("");
  const [nde_17, setNde_17] = useState("");
  const [vastvik_18, setVastvik_18] = useState("");
  const [tarik_18, setTarik_18] = useState("");
  const [tarik_18_1, setTarik_18_1] = useState("");
  const [tarik_18_2, setTarik_18_2] = useState("");
  const [vastvik_18_2, setVastvik_18_2] = useState("");
  const [vastvik19, setVastvik19] = useState("");
  const [manak20, setManak20] = useState("");
  const [vastvik20, setVastvik20] = useState("");
  const [sign, setSign] = useState("");
  const [mek2, setMek2] = useState("");
  const [manak_18, setManak_18] = useState("");
  const [manak_18_1, setManak_18_1] = useState("");
  const [manak_18_2, setManak_18_2] = useState("");
  const [uid, setUID] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    equipmentNumber: "",
    commissioningDate: "",
    motor_no: "",
    mek1: "",
    productionDate: "",
    vastvik: "",
    vastvik1: "",
    manak3: "",
    uv: "",
    vw: "",
    wu: "",
    vastvik4: "",
    uv5: "",
    vw5: "",
    wu5: "",
    vastvik6: "",
    vastvik7: "",
    vastvik8: "",
    vastvik9: "",
    vastvik10: "",
    vastvik11: "",
    vastvik11_1: "",
    vastvik12: "",
    vastvik13: "",
    vastvik14: "",
    uv15: "",
    vw15: "",
    wu15: "",
    uv15_1: "",
    vw15_1: "",
    wu15_1: "",
    de: "",
    nde: "",
    de_17: "",
    Body: "",
    nde_17: "",
    vastvik_18: "",
    tarik_18: "",
    tarik_18_1: "",
    tarik_18_2: "",
    vastvik_18_2: "",
    vastvik19: "",
    manak20: "",
    vastvik20: "",
    mek2: "",
    manak_18: "",
    manak_18_1: "",
    manak_18_2: "",
    uid: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`/revert/Au-mrb/${uid}`);
      const fetchedData = response.data; // Assuming response.data contains the fetched data
      setData({
        equipmentNumber: fetchedData.equipmentNumber,
        commissioningDate: fetchedData.commissioningDate,
        motor_no: fetchedData.motor_no,
        mek1: fetchedData.mek1,
        productionDate: fetchedData.productionDate,
        vastvik: fetchedData.vastvik,
        vastvik1: fetchedData.vastvik1,
        manak3: fetchedData.manak3,
        uv: fetchedData.uv,
        vw: fetchedData.vw,
        wu: fetchedData.wu,
        vastvik4: fetchedData.vastvik4,
        uv5: fetchedData.uv5,
        vw5: fetchedData.vw5,
        wu5: fetchedData.wu5,
        vastvik6: fetchedData.vastvik6,
        vastvik7: fetchedData.vastvik7,
        vastvik8: fetchedData.vastvik8,
        vastvik9: fetchedData.vastvik9,
        vastvik10: fetchedData.vastvik10,
        vastvik11: fetchedData.vastvik11,
        vastvik11_1: fetchedData.vastvik11_1,
        vastvik12: fetchedData.vastvik12,
        vastvik13: fetchedData.vastvik13,
        vastvik14: fetchedData.vastvik14,
        uv15: fetchedData.uv15,
        vw15: fetchedData.vw15,
        wu15: fetchedData.wu15,
        uv15_1: fetchedData.uv15_1,
        vw15_1: fetchedData.vw15_1,
        wu15_1: fetchedData.wu15_1,
        de: fetchedData.de,
        nde: fetchedData.nde,
        de_17: fetchedData.de_17,
        Body: fetchedData.Body,
        nde_17: fetchedData.nde_17,
        vastvik_18: fetchedData.vastvik_18,
        tarik_18: fetchedData.tarik_18,
        tarik_18_1: fetchedData.tarik_18_1,
        tarik_18_2: fetchedData.tarik_18_2,
        vastvik_18_2: fetchedData.vastvik_18_2,
        vastvik19: fetchedData.vastvik19,
        manak20: fetchedData.manak20,
        vastvik20: fetchedData.vastvik20,
        mek2: fetchedData.mek2,
        manak_18: fetchedData.manak_18,
        manak_18_1: fetchedData.manak_18_1,
        manak_18_2: fetchedData.manak_18_2,
        uid: fetchedData.uid,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      equipmentNumber,
      commissioningDate,
      motor_no,
      mek1,
      productionDate,
      vastvik,
      vastvik1,
      manak3,
      uv,
      vw,
      wu,
      vastvik4,
      uv5,
      vw5,
      wu5,
      vastvik6,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik11_1,
      vastvik12,
      vastvik13,
      vastvik14,
      uv15,
      vw15,
      wu15,
      uv15_1,
      vw15_1,
      wu15_1,
      de,
      nde,
      de_17,
      Body,
      nde_17,
      vastvik_18,
      tarik_18,
      tarik_18_1,
      tarik_18_2,
      vastvik_18_2,
      vastvik19,
      manak20,
      vastvik20,
      mek2,
      manak_18,
      manak_18_1,
      manak_18_2,
      uid,
    } = data;
    try {
      const { data } = await axios.post("/resubmit/mrb", {
        equipmentNumber,
        commissioningDate,
        motor_no,
        mek1,
        productionDate,
        vastvik,
        vastvik1,
        manak3,
        uv,
        vw,
        wu,
        vastvik4,
        uv5,
        vw5,
        wu5,
        vastvik6,
        vastvik7,
        vastvik8,
        vastvik9,
        vastvik10,
        vastvik11,
        vastvik11_1,
        vastvik12,
        vastvik13,
        vastvik14,
        uv15,
        vw15,
        wu15,
        uv15_1,
        vw15_1,
        wu15_1,
        de,
        nde,
        de_17,
        Body,
        nde_17,
        vastvik_18,
        tarik_18,
        tarik_18_1,
        tarik_18_2,
        vastvik_18_2,
        vastvik19,
        manak20,
        vastvik20,
        mek2,
        manak_18,
        manak_18_1,
        manak_18_2,
        uid,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Submitted successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during checklist submission:", error);
      toast.error("Error during checklist submission");
    }
  };

  function formatDateString(inputDate) {
    return new Date(inputDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                formatDateString={formatDateString}
                equipmentNumber={equipmentNumber}
                mek2={mek2}
                motor_no={motor_no}
                commissioningDate={commissioningDate}
                productionDate={productionDate}
                mek1={mek1}
              />
              <br></br>

              <Table
                productionDate={productionDate}
                vastvik={vastvik}
                vastvik1={vastvik1}
                manak3={manak3}
                uv={uv}
                vw={vw}
                wu={wu}
                vastvik4={vastvik4}
                uv5={uv5}
                vw5={vw5}
                wu5={wu5}
                vastvik6={vastvik6}
                vastvik7={vastvik7}
                vastvik8={vastvik8}
                vastvik9={vastvik9}
                vastvik10={vastvik10}
                vastvik11={vastvik11}
                vastvik11_1={vastvik11_1}
                vastvik12={vastvik12}
                vastvik13={vastvik13}
                vastvik14={vastvik14}
                uv15={uv15}
                vw15={vw15}
                wu15={wu15}
                uv15_1={uv15_1}
                vw15_1={vw15_1}
                wu15_1={wu15_1}
                de={de}
                nde={nde}
                de_17={de_17}
                Body={Body}
                nde_17={nde_17}
                vastvik_18={vastvik_18}
                tarik_18={tarik_18}
                tarik_18_1={tarik_18_1}
                tarik_18_2={tarik_18_2}
                vastvik_18_2={vastvik_18_2}
                vastvik19={vastvik19}
                manak20={manak20}
                vastvik20={vastvik20}
                manak_18={manak_18}
                manak_18_1={manak_18_1}
                manak_18_2={manak_18_2}
              />

              <Footer sign={sign} uid={uid} handlePrint={handlePrint} />
              <br></br>

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
        ) : (
          <>
            <div className="flex flex-col justify-center container overflow-x">
              <div className="text-center">
                <header>
                  <h1 className="custom-font-size">
                    <p className="custom-font-size-sm">
                      विद्युत लोको शेड, भुसावल/मध्य रेल
                    </p>
                    <p className="custom-font-size">
                      ELECTRIC LOCO SHED, BSL/C.R.
                    </p>
                    <u>
                      <p className="custom-font-size-sm">
                        चेक शीट एम.आर.बी के लिए (CHECK SHEET FOR MRB)
                      </p>
                    </u>
                  </h1>
                </header>
              </div>

              <div className="container grid justify-center">
                <div className="container mt-5">
                  <div className="grid grid-cols-3 gap-4 px-8">
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="उपकरण नंबर"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>उपकरण नंबर: </span>
                      </label>
                      <input
                        id="उपकरण नंबर"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="उपकरण नंबर"
                        aria-label="उपकरण नंबर"
                        value={data.equipmentNumber}
                        onChange={(e) => {
                          setData({ ...data, equipmentNumber: e.target.value });
                          setEquipmentNumber(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मेकa"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मेक: </span>
                      </label>
                      <input
                        id="मेकa"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मेक"
                        aria-label="मेक"
                        value={data.mek1}
                        onChange={(e) => {
                          setData({ ...data, mek1: e.target.value });
                          setMek1(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="कमिशनींग दिनांक"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          कमिशनींग दिनांक:{" "}
                        </span>
                      </label>
                      <input
                        id="कमिशनींग दिनांक"
                        type="date"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="कमिशनींग दिनांक"
                        aria-label="कमिशनींग दिनांक"
                        value={data.commissioningDate}
                        onChange={(e) => {
                          setData({
                            ...data,
                            commissioningDate: e.target.value,
                          });
                          setcommissioningDate(e.target.value); // Make sure to have a state variable and setter for commissioningDate
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मोटर नंबर"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मोटर नंबर: </span>
                      </label>
                      <input
                        id="मोटर नंबर"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मोटर नंबर"
                        aria-label="मोटर नंबर"
                        value={data.motor_no}
                        onChange={(e) => {
                          setData({ ...data, motor_no: e.target.value });
                          setMotor_no(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="मेकb"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>मेक: </span>
                      </label>
                      <input
                        id="मेकb"
                        type="text"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="मेक"
                        aria-label="मेक"
                        value={data.mek2}
                        onChange={(e) => {
                          setData({ ...data, mek2: e.target.value });
                          setMek2(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="निर्मिती दिनांक"
                        className="col-form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          निर्मिती दिनांक:{" "}
                        </span>
                      </label>
                      <input
                        id="निर्मिती दिनांक"
                        type="date"
                        className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                        placeholder="निर्मिती दिनांक"
                        aria-label="निर्मिती दिनांक"
                        value={data.productionDate}
                        onChange={(e) => {
                          setData({ ...data, productionDate: e.target.value });
                          setproductionDate(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="max-w-full overflow-x-auto">
                  <table id="id1" className="table border-collapse">
                    <thead>
                      <tr>
                        <th className="border" scope="col">
                          अ.क्र
                        </th>
                        <th className="border" scope="col">
                          मानक परीक्षण/ गतिविधि
                        </th>
                        <th className="border" scope="col">
                          मानक STANDARDS
                        </th>
                        <th className="border" scope="col">
                          वास्तविक
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <label
                            htmlFor="पुर्व-परिक्षण"
                            className="form-label custom-label"
                          ></label>
                          पुर्व परिक्षण a) IR व्हैल्यु 500 V मेगर से
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            10 मेगा ओह्म (कम से कम)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="पुर्व-परिक्षण"
                              type="text"
                              className="form-control custom-input border border-gray-300 rounded-md p-2 placeholder-center text-center "
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik}
                              onChange={(e) => {
                                setData({ ...data, vastvik: e.target.value });
                                setVastvik(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <label
                            htmlFor="सफाई "
                            className="form-label custom-label"
                          ></label>
                          सफाई ,बेकींग, वार्निशिंग, बेकींग (एस.एम.आई.86 अनुसार)‌
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            किया
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सफाई "
                              type="text"
                              className="form-control custom-input border border-gray-300 rounded-md p-2 placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik1}
                              onChange={(e) => {
                                setData({ ...data, vastvik1: e.target.value });
                                setVastvik1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <label
                            htmlFor="वाईंडींग "
                            className="form-label custom-label"
                          ></label>
                          वाईंडींग रेजिस्टन्स (UV-VW-WU)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सफाई "
                              type="text"
                              className="border border-gray-300 rounded-md p-2 form-control custom-input placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak3}
                              onChange={(e) => {
                                setData({ ...data, manak3: e.target.value });
                                setManak3(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-UV"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      UV:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-UV"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="UV"
                                    aria-label="UV"
                                    value={data.uv}
                                    onChange={(e) => {
                                      setData({ ...data, uv: e.target.value });
                                      setUv(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-VW"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      VW:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-VW"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="VW"
                                    aria-label="VW"
                                    value={data.vw}
                                    onChange={(e) => {
                                      setData({ ...data, vw: e.target.value });
                                      setVw(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-WU"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      WU:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-WU"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="WU"
                                    aria-label="WU"
                                    value={data.wu}
                                    onChange={(e) => {
                                      setData({ ...data, wu: e.target.value });
                                      setWu(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <label
                            htmlFor="सर्ज"
                            className="form-label custom-label"
                          ></label>
                          सर्ज कम्पॅरिजन टेस्ट 3 के.वी. पर (एस.एम.आई.149)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            नार्मल
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="सर्ज"
                              type="text"
                              className=" text-center form-control border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik4}
                              onChange={(e) => {
                                setData({ ...data, vastvik4: e.target.value });
                                setVastvik4(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <label
                            htmlFor=""
                            className="form-label custom-label"
                          ></label>
                          इंडक्टंस माप करें
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            फेज से फेज के बीच अंतर 10% से ज्यादा नही
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-UV"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      UV:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-UV"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="UV"
                                    aria-label="UV"
                                    value={data.uv5}
                                    onChange={(e) => {
                                      setData({ ...data, uv5: e.target.value });
                                      setUv5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-VW"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      VW:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-VW"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="VW"
                                    aria-label="VW"
                                    value={data.vw5}
                                    onChange={(e) => {
                                      setData({ ...data, vw5: e.target.value });
                                      setVw5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-WU"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      WU:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-WU"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="WU"
                                    aria-label="WU"
                                    value={data.wu5}
                                    onChange={(e) => {
                                      setData({ ...data, wu5: e.target.value });
                                      setWu5(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>
                          <label
                            htmlFor="रोटर"
                            className="form-label custom-label"
                          ></label>
                          रोटर का ग्रोव्हलर टेस्ट (एस.एम.आई.163)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            नार्मल
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="रोटर"
                              type="text"
                              className="border text-center border-gray-300 rounded-md p-2 form-control custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik6}
                              onChange={(e) => {
                                setData({ ...data, vastvik6: e.target.value });
                                setVastvik6(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>
                          <label
                            htmlFor="DPT"
                            className="form-label custom-label"
                          ></label>
                          ईम्पिलर की DPT
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कोई क्रॅक नही
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="DPT"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik7}
                              onChange={(e) => {
                                setData({ ...data, vastvik7: e.target.value });
                                setVastvik7(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>
                          <label
                            htmlFor="स्टेटर-8"
                            className="form-label custom-label"
                          ></label>
                          स्टेटर बॉडी मे एंड शील्ड बोल्ट के थ्रेड कंडीशन
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            सामान्य
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="स्टेटर-8"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik8}
                              onChange={(e) => {
                                setData({ ...data, vastvik8: e.target.value });
                                setVastvik8(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>
                          <label
                            htmlFor="बिअरिंग"
                            className="form-label custom-label"
                          ></label>
                          बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            40.002 से 40.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="बिअरिंग"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik9}
                              onChange={(e) => {
                                setData({ ...data, vastvik9: e.target.value });
                                setVastvik9(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>
                          <label
                            htmlFor="बिअरिंग10"
                            className="form-label custom-label"
                          ></label>
                          बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            सामान्य
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="बिअरिंग10"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik10}
                              onChange={(e) => {
                                setData({ ...data, vastvik10: e.target.value });
                                setVastvik10(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="कव्हर्सa"
                              className="form-label custom-label"
                            ></label>
                            एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE)
                            (एस.एम.आई.16अनुसार) <br></br>(for Other make Except
                            CGL)
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="कव्हर्सb"
                              className="form-label custom-label"
                            ></label>
                            एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE)
                            (एस.एम.आई.16अनुसार) (for CGL Make)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            79.994 से 80.013 मी.मी.{" "}
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            89.994 to 90.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-2">
                            <div className="flex items-center justify-center">
                              <input
                                id="कव्हर्सa"
                                type="text"
                                className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.vastvik11}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    vastvik11: e.target.value,
                                  });
                                  setVastvik11(e.target.value);
                                }}
                              ></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="flex items-center justify-center">
                              <input
                                id="कव्हर्सb"
                                type="text"
                                className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.vastvik11_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    vastvik11_1: e.target.value,
                                  });
                                  setVastvik11_1(e.target.value);
                                }}
                              ></input>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td>
                          <label
                            htmlFor="एंड"
                            className="form-label custom-label"
                          ></label>
                          एंड कव्हर्स बोअर डाया नॉन ड्राईव्हींग एंड (NDE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            79.994 से 80.013 मी.मी.
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="एंड"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik12}
                              onChange={(e) => {
                                setData({ ...data, vastvik12: e.target.value });
                                setVastvik12(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td>
                          <label
                            htmlFor="लीड"
                            className="form-label custom-label"
                          ></label>
                          लीड,लग,टर्मीनल ब्लॉक पर कोई कार्य किया
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कोई कार्य किया तो लिखे
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="लीड"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik13}
                              onChange={(e) => {
                                setData({ ...data, vastvik13: e.target.value });
                                setVastvik13(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td>
                          <label
                            htmlFor="एसेम्बली"
                            className="form-label custom-label"
                          ></label>
                          एसेम्बली के बाद IR व्हॅल्यु
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कम से कम 10 MΩ
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="एसेम्बली"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik14}
                              onChange={(e) => {
                                setData({ ...data, vastvik14: e.target.value });
                                setVastvik14(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <br></br>15
                        </th>
                        <td>
                          <div className="row-sm-2">
                            <br></br>
                            <label
                              htmlFor="करंटa"
                              className="form-label custom-label"
                            ></label>
                            करंट (U-V-W)लाइट रन टेस्ट
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="करंटb"
                              className="form-label custom-label"
                            ></label>
                            करंट (U-V-W)लोड रन टेस्ट
                          </div>
                        </td>
                        <td>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            3.5 Amp Max{" "}
                          </div>
                          <br></br>

                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            8.5 Amp Max<br></br>
                            <br></br>
                          </div>
                        </td>
                        <td>
                          <div className="grid items-center justify-center">
                            <div className="grid grid-row-2 gap-4 ml-5">
                              <div className="flex items-center space-x-4">
                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-U"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      U
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-U"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="U"
                                    aria-label="U"
                                    value={data.uv15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        uv15: e.target.value,
                                      });
                                      setUv15(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-V"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      V
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-V"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="V"
                                    aria-label="V"
                                    value={data.vw15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        vw15: e.target.value,
                                      });
                                      setVw15(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-1">
                                  <label
                                    htmlFor="करंटa-W"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      W
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-W"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="W"
                                    aria-label="W"
                                    value={data.wu15}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        wu15: e.target.value,
                                      });
                                      setWu15(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>

                            <br></br>
                            <div className="grid grid-row-2 gap-4 ml-5">
                              <div className="flex items-center space-x-4">
                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-U"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      U
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-U"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="U"
                                    aria-label="U"
                                    value={data.uv15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        uv15_1: e.target.value,
                                      });
                                      setUv15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-V"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      V
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-V"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="V"
                                    aria-label="V"
                                    value={data.vw15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        vw15_1: e.target.value,
                                      });
                                      setVw15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>

                                <div className="row-span-2">
                                  <label
                                    htmlFor="करंटa-W"
                                    className="block col-form-label custom-label"
                                  >
                                    <div className="flex items-center justify-center">
                                      W
                                    </div>
                                  </label>
                                  <input
                                    id="करंटa-W"
                                    type="text"
                                    className="placeholder-center text-center form-input border border-gray-300 rounded-md p-2 custom-input w-16"
                                    placeholder="W"
                                    aria-label="W"
                                    value={data.wu15_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        wu15_1: e.target.value,
                                      });
                                      setWu15_1(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">16</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="SPMa"
                              className="form-label custom-label"
                            ></label>
                            SPM वाईब्रेशन मीटर रिडींग
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="SPMb"
                              className="form-label custom-label"
                            ></label>
                            (एस.एम.आई.58 अनुसार)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            हरा झोन
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            3.5 mm/sec (Max)
                          </div>
                        </td>
                        <td>
                          <br></br>
                          <div className="row-sm-2">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="SPMa"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      DE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="SPMa"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="DE"
                                    aria-label="DE"
                                    value={data.de}
                                    onChange={(e) => {
                                      setData({ ...data, de: e.target.value });
                                      setDe(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="SPMb"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      NDE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="SPMb"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="NDE"
                                    aria-label="NDE"
                                    value={data.nde}
                                    onChange={(e) => {
                                      setData({ ...data, nde: e.target.value });
                                      setNde(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">17</th>
                        <td>
                          <div className="row-sm-2">
                            <label
                              htmlFor="रन"
                              className="form-label custom-label"
                            ></label>
                            रन टेस्ट, तापमान बढना
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="रन"
                              className="form-label custom-label"
                            ></label>
                            DE/NDE/BODY 30 Min
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            वातावरण से 35°C ज्यादा अधिकतम
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-DE"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      DE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-DE"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="DE"
                                    aria-label="DE"
                                    value={data.de_17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        de_17: e.target.value,
                                      });
                                      setDe_17(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-Body"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      BODY:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-Body"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="BODY"
                                    aria-label="BODY"
                                    value={data.Body}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        Body: e.target.value,
                                      });
                                      setBody(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="रन-NDE"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      NDE:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="रन-NDE"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="NDE"
                                    aria-label="NDE"
                                    value={data.nde_17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        nde_17: e.target.value,
                                      });
                                      setNde_17(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th rowSpan="6">18</th>
                        <td>
                          <label
                            htmlFor=""
                            className="col-form-label custom-label"
                          >
                            <span className="whitespace-pre"> </span>
                            <u>मस्ट चेंज आईटम</u>
                          </label>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          a) DE Side बिअरिंग 6208 / C3- (Covered in PL 85010297)
                          सभी मेक के लिये, CGL छोड़कर
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया
                          </div>{" "}
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18a1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18a1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18: e.target.value,
                                  });
                                  setTarik_18(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18a2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18a2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18: e.target.value,
                                  });
                                  setManak_18(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          b) DE Side बिअरिंग 6308 / C3- CGL मेक मोटर के लिये
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया{" "}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18b1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18b1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18_1: e.target.value,
                                  });
                                  setTarik_18_1(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18b2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18b2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18_1: e.target.value,
                                  });
                                  setManak_18_1(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          c) NDE Side बिअरिंग 6208 / C3- सभी मेक के लिये
                          (Covered in PL 85010297)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदली किया
                          </div>{" "}
                        </td>
                        <td>
                          <div className="d-flex flex-row align-items-center">
                            <div className="row-sm-2">
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18c1"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">तारीख: </span>{" "}
                              </label>
                              <input
                                id="18c1"
                                type="date"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.tarik_18_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik_18_2: e.target.value,
                                  });
                                  setTarik_18_2(e.target.value);
                                }}
                              ></input>
                              <span style={{ whiteSpace: "pre" }}> </span>
                              <label
                                htmlFor="18c2"
                                className="col-form-label custom-label"
                              >
                                <span className="whitespace-pre">Make: </span>{" "}
                              </label>
                              <input
                                id="18c2"
                                type="text"
                                className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                placeholder="Enter"
                                aria-label=" "
                                value={data.manak_18_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    manak_18_2: e.target.value,
                                  });
                                  setManak_18_2(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>d) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
                        <td>
                          <div className="flex items-center justify-center">
                            लोकल आर ए पी
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_18}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_18: e.target.value,
                                });
                                setVastvik_18(e.target.value);
                              }}
                            ></input>
                          </div>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>e) रबर ग्रोमेट</td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदला / नही बदला
                          </div>{" "}
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik_18_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik_18_2: e.target.value,
                                });
                                setVastvik_18_2(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">19</th>
                        <td>
                          <label
                            htmlFor="नये"
                            className="form-label custom-label"
                          ></label>
                          नये पुर्जे एवं मटेरियल
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            यदि कोई हो
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="नये"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik19}
                              onChange={(e) => {
                                setData({ ...data, vastvik19: e.target.value });
                                setVastvik19(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">20</th>
                        <td>
                          <label
                            htmlFor="इम्पेलर"
                            className="form-label custom-label"
                          ></label>
                          इम्पेलर का मेक एवं निर्मिती दिनांक
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="इम्पेलरb"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.manak20}
                              onChange={(e) => {
                                setData({ ...data, manak20: e.target.value });
                                setManak20(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="इम्पेलरc"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik20}
                              onChange={(e) => {
                                setData({ ...data, vastvik20: e.target.value });
                                setVastvik20(e.target.value);
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
                      <label
                        htmlFor="तकनिशियन"
                        className="form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          तकनिशियन का नाम एवं हस्ताक्षर:{" "}
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                        placeholder="Name"
                        aria-label="Name"
                        value={sign}
                        onChange={(e) => setSign(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                      <label
                        htmlFor="तकनिशियन"
                        className="form-label custom-label"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          तकनिशियन का ID:{" "}
                        </span>
                      </label>
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
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor="सुपरवाईजर"
                        className="form-label custom-label"
                      >
                        सुपरवाईजर का नाम एवं हस्ताक्षर:
                      </label>
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

export default RevertHistoryInputFieldMRB;
