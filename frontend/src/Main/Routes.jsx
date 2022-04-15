import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Componetes/Home";
import UseCrud from "../Componetes/UserCrud";

export default  props => 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UseCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
