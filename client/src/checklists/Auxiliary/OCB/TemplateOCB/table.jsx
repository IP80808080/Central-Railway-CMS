import PropTypes from "prop-types";
export default function Table({
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

  mek19_1,
  vastvik19_1,
  vastvik19_2,
  vastvik20,
  vastvik6,
  vastvik21,
  vastvik3,
  wu5,
  vastvik21_1,
  v162,
  w163,
  vastvik8,
  tarik19_1,
  vw5,
}) {
  return (
    <>
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
                        U: {u}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        V: {v}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        W: {w}
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
                <div className="flex items-center justify-center">किया</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik2}
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
                  {vastvik3}
                </div>
              </td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {uv3}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {vw3}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {wu3}
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
                <div className="flex items-center justify-center">नार्मल</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik4}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <label htmlFor="" className="form-label custom-label"></label>
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
                          <span style={{ whiteSpace: "pre" }}>UV: </span>
                        </label>
                        {uv5}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="वाईंडींग-VW"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>VW: </span>
                        </label>
                        {vw5}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="वाईंडींग-WU"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>WU: </span>
                        </label>
                        {wu5}
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
                <div className="flex items-center justify-center">नार्मल</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik6}
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
                  {vastvik7}
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
                डायनॅमिक बॅलन्सींग रोटर इमपेलर सेट (एस.एम.आई.199 अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Max residual mass Impeller side -2.2gm Rotor side- 3.5gm
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik8}
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
                <div className="flex items-center justify-center">सामान्य</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik9}
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
                बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  60.002 से 60.015 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik10}
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
                  बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE) (एस.एम.आई.16अनुसार){" "}
                  <br></br>(for Other make Except CGL)
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  60.002 से 60.015 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik11}
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
                एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  129.993 से 130.018 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik12}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>
                <label htmlFor="लीड" className="form-label custom-label">
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
                  {vastvik13}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>
                <label htmlFor="एसेम्बली" className="form-label custom-label">
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
                  {vastvik14}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <br></br>15
              </th>
              <td>
                <div className="row-sm-2">
                  <label htmlFor="करंटa" className="form-label custom-label">
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
                  {vastvik15}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>
                <div className="row-sm-2">
                  <label htmlFor="SPMa" className="form-label custom-label">
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
                        {u16}
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
                        {v16}
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
                        {w16}
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
                        {u16_1}
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
                        {v162}
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
                        {w163}
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
                          <span style={{ whiteSpace: "pre" }}>DE: </span>
                        </label>
                        {de17}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="SPMb"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>NDE: </span>
                        </label>
                        {nde17}
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
                          <span style={{ whiteSpace: "pre" }}>DE: </span>
                        </label>
                        {de18}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="रन-Body"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>BODY: </span>
                        </label>
                        {body18}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="रन-NDE"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>NDE: </span>
                        </label>
                        {nde18}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th rowSpan="5">19</th>
              <td>
                <label htmlFor="" className="col-form-label custom-label">
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
                      <span className="whitespace-pre">तारीख: </span>
                      {new Date(tarik19).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                    </label>

                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18a2"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">Make: </span>
                      {mek19}{" "}
                    </label>
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
                      <span className="whitespace-pre">तारीख: </span>
                      {new Date(tarik19_1).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                    </label>

                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18b2"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">Make: </span>
                      {mek19_1}{" "}
                    </label>
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
                  {vastvik19_1}
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
                  {vastvik19_2}
                </div>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">20</th>
              <td>
                <label htmlFor="लीड" className="form-label custom-label">
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
                  {vastvik20}
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
                  {vastvik21}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik21_1}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

Table.propTypes = {
  u: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  formatDateString: PropTypes.func.isRequired,
  vastvik2: PropTypes.string.isRequired,
  uv3: PropTypes.string.isRequired,
  wu3: PropTypes.string.isRequired,
  vastvik4: PropTypes.string.isRequired,
  uv5: PropTypes.string.isRequired,
  vastvik7: PropTypes.string.isRequired,
  vastvik8: PropTypes.string.isRequired,
  vastvik9: PropTypes.string.isRequired,
  vastvik10: PropTypes.string.isRequired,
  vastvik11: PropTypes.string.isRequired,
  vastvik12: PropTypes.string.isRequired,
  vastvik13: PropTypes.string.isRequired,
  vastvik14: PropTypes.string.isRequired,
  vastvik15: PropTypes.string.isRequired,
  u16: PropTypes.string.isRequired,
  v16: PropTypes.string.isRequired,
  w16: PropTypes.string.isRequired,
  u16_1: PropTypes.string.isRequired,
  de17: PropTypes.string.isRequired,
  body18: PropTypes.string.isRequired,
  de18: PropTypes.string.isRequired,
  nde18: PropTypes.string.isRequired,
  nde17: PropTypes.string.isRequired,
  tarik19: PropTypes.string.isRequired,
  mek19: PropTypes.string.isRequired,

  mek19_1: PropTypes.string.isRequired,
  vastvik19_1: PropTypes.string.isRequired,
  vastvik19_2: PropTypes.string.isRequired,
  vastvik20: PropTypes.string.isRequired,
  vastvik6: PropTypes.string.isRequired,
  vastvik21: PropTypes.string.isRequired,
  vastvik3: PropTypes.string.isRequired,
  wu5: PropTypes.string.isRequired,
  vastvik21_1: PropTypes.string.isRequired,
  v162: PropTypes.string.isRequired,
  w163: PropTypes.string.isRequired,

  tarik19_1: PropTypes.string.isRequired,
  vw5: PropTypes.string.isRequired,
  vw3: PropTypes.string.isRequired,
};
