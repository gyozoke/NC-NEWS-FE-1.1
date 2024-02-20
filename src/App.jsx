import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticlesManager from "./components/ArticlesManager";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<ArticlesManager />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
