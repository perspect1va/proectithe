import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import RegionDetail from './pages/RegionDetail';
import PlaceDetail from './pages/PlaceDetail';
import Profile from './pages/Profile';
import './style.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.username === username && u.password === password);
    
    if (foundUser) {
      const userData = {
        id: foundUser.id,
        username: foundUser.username,
        displayName: foundUser.displayName
      };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const register = (username, password, displayName) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some(u => u.username === username)) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      password,
      displayName
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    const userData = {
      id: newUser.id,
      username: newUser.username,
      displayName: newUser.displayName
    };
    
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} logout={logout} />
        
        <main className="main-content">
          <Routes>
            <Route path="/login" element={
              user ? <Navigate to="/" /> : 
              <Login login={login} register={register} />
            } />
            <Route path="/" element={
              !user ? <Navigate to="/login" /> : <Main />
            } />
            <Route path="/region/:regionId" element={
              !user ? <Navigate to="/login" /> : <RegionDetail />
            } />
            <Route path="/place/:placeId" element={
              !user ? <Navigate to="/login" /> : <PlaceDetail />
            } />
            <Route path="/profile" element={
              !user ? <Navigate to="/login" /> : <Profile user={user} />
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Выносим Header в отдельный компонент для использования useNavigate
function Header({ user, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <h1>Беларусь Travel Diary</h1>
      {user && (
        <div className="user-menu">
          <span>Привет, {user.displayName}!</span>
          <button onClick={() => handleNavigation('/profile')}>
            Профиль
          </button>
          <button onClick={() => handleNavigation('/')}>
            Главная
          </button>
          <button onClick={handleLogout}>
            Выйти
          </button>
        </div>
      )}
    </header>
  );
}

export default App;