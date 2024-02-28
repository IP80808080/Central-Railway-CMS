/** import all components */
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Recovery from "./pages/Recovery.jsx";
import Reset from "./pages/Reset.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import OTP from "./pages/OTP.jsx";
import axios from "axios";
import Update from "./pages/Update.jsx";
import UserHistory from "./pages/UserHistory.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ModeratorDashboard from "./pages/ModeratorDashboard.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import sectionData from "./components/sectionData.jsx";
import Promotion from "./pages/Promotion.jsx";
import Reverted from "./pages/Reverted.jsx";
//historypage
import AdminHistory from "./pages/AdminHistory.jsx";
import ModeratorHistory from "./pages/ModeratorHistory.jsx";

//moderator view before approve
import TemplateOCB from "./checklistTemplate/OCB/TemplateOCB.jsx";
import TemplateMRB from "./checklistTemplate/MRB/TemplateMRB.jsx";
//AdminHistoryTemplate
import AdminHistoryTemplateOCB from "./checklistTemplate/OCB/AdminHistoryTemplateOCB.jsx";
import AdminHistoryTemplateMRB from "./checklistTemplate/MRB/AdminHistoryTemplateMRB.jsx";
//RevertedHistoryInputField
import RevertHistoryInputFieldMRB from "./checklists/Auxiliary/MRB/InputField/RevertHistoryInputFieldMRB.jsx";
import RevertHistoryInputFieldOCB from "./checklists/Auxiliary/OCB/InputField/RevertHistoryInputFieldOCB.jsx";

// Import checklist components dynamically
const ChecklistRouter = ({ section, checklistName }) => {
  const ChecklistComponent = lazy(() =>
    import(
      `./checklists/${section}/${checklistName}/InputField/App${checklistName}.jsx`
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChecklistComponent />
    </Suspense>
  );
};

/**AxiosURL */
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Recovery />} />
        {/* Private */}

        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/admin-dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/moderator-dashboard/update"
          element={<PrivateRoute element={<Update />} />}
        />
        <Route
          path="/dashboard/reverted"
          element={<PrivateRoute element={<Reverted />} />}
        />
        <Route
          path="/dashboard/history"
          element={<PrivateRoute element={<UserHistory />} />}
        />
        <Route
          path="/admin-dashboard/history"
          element={<PrivateRoute element={<AdminHistory />} />}
        />
        <Route
          path="/moderator-dashboard/history"
          element={<PrivateRoute element={<ModeratorHistory />} />}
        />
        <Route
          path="/admin-dashboard/promotion"
          element={<PrivateRoute element={<Promotion />} />}
        />

        <Route
          path="/forgotpassword/otp"
          element={<PrivateRoute element={<OTP />} />}
        />
        <Route
          path="/forgotpassword/otp/reset"
          element={<PrivateRoute element={<Reset />} />}
        />

        {/* Admin and Moderator */}
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/moderator-dashboard"
          element={<PrivateRoute element={<ModeratorDashboard />} />}
        />
        {/* Moderator View Checklist */}
        <Route
          path="/moderator-ocb-dashboard/:uid"
          element={<PrivateRoute element={<TemplateOCB />} />}
        />

        <Route
          path="/moderator-mrb-dashboard/:uid"
          element={<PrivateRoute element={<TemplateMRB />} />}
        />

        {/* Admin History View */}
        <Route
          path="/view-ocb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateOCB />} />}
        />
        <Route
          path="/view-mrb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<AdminHistoryTemplateMRB />} />}
        />

        {/* Reverted History View */}
        <Route
          path="/view-revert-ocb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldOCB />} />}
        />
        <Route
          path="/view-revert-mrb-form/:submittedDate/:uid"
          element={<PrivateRoute element={<RevertHistoryInputFieldMRB />} />}
        />

        {/* Checklist Routes */}
        {Object.entries(sectionData).map(([section, checklists]) =>
          checklists.map((checklist) => (
            <Route
              key={checklist.checklistName}
              path={`/dashboard/${section}/${checklist.checklistName}`}
              element={
                <PrivateRoute
                  element={
                    <ChecklistRouter
                      section={section}
                      checklistName={checklist.checklistName}
                    />
                  }
                />
              }
            />
          ))
        )}

        {/* Else */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
