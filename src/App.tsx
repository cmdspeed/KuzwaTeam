import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Main = lazy(() => import("./pages/MainPage/MainPage"));

function App() {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Main />} />
        <Route path="/contacts" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;
