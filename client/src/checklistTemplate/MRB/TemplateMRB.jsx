import { useEffect, useState } from "react";
import axios from "axios";
import "./mrbindex.css";
import { useParams } from "react-router-dom";
export default function TemplateMRB() {
  const [data, setData] = useState({});
  const { uid } = useParams();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/getMRBFormData/${uid}`);
        console.log("Response object:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, [uid]);

  return (
    <>
      <br></br>
      <div className="grid justify-center">
        <div className="text-center">
          <header>
            <h1 className="custom-font-size">
              <p className="custom-font-size-sm">
                विद्युत लोको शेड, भुसावल/मध्य रेल
              </p>
              <p className="custom-font-size">ELECTRIC LOCO SHED, BSL/C.R.</p>
              <u>
                <p className="custom-font-size-sm">
                  चेक शीट एम.आर.बी के लिए (CHECK SHEET FOR MRB)
                </p>
              </u>
            </h1>
          </header>
        </div>
        <br></br>
        <div className="container mt-5 px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>
                उपकरण नंबर: {data.equipmentNumber}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>मेक: {data.mek1}</span>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>कमिशनींग दिनांक: </span>
              {new Date(data.commissioningDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>
                मोटर नंबर: {data.motor_no}
              </span>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>मेक: {data.mek2}</span>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <span style={{ whiteSpace: "pre" }}>निर्मिती दिनांक: </span>
              {new Date(data.productionDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="table border-collapse min-w-full table-auto">
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
            <tr>
              <td>
                <div className="flex items-center justify-center">1</div>
              </td>
              <td>पुर्व परिक्षण a) IR व्हैल्यु 500 V मेगर से</td>
              <td>10 मेगा ओह्म (कम से कम)</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">2</div>
              </td>
              <td>सफाई ,बेकींग, वार्निशिंग, बेकींग (एस.एम.आई.86 अनुसार)‌</td>
              <td>किया</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik1}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">3</div>
              </td>
              <td>वाईंडींग रेजिस्टन्स (UV-VW-WU)</td>
              <td>{data.manak3}</td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>UV: {data.uv}</span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>VW: {data.vw}</span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>WU: {data.wu}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">4</div>
              </td>
              <td>सर्ज कम्पॅरिजन टेस्ट 3 के.वी. पर (एस.एम.आई.149)</td>
              <td>नार्मल</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik4}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">5</div>
              </td>
              <td>इंडक्टंस माप करें</td>
              <td>फेज से फेज के बीच अंतर 10% से ज्यादा नही</td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          UV: {data.uv5}
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          VW: {data.vw5}
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          WU: {data.wu5}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">6</div>
              </td>
              <td>सफाई ,बेकींग, वार्निशिंग, बेकींग (एस.एम.आई.86 अनुसार)</td>
              <td>किया</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik6}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">7</div>
              </td>
              <td>रोटर का ग्रोव्हलर टेस्ट (एस.एम.आई.163)</td>
              <td>नार्मल</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik7}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">8</div>
              </td>
              <td>स्टेटर बॉडी मे एंड शील्ड बोल्ट के थ्रेड कंडीशन</td>
              <td>सामान्य</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik8}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">9</div>
              </td>
              <td>
                बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
              </td>
              <td>40.002 से 40.013 मी.मी.</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik9}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">10</div>
              </td>
              <td>
                बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE) (एस.एम.आई.16अनुसार)
              </td>
              <td>40.002 से 40.013 मी.मी</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik10}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">11</div>
              </td>
              <td>
                <div className="row-sm-2">
                  एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार){" "}
                  <br></br>(for Other make Except CGL)
                  <br></br>
                  <br></br>
                  एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
                  (for CGL Make)
                </div>
              </td>
              <td>
                <br></br>79.994 से 80.013 मी.मी. <br></br>
                <br></br>89.994 to 90.013 मी.मी.<br></br>
              </td>
              <td>
                <div className="row-sm-2">
                  <div className="flex items-center justify-center">
                    {data.vastvik11}
                  </div>
                  <br></br>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {data.vastvik11_1}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">12</div>
              </td>
              <td>
                एंड कव्हर्स बोअर डाया नॉन ड्राईव्हींग एंड (NDE)
                (एस.एम.आई.16अनुसार)
              </td>
              <td>79.994 से 80.013 मी.मी.</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik12}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">13</div>
              </td>
              <td>लीड,लग,टर्मीनल ब्लॉक पर कोई कार्य किया</td>
              <td>कोई कार्य किया तो लिखे</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik13}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">14</div>
              </td>
              <td>एसेम्बली के बाद IR व्हॅल्यु</td>
              <td>कम से कम 10 MΩ</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik14}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <br></br>
                <div className="flex items-center justify-center">15</div>
              </td>
              <td>
                <div className="row-sm-2">
                  <br></br>
                  करंट (U-V-W)लाइट रन टेस्ट
                  <br></br>
                  <br></br>
                  करंट (U-V-W)लोड रन टेस्ट
                </div>
              </td>
              <td>
                <br></br>
                <br></br>
                3.5 Amp Max
                <br></br>
                <br></br>
                <br></br>
                8.5 Amp Max<br></br>
                <br></br>
              </td>

              <td>
                <div className="grid items-center justify-center">
                  <div className="grid grid-row-2 gap-4 ml-5">
                    <div className="flex items-center space-x-4">
                      <div className="row-span-1">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            U:
                          </div>
                        </label>
                        <p> {data.uv15}</p>
                      </div>

                      <div className="row-span-1">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            V:
                          </div>
                        </label>
                        <p> {data.uv15}</p>
                      </div>

                      <div className="row-span-1">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            W:
                          </div>
                        </label>
                        <p> {data.vw15}</p>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <div className="grid grid-row-2 gap-4 ml-5">
                    <div className="flex items-center space-x-4">
                      <div className="row-span-2">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            U:
                          </div>
                        </label>
                        <p> {data.uv15_1}</p>
                      </div>

                      <div className="row-span-2">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            V:
                          </div>
                        </label>
                        <p> {data.vw15_1}</p>
                      </div>

                      <div className="row-span-2">
                        <label
                          htmlFor=" "
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            W:
                          </div>
                        </label>
                        <p> {data.wu15_1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">16</div>
              </td>
              <td>
                <div className="row-sm-2">
                  SPM वाईब्रेशन मीटर रिडींग
                  <br></br>
                  <br></br>
                  (एस.एम.आई.58 अनुसार)
                </div>
              </td>
              <td>
                हरा झोन
                <br></br>
                <br></br>
                3.5 mm/sec (Max)
              </td>
              <td>
                <br></br>
                <div className="row-sm-2">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>DE: {data.de}</span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          NDE: {data.nde}
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center justify-center">17</div>
              </td>
              <td>
                <div className="row-sm-2">
                  रन टेस्ट, तापमान बढना
                  <br></br>
                  <br></br>
                  DE/NDE/BODY 30 Min
                </div>
              </td>
              <td>वातावरण से 35°C ज्यादा अधिकतम</td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          DE: {data.de_17}
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          BODY: {data.Body}
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <span style={{ whiteSpace: "pre" }}>
                          NDE: {data.nde_17}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="6">
                <div className="flex items-center justify-center">18</div>
              </td>
              <td>मस्ट चेंज आईटम</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                a) DE Side बिअरिंग 6208 / C3- (Covered in PL 85010297) सभी मेक
                के लिये, CGL छोड़कर
              </td>
              <td>बदली किया </td>
              <td>
                <div className="flex items-center justify-center">
                  तारीख:
                  {new Date(data.tarik_18).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                  <br></br>Make: {data.manak_18}
                </div>
              </td>
            </tr>
            <tr>
              <td>b) DE Side बिअरिंग 6308 / C3- CGL मेक मोटर के लिये</td>
              <td>बदली किया </td>
              <td>
                <div className="flex items-center justify-center">
                  तारीख:
                  {new Date(data.tarik_18_1).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                  <br></br>Make: {data.manak_18_1}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                c) NDE Side बिअरिंग 6208 / C3- सभी मेक के लिये (Covered in PL
                85010297)
              </td>
              <td>बदली किया </td>
              <td>
                <div className="flex items-center justify-center">
                  तारीख:
                  {new Date(data.tarik_18_2).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                  <br></br>Make: {data.manak_18_2}
                </div>
              </td>
            </tr>
            <tr>
              <td>d) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
              <td>लोकल आर ए पी</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik_18}
                </div>
              </td>
            </tr>
            <tr>
              <td>e) रबर ग्रोमेट</td>
              <td>बदला / नही बदला </td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik_18_2}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">19</div>
              </td>
              <td>नये पुर्जे एवं मटेरियल</td>
              <td>यदि कोई हो</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik19}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center justify-center">20</div>
              </td>
              <td>इम्पेलर का मेक एवं निर्मिती दिनांक</td>
              <td>{data.manak20}</td>
              <td>
                <div className="flex items-center justify-center">
                  {data.vastvik20}
                </div>
              </td>
            </tr>
          </table>
        </div>
        <br></br>
        <br></br>
        <footer>
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span style={{ whiteSpace: "pre" }}>
                  तकनिशियन का नाम एवं हस्ताक्षर:
                </span>
                <b />
              </div>

              <div className="flex items-center space-x-2">
                सुपरवाईजर का नाम एवं हस्ताक्षर:
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handlePrint}
              className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
            >
              Print
            </button>
          </div>
        </footer>
        <br></br>
      </div>
    </>
  );
}
