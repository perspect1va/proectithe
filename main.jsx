import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

// Инициализация начальных пользователей
const initializeUsers = () => {
  const existingUsers = localStorage.getItem('users');
  if (!existingUsers) {
    const initialUsers = [
      {
        id: '1',
        username: 'user1',
        password: 'password123',
        displayName: 'Иван Иванов'
      },
      {
        id: '2',
        username: 'admin',
        password: 'admin123',
        displayName: 'Администратор'
      }
    ];
    localStorage.setItem('users', JSON.stringify(initialUsers));
  }
};

// Вызываем инициализацию
initializeUsers();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)