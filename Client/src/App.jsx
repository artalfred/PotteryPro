import "./App.css";
import "./index.css";
import Navigation from "./Reusable/Nav";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Footer } from "./Reusable/Footer";
import About from "./Components/About";
import { Courses } from "./Components/Courses";
import { Events } from "./Components/Events";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";
import Register from "./Components/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import NotFound from "./Components/NotFound";
import Beginner from "./Components/Beginner";
import Advance from "./Components/Advance";
import Master from "./Components/Master";
import Form from "./Reusable/Form";
import Confirmation from "./Components/Confirmation";
import { ScrollRestoration } from "react-router-dom";

axios.defaults.baseURL = "https://potterypro.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navigation />
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/advance" element={<Advance />} />
          <Route path="/masters" element={<Master />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirmation" element={<Confirmation />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
