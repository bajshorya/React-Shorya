//suspense api, asynchronus component/data fetching
import React, { Suspense } from "react"; // Import React
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
const Dashboard = React.lazy(() => import("./components/Dash"));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Appbar />

          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={"loading..."}>
                  <HomeScreen />
                </Suspense>
              }
            />
            <Route
              path="/dash"
              element={
                <Suspense fallback={"loading..."}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
      <button
        onClick={() => {
          navigate("/dash");
        }}
      >
        dash
      </button>
      {/* //not the correct way to do client side rendering */}
    </div>
  );
}

export default App;
