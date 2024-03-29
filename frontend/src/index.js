import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//---- For original bootstrap styles uncomment this line below ---///
// import 'bootstrap/dist/css/bootstrap.min.css'

//---- For original bootstrap styles comment the 2 next lines below ---///
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

//------------React-router-dom-------------------------------------------///
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path='/product/:id'  element= {<ProductScreen/>}/>
    </Route>
  )
);

//------------React-router-dom end-------------------------------------------///

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> // Before React-router-dom*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
