import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppliedPage from "./components/appliedpage/AppliedPage";
import HomePage from "./components/homepage/HomePage";
import Main from "./components/main/Main";
import NotificationsPage from "./components/notificationspage/NotificationsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="appliedPage" element={<AppliedPage />} />
        <Route path="notificationPage" element={<NotificationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
