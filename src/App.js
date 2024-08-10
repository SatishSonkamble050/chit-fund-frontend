import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionForm from "./components/TransactionForm";
import BottomNavbar from "./components/BottomNavbar";
import UserPage from "./Pages/UserPage";
import ChitFundPage from "./Pages/ChitFundPage";
import AllChitList from "./Pages/AllChitList";
import ChitFundDetails from "./components/ChitFundDetails";
import MonthDetails from "./components/MonthDetails";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { AuthProvider } from "./components/auth/AuthContext";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div>
      
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tran" element={<TransactionForm />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/chit-funds" element={<ChitFundPage />} />
            <Route path="/all-chit" element={<AllChitList />} />
            <Route path="/chit-details" element={<ChitFundDetails />} />
            <Route path="/monthly-details" element={<MonthDetails />} />
          </Routes>
          <BottomNavbar />
        </Router>
       
      </AuthProvider>
    </div>
  );
}

export default App;
