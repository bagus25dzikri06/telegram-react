import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Chat from "../pages/Chat"

const router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Chat />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default router