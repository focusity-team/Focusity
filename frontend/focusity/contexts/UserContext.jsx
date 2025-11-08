import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    console.log("Login con", email, password);
  }

  async function register(email, password) {
    console.log("Register con", email, password);
  }

  async function logout() {
    console.log("Logout");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}