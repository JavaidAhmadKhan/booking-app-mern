import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { UserContextProvider } from "./context/UserContext";
import Navbar from "./pages/IndexPage";
import "./App.css";
import Login from "./pages/login";
import Layout from "./Layout";
import Register from "./pages/register";
import Profile from "./pages/account";
import PlacesForm from "./pages/places-form";
import PlacesPage from "./pages/places-page";
import Place from "./pages/place";

axios.defaults.baseURL = "http://localhost:8080";
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
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
