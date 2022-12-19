import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpAsStudent from "./pages/SignUpAsStudent";
import SignUpAsTeacher from "./pages/SignUpAsTeacher";
import LoginAsStudent from "./pages/LoginAsStudent";
import LoginAsTeacher from "./pages/LoginAsTeacher";
import DashboardTeacher from "./pages/DashboardTeacher";
import DashboardStudent from "./pages/DashboardStudent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/dashboardStudent" element={<DashboardStudent />} />
          <Route path="/dashboardTeacher" element={<DashboardTeacher />} />
          <Route path="/signupstudent" element={<SignUpAsStudent />} />
          <Route path="/signupteacher" element={<SignUpAsTeacher />} />{" "}
          <Route path="/signinstudent" element={<LoginAsStudent />} />
          <Route path="/signinteacher" element={<LoginAsTeacher />} />
          {/* <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />
          <Route
            path="/studentregistration"
            element={<StudentRegistration />}
          />
          <Route
            path="/teacherregistration"
            element={<TeacherRegistration />}
          />
          //after teacher login //
          <Route path="/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/attendencemarking" element={<AttendenceMarking />} /> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
