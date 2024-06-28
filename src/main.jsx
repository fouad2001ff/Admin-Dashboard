import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./components/pages/1-dashboard/Dashboard";
import Team from "./components/pages/2-team/Team";
import Contact from "./components/pages/3-contacts/Contact";
import Invoices from "./components/pages/4-invoices/Invoices";
import Form from "./components/pages/5-form/Form";
import Calendar from "./components/pages/6-calendar/Calendar";
import Faq from "./components/pages/7-faq/Faq";
import Bar from "./components/pages/8-bar chart/BarChart";
import LineChart from "./components/pages/10-LineChart/LineChart";
import GeographyChart from "./components/pages/11-geography/GeographyChart";
import PieChart from "./components/pages/9-pie/PieChart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/Pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<GeographyChart />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
