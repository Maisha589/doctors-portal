import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from "./Pages/Login/Login";
import SignUp from './Pages/Login/SignUp';
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='/dashboard/review' element={<MyReview></MyReview>}></Route>
          <Route path='/dashboard/history' element={<MyHistory></MyHistory>}></Route>
          <Route path='/dashboard/users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
