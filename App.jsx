import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import RegionDetail from './pages/RegionDetail';
import PlaceDetail from './pages/PlaceDetail';
import Profile from './pages/Profile';
import './style.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Ошибка при чтении пользователя:', error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  const login = (username, password) => {
    try {
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
    } catch (error) {
      console.error('Ошибка при входе:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const register = (username, password, displayName) => {
    try {
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
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      return false;
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} logout={logout} />
        
        <main className="main-content">
          <ScrollToTop />
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

function Header({ user, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div 
          className="logo" 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-icon">BEL</div>
          <h1>Беларусь Travel Diary</h1>
        </div>
        
        {user && (
          <div className="user-menu">
            <div className="user-greeting">
              <span className="user-avatar-mini">
                {user.displayName?.charAt(0) || 'U'}
              </span>
              <span className="user-name">Привет, {user.displayName}</span>
            </div>
            
            <div className="nav-buttons">
              <button 
                className="nav-btn"
                onClick={() => navigate('/')}
                title="Главная"
              >
                Главная
              </button>
              
              <button 
                className="nav-btn"
                onClick={() => navigate('/profile')}
                title="Профиль"
              >
                Профиль
              </button>
              
              <button 
                className="nav-btn logout-btn"
                onClick={handleLogout}
                title="Выйти"
              >
                Выйти
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default App;
