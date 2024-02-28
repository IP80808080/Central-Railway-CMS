import { useState } from "react";
import axios from "axios";
import Details from "../TemplateOCB/details";
import Table from "../TemplateOCB/table";
import Footer from "../TemplateOCB/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./ocbindex.css";

function AppOCB() {
  const [showForm, setShowForm] = useState(false);
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [mecPar, setmecPar] = useState("");
  const [commissioningDate, setcommissioningDate] = useState("");
  const [productionDate, setproductionDate] = useState("");
  const [u, setU] = useState("");
  const [v, setV] = useState("");
  const [w, setW] = useState("");
  const [vastvik2, setVastvik2] = useState("");
  const [uv3, setUv3] = useState("");
  const [vw3, setVw3] = useState("");
  const [wu3, setWu3] = useState("");
  const [vastvik4, setVastvik4] = useState("");
  const [uv5, setUv5] = useState("");
  const [vastvik7, setVastvik7] = useState("");
  const [vastvik8, setVastvik8] = useState("");
  const [vastvik9, setVastvik9] = useState("");
  const [vastvik10, setVastvik10] = useState("");
  const [vastvik11, setVastvik11] = useState("");
  const [vastvik12, setVastvik12] = useState("");
  const [vastvik13, setVastvik13] = useState("");
  const [vastvik14, setVastvik14] = useState("");
  const [vastvik15, setVastvik15] = useState("");
  const [u16, setU16] = useState("");
  const [v16, setV16] = useState("");
  const [w16, setW16] = useState("");
  const [u16_1, setU16_1] = useState("");
  const [de17, setDe17] = useState("");
  const [body18, setBody18] = useState("");
  const [de18, setDe18] = useState("");
  const [nde18, setNde18] = useState("");
  const [nde17, setNde17] = useState("");
  const [tarik19, setTarik19] = useState("");
  const [mek19, setMek19] = useState("");
  const [tarik19_1, setTarik19_1] = useState("");
  const [mek19_1, setMek19_1] = useState("");
  const [vastvik19_1, setVastvik19_1] = useState("");
  const [vastvik19_2, setVastvik19_2] = useState("");
  const [vastvik20, setVastvik20] = useState("");
  const [vastvik21, setVastvik21] = useState("");
  const [vastvik3, setVastvik3] = useState("");
  const [wu5, setWu5] = useState("");
  const [vastvik21_1, setVastvik21_1] = useState("");
  const [v162, setV162] = useState("");
  const [w163, setW163] = useState("");
  const [vw5, setVw5] = useState("");
  const [vastvik6, setVastvik6] = useState("");
  const [uid, setUID] = useState("");
  const [sign, setSign] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    equipmentNumber: "",
    mecPar: "",
    commissioningDate: "",
    productionDate: "",
    u: "",
    v: "",
    w: "",
    vastvik2: "",
    uv3: "",
    vw3: "",
    wu3: "",
    vastvik4: "",
    uv5: "",
    vastvik7: "",
    vastvik8: "",
    vastvik9: "",
    vastvik10: "",
    vastvik11: "",
    vastvik12: "",
    vastvik13: "",
    vastvik14: "",
    vastvik15: "",
    u16: "",
    v16: "",
    w16: "",
    u16_1: "",
    de17: "",
    body18: "",
    de18: "",
    nde18: "",
    nde17: "",
    tarik19: "",
    mek19: "",
    tarik19_1: "",
    mek19_1: "",
    vastvik19_1: "",
    vastvik19_2: "",
    vastvik20: "",
    vastvik21: "",
    vastvik3: "",
    wu5: "",
    vastvik21_1: "",
    v162: "",
    w163: "",
    vw5: "",
    vastvik6: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      equipmentNumber,
      commissioningDate,
      mecPar,
      productionDate,
      u,
      v,
      w,
      vastvik2,
      uv3,
      vw3,
      wu3,
      vastvik4,
      uv5,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik12,
      vastvik13,
      vastvik14,
      vastvik15,
      u16,
      v16,
      w16,
      u16_1,
      de17,
      body18,
      de18,
      nde18,
      nde17,
      tarik19,
      mek19,
      tarik19_1,
      mek19_1,
      vastvik19_1,
      vastvik19_2,
      vastvik20,
      vastvik21,
      vastvik3,
      wu5,
      vastvik21_1,
      v162,
      w163,
      vw5,
      vastvik6,
      uid,
    } = data;
    try {
      const { data } = await axios.post("/submitForm/OCB", {
        equipmentNumber,
        commissioningDate,
        mecPar,
        productionDate,
        u,
        v,
        w,
        vastvik2,
        uv3,
        vw3,
        wu3,
        vastvik4,
        uv5,
        vastvik7,
        vastvik8,
        vastvik9,
        vastvik10,
        vastvik11,
        vastvik12,
        vastvik13,
        vastvik14,
        vastvik15,
        u16,
        v16,
        w16,
        u16_1,
        de17,
        body18,
        de18,
        nde18,
        nde17,
        tarik19,
        mek19,
        tarik19_1,
        mek19_1,
        vastvik19_1,
        vastvik19_2,
        vastvik20,
        vastvik21,
        vastvik3,
        wu5,
        vastvik21_1,
        v162,
        w163,
        vw5,
        vastvik6,
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

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                equipmentNumber={equipmentNumber}
                mecPar={mecPar}
                commissioningDate={commissioningDate}
                productionDate={productionDate}
              />

              <br></br>

              <Table
                u={u}
                v={v}
                w={w}
                vastvik2={vastvik2}
                uv3={uv3}
                vw3={vw3}
                wu3={wu3}
                vastvik4={vastvik4}
                uv5={uv5}
                vastvik7={vastvik7}
                vastvik8={vastvik8}
                vastvik9={vastvik9}
                vastvik10={vastvik10}
                vastvik11={vastvik11}
                vastvik12={vastvik12}
                vastvik13={vastvik13}
                vastvik14={vastvik14}
                vastvik15={vastvik15}
                u16={u16}
                v16={v16}
                w16={w16}
                u16_1={u16_1}
                de17={de17}
                body18={body18}
                de18={de18}
                nde18={nde18}
                nde17={nde17}
                tarik19={tarik19}
                mek19={mek19}
                tarik19_1={tarik19_1}
                mek19_1={mek19_1}
                vastvik19_1={vastvik19_1}
                vastvik19_2={vastvik19_2}
                vastvik20={vastvik20}
                vastvik21={vastvik21}
                vastvik3={vastvik3}
                wu5={wu5}
                vastvik21_1={vastvik21_1}
                v162={v162}
                w163={w163}
                vw5={vw5}
                vastvik6={vastvik6}
              />

              <Footer sign={sign} uid={uid} />

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
                        चेकशीट ओसीबी के लिए(CHECK SHEET FOR OCB)
                      </p>
                    </u>
                  </h1>
                </header>
              </div>

              <section className="container grid justify-center">
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
                          setEquipmentNumber(e.target.value); // Make sure to have a state variable and setter for equipmentNumber
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
                        value={data.mecPar}
                        onChange={(e) => {
                          setData({ ...data, mecPar: e.target.value });
                          setmecPar(e.target.value); // Make sure to have a state variable and setter for mecPar
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
                          पुर्व परिक्षण a) IR व्हैल्यु 500 V मेगरसे
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            10 मेगा ओह्म(कम से कम)
                          </div>
                        </td>
                        <td>
                          <div className="row-sm-3">
                            <div className="d-flex flex-row align-items-center">
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-U"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      U:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-U"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="U"
                                    aria-label="U"
                                    value={data.u}
                                    onChange={(e) => {
                                      setData({ ...data, u: e.target.value });
                                      setU(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-V"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      V:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-V"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="V"
                                    aria-label="V"
                                    value={data.v}
                                    onChange={(e) => {
                                      setData({ ...data, v: e.target.value });
                                      setV(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <span className="whitespace-pre"> </span>
                              <div className="row-sm-2">
                                <div className="flex items-center justify-center">
                                  <label
                                    htmlFor="वाईंडींग-W"
                                    className="col-form-label custom-label"
                                  >
                                    <span style={{ whiteSpace: "pre" }}>
                                      W:{" "}
                                    </span>
                                  </label>
                                  <input
                                    id="वाईंडींग-W"
                                    type="text"
                                    className="placeholder-center text-center form-control border border-gray-300 rounded-md p-2 custom-input small-input"
                                    placeholder="W"
                                    aria-label="W"
                                    value={data.w}
                                    onChange={(e) => {
                                      setData({ ...data, w: e.target.value });
                                      setW(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
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
                          सफाई,बेकींग,वार्निशिंग,बेकींग (एस.एम.आई.86 अनुसार)
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
                              value={data.vastvik2}
                              onChange={(e) => {
                                setData({ ...data, vastvik2: e.target.value });
                                setVastvik2(e.target.value);
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
                              value={data.vastvik3}
                              onChange={(e) => {
                                setData({ ...data, vastvik3: e.target.value });
                                setVastvik3(e.target.value);
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
                                    value={data.uv3}
                                    onChange={(e) => {
                                      setData({ ...data, uv3: e.target.value });
                                      setUv3(e.target.value);
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
                                    value={data.vw3}
                                    onChange={(e) => {
                                      setData({ ...data, vw3: e.target.value });
                                      setVw3(e.target.value);
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
                                    value={data.wu3}
                                    onChange={(e) => {
                                      setData({ ...data, wu3: e.target.value });
                                      setWu3(e.target.value);
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
                              id="लीड"
                              type="text"
                              className="form-control border border-gray-300 text-center rounded-md p-2 custom-input placeholder-center"
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
                          इम्पीलर की डीपीटी
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कोई क्रॅक नही
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
                          डायनॅमिक बॅलन्सींग रोटर इमपेलर सेट (एस.एम.आई.199
                          अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            Max residual mass Impeller side -2.2gm Rotor side-
                            3.5gm
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
                          स्टेटर बॉडी मे एंड शील्ड के थ्रेड कंडीशन
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            सामान्य
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
                          बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            60.002 से 60.015 मी.मी.
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
                            बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE)
                            (एस.एम.आई.16अनुसार) <br></br>(for Other make Except
                            CGL)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            60.002 से 60.015 मी.मी.
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
                              value={data.vastvik11}
                              onChange={(e) => {
                                setData({ ...data, vastvik11: e.target.value });
                                setVastvik11(e.target.value);
                              }}
                            ></input>
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
                          एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE)
                          (एस.एम.आई.16अनुसार)
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            129.993 से 130.018 मी.मी.
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
                          >
                            एंड कव्हर्स बोअर डाया नॉन ड्राईव्हींग एंड (NDE)
                            (एस.एम.आई.16अनुसार)
                          </label>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            129.993 से 130.018 मी.मी.
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
                          >
                            लीड,लग,टर्मीनल ब्लॉक पर कोई कार्य किया
                          </label>
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
                            <label
                              htmlFor="करंटa"
                              className="form-label custom-label"
                            >
                              एसेम्बली के बाद IR व्हॅल्यु
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            कम से कम 10 MΩ
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
                              value={data.vastvik15}
                              onChange={(e) => {
                                setData({ ...data, vastvik15: e.target.value });
                                setVastvik15(e.target.value);
                              }}
                            ></input>
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
                            >
                              करंट (U-V-W)लाइट रन टेस्ट
                            </label>
                            <br></br>
                            <br></br>
                            <label
                              htmlFor="SPMb"
                              className="form-label custom-label"
                            ></label>
                            करंट (U-V-W)लोड रन टेस्ट
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            18 Amp Max
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex items-center justify-center">
                            42 Amp Max
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
                                    value={data.u16}
                                    onChange={(e) => {
                                      setData({ ...data, u16: e.target.value });
                                      setU16(e.target.value);
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
                                    value={data.v16}
                                    onChange={(e) => {
                                      setData({ ...data, v16: e.target.value });
                                      setV16(e.target.value);
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
                                    value={data.w16}
                                    onChange={(e) => {
                                      setData({ ...data, w16: e.target.value });
                                      setW16(e.target.value);
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
                                    value={data.u16_1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        u16_1: e.target.value,
                                      });
                                      setU16_1(e.target.value);
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
                                    value={data.v162}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        v162: e.target.value,
                                      });
                                      setV162(e.target.value);
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
                                    value={data.w163}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        w163: e.target.value,
                                      });
                                      setW163(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
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
                            SPM वाईब्रेशन मीटर रिडींग (एस.एम.आई.58 अनुसार)
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            हरा झोन 3.5 mm/sec (Max)
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
                                    value={data.de17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        de17: e.target.value,
                                      });
                                      setDe17(e.target.value);
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
                                    value={data.nde17}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        nde17: e.target.value,
                                      });
                                      setNde17(e.target.value);
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
                        <th scope="row">18</th>
                        <td>
                          <label
                            htmlFor="नये"
                            className="form-label custom-label"
                          ></label>
                          रन टेस्ट, तापमान बढना DE/NDE.BODY 30 Min
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
                                    value={data.de18}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        de18: e.target.value,
                                      });
                                      setDe18(e.target.value);
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
                                    value={data.body18}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        body18: e.target.value,
                                      });
                                      setBody18(e.target.value);
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
                                    value={data.nde18}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        nde18: e.target.value,
                                      });
                                      setNde18(e.target.value);
                                    }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th rowSpan="5">19</th>
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
                        <td>a) DE Side बिअरिंग 6312/C3- (PL 29030109)</td>
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
                                value={data.tarik19}
                                onChange={(e) => {
                                  setData({ ...data, tarik19: e.target.value });
                                  setTarik19(e.target.value);
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
                                value={data.mek19}
                                onChange={(e) => {
                                  setData({ ...data, mek19: e.target.value });
                                  setMek19(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>b) NDE Side बिअरिंग 6312/C3- (PL. 29030109)</td>
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
                                value={data.tarik19_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    tarik19_1: e.target.value,
                                  });
                                  setTarik19_1(e.target.value);
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
                                value={data.mek19_1}
                                onChange={(e) => {
                                  setData({ ...data, mek19_1: e.target.value });
                                  setMek19_1(e.target.value);
                                }}
                              ></input>
                            </div>

                            <span className="whitespace-pre"> </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>c) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
                        <td>
                          <div className="flex items-center justify-center">
                            लोकल आर ए पी
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
                              value={data.vastvik19_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik19_1: e.target.value,
                                });
                                setVastvik19_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>d) रबर ग्रोमेट</td>
                        <td>
                          <div className="flex items-center justify-center">
                            बदला / नही बदला
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
                              value={data.vastvik19_2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik19_2: e.target.value,
                                });
                                setVastvik19_2(e.target.value);
                              }}
                            ></input>
                          </div>{" "}
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">20</th>
                        <td>
                          <label
                            htmlFor="लीड"
                            className="form-label custom-label"
                          >
                            नये पुर्जे एवं मटेरियल
                          </label>
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            यदि कोई हो
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
                              value={data.vastvik20}
                              onChange={(e) => {
                                setData({ ...data, vastvik20: e.target.value });
                                setVastvik20(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">21</th>
                        <td>
                          <label
                            htmlFor="इम्पेलर"
                            className="form-label custom-label"
                          ></label>
                          इम्पेलर का मेक एवं निर्मिती तिथी
                        </td>
                        <td>
                          <div className="flex items-center justify-center">
                            <input
                              id="इम्पेलरb"
                              type="text"
                              className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center text-center"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.vastvik21}
                              onChange={(e) => {
                                setData({ ...data, vastvik21: e.target.value });
                                setVastvik21(e.target.value);
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
                              value={data.vastvik21_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  vastvik21_1: e.target.value,
                                });
                                setVastvik21_1(e.target.value);
                              }}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
              </section>
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

export default AppOCB;
