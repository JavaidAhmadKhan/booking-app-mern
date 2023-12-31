import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { UserContextProvider } from "./context/UserContext";
import Navbar from "./pages/IndexPage";
import Login from "./pages/login";
import Layout from "./Layout";
import Register from "./pages/register";
import Profile from "./pages/account";
import PlacesForm from "./pages/places-form";
import PlacesPage from "./pages/places-page";
import Place from "./pages/place";
import Bookings from "./pages/bookings";
import Booking from "./pages/booking";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/" element={<Profile />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/account/bookings" element={<Bookings />} />
          <Route path="/account/bookings/:id" element={<Booking />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
