import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Chat from './pages/chat/Chat';
import Community from './pages/community/Community';
import Home from './pages/home/Home';
import LandingPage from './pages/landing/LandingPage';
import Materials from './pages/material/Materials';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/pagenotfound/PageNotFoud';
import { MainLayout } from './components/MainLayout';

const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* 
    just the commented the auth check for development purposes ------ > donot remove the comments 
   */}
      {/* {isAuthenticated && (*/}
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="community" element={<Community />} />
        <Route path="materials" element={<Materials />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      {/* )} */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
