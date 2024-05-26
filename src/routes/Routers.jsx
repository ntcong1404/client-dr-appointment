import { BrowserRouter } from "react-router-dom";
import { Protected, Public, Admin } from "../service/Autho";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Doctors from "../pages/Doctors/Doctors";
import Locations from "../pages/Locations/Locations";
import LocationsDetails from "../pages/Locations/LocationsDetails";
import AdminPage from "../pages/Admin";
import AdminUsers from "../components/AdminUsers/AdminUsers";
import AdminDoctors from "../components/AdminDoctors/AdminDoctors";
import AdminAppointment from "../components/AdminAppointment/AdminAppointment";
import AdminService from "../components/AdminServices/AdminServices";
import AdminProfile from "../components/AdminProfile/AdminProfile";
import Appointment from "../pages/Appointment";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/doctors"
          element={
            <Layout>
              <Doctors />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Public>
                <Signup />
              </Public>
            </Layout>
          }
        />
        <Route
          path="/location"
          element={
            <Layout>
              <Locations />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />

        <Route
          path="/appointment"
          element={
            <Layout>
              <Protected>
                <Appointment />
              </Protected>
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Protected>
                <Profile />
              </Protected>
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Admin>
              <AdminPage />
            </Admin>
          }
        />
        <Route
          path="/location/:id"
          element={
            <Layout>
              <LocationsDetails />
            </Layout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <Admin>
              <AdminPage>
                <AdminUsers />
              </AdminPage>
            </Admin>
          }
        />
        <Route
          path="/admin/doctors"
          element={
            <Admin>
              <AdminPage>
                <AdminDoctors />
              </AdminPage>
            </Admin>
          }
        />
        <Route
          path="/admin/appointments"
          element={
            <Admin>
              <AdminPage>
                <AdminAppointment />
              </AdminPage>
            </Admin>
          }
        />
        <Route
          path="/admin/services"
          element={
            <Admin>
              <AdminPage>
                <AdminService />
              </AdminPage>
            </Admin>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <Admin>
              <AdminPage>
                <AdminProfile />
              </AdminPage>
            </Admin>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
