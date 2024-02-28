import PropTypes from "prop-types";

export default function Table({
  vastvik1,
  vastvik_18_2,
  de_17,
  Body,
  nde,
  manak_18,
  manak_18_2,
  manak_18_1,
  vastvik,

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

  uv15_1,
  vw15_1,
  wu15_1,
  de,
  nde_17,

  vastvik_18,
  tarik_18,
  tarik_18_1,
  tarik_18_2,
  vastvik19,
  manak20,
  vastvik20,
}) {
  return (
    <>
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
              <div className="flex items-center justify-center">{vastvik}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">2</div>
            </td>
            <td>सफाई ,बेकींग, वार्निशिंग, बेकींग (एस.एम.आई.86 अनुसार)‌</td>
            <td>किया</td>
            <td>
              <div className="flex items-center justify-center">{vastvik1}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">3</div>
            </td>
            <td>वाईंडींग रेजिस्टन्स (UV-VW-WU)</td>
            <td>{manak3}</td>
            <td>
              <div className="row-sm-3">
                <div className="d-flex flex-row align-items-center">
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>UV: {uv}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>VW: {vw}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>WU: {wu}</span>
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
              <div className="flex items-center justify-center">{vastvik4}</div>
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
                      <span style={{ whiteSpace: "pre" }}>UV: {uv5}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>VW: {vw5}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>WU: {wu5}</span>
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
              <div className="flex items-center justify-center">{vastvik6}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">7</div>
            </td>
            <td>रोटर का ग्रोव्हलर टेस्ट (एस.एम.आई.163)</td>
            <td>नार्मल</td>
            <td>
              <div className="flex items-center justify-center">{vastvik7}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">8</div>
            </td>
            <td>स्टेटर बॉडी मे एंड शील्ड बोल्ट के थ्रेड कंडीशन</td>
            <td>सामान्य</td>
            <td>
              <div className="flex items-center justify-center">{vastvik8}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">9</div>
            </td>
            <td>बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)</td>
            <td>40.002 से 40.013 मी.मी.</td>
            <td>
              <div className="flex items-center justify-center">{vastvik9}</div>
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
                {vastvik10}
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
                  {vastvik11}
                </div>
                <br></br>
                <br></br>
                <div className="flex items-center justify-center">
                  {vastvik11_1}
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
                {vastvik12}
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
                {vastvik13}
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
                {vastvik14}
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
                      <p> {uv15}</p>
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
                      <p> {uv15}</p>
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
                      <p> {vw15}</p>
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
                      <p> {uv15_1}</p>
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
                      <p> {vw15_1}</p>
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
                      <p> {wu15_1}</p>
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
                      <span style={{ whiteSpace: "pre" }}>DE: {de}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>NDE: {nde}</span>
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
                      <span style={{ whiteSpace: "pre" }}>DE: {de_17}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>BODY: {Body}</span>
                    </div>
                  </div>
                  <span className="whitespace-pre"> </span>
                  <div className="row-sm-2">
                    <div className="flex items-center justify-center">
                      <span style={{ whiteSpace: "pre" }}>NDE: {nde_17}</span>
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
              a) DE Side बिअरिंग 6208 / C3- (Covered in PL 85010297) सभी मेक के
              लिये, CGL छोड़कर
            </td>
            <td>बदली किया </td>
            <td>
              <div className="flex items-center justify-center">
                तारीख:
                {new Date(tarik_18).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
                <br></br>Make: {manak_18}
              </div>
            </td>
          </tr>
          <tr>
            <td>b) DE Side बिअरिंग 6308 / C3- CGL मेक मोटर के लिये</td>
            <td>बदली किया </td>
            <td>
              <div className="flex items-center justify-center">
                तारीख:
                {new Date(tarik_18_1).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
                <br></br>Make: {manak_18_1}
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
                {new Date(tarik_18_2).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
                <br></br>Make: {manak_18_2}
              </div>
            </td>
          </tr>
          <tr>
            <td>d) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
            <td>लोकल आर ए पी</td>
            <td>
              <div className="flex items-center justify-center">
                {vastvik_18}
              </div>
            </td>
          </tr>
          <tr>
            <td>e) रबर ग्रोमेट</td>
            <td>बदला / नही बदला </td>
            <td>
              <div className="flex items-center justify-center">
                {vastvik_18_2}
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
                {vastvik19}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center justify-center">20</div>
            </td>
            <td>इम्पेलर का मेक एवं निर्मिती दिनांक</td>
            <td>{manak20}</td>
            <td>
              <div className="flex items-center justify-center">
                {vastvik20}
              </div>
            </td>
          </tr>
        </table>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
Table.propTypes = {
  vastvik1: PropTypes.string.isRequired,
  vastvik_18_2: PropTypes.string.isRequired,
  de_17: PropTypes.string.isRequired,
  Body: PropTypes.string.isRequired,
  nde: PropTypes.string.isRequired,
  manak_18: PropTypes.string.isRequired,
  manak_18_2: PropTypes.string.isRequired,
  manak_18_1: PropTypes.string.isRequired,
  vastvik: PropTypes.string.isRequired,
  vasvik1: PropTypes.string.isRequired,
  manak3: PropTypes.string.isRequired,
  uv: PropTypes.string.isRequired,
  vw: PropTypes.string.isRequired,
  wu: PropTypes.string.isRequired,
  vastvik4: PropTypes.string.isRequired,
  uv5: PropTypes.string.isRequired,
  vw5: PropTypes.string.isRequired,
  wu5: PropTypes.string.isRequired,
  vastvik6: PropTypes.string.isRequired,
  vastvik7: PropTypes.string.isRequired,
  vastvik8: PropTypes.string.isRequired,
  vastvik9: PropTypes.string.isRequired,
  vastvik10: PropTypes.string.isRequired,
  vastvik11: PropTypes.string.isRequired,
  vastvik11_1: PropTypes.string.isRequired,
  vastvik12: PropTypes.string.isRequired,
  vastvik13: PropTypes.string.isRequired,
  vastvik14: PropTypes.string.isRequired,
  uv15: PropTypes.string.isRequired,
  vw15: PropTypes.string.isRequired,
  wu15: PropTypes.string.isRequired,
  uv15_1: PropTypes.string.isRequired,
  vw15_1: PropTypes.string.isRequired,
  wu15_1: PropTypes.string.isRequired,
  de: PropTypes.string.isRequired,
  nde_17: PropTypes.string.isRequired,
  manak18: PropTypes.string.isRequired,
  vastvik_18: PropTypes.string.isRequired,
  tarik_18: PropTypes.string.isRequired,
  tarik_18_1: PropTypes.string.isRequired,
  tarik_18_2: PropTypes.string.isRequired,
  vastvik19: PropTypes.string.isRequired,
  manak20: PropTypes.string.isRequired,
  vastvik20: PropTypes.string.isRequired,
};
