import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  const handleLogout = () => {
    axios.post("/logout").then(() => {
      setUser(null); // Reset user data to null on the frontend
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
