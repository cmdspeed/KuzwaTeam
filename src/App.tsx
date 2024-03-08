import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./pages/MainPage/MainPage"));
const SharedLayout = lazy(
  () => import("./components/SharedLayout/SharedLayout")
);

function App() {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/shop" element={<Main />} />
          <Route path="/contacts" element={<Main />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
