import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'
import Budget from './components/Budget'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const AppRouter: React.FC = () => {
  
  const token = undefined

  if (!token) {
    return (
      <Routes>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<div>Register</div>} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/auth/login" replace={true} />}
        />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<div />}>
        <Route path="dashboard" element={<div>dashboard</div>} />
        <Route path="transactions" element={<div>transactions</div>} />
        <Route path="budget" element={<div>budget</div>} />
        <Route path="*" element={<Navigate to="dashboard" replace={true} />} />
      </Route>
    </Routes>
  )
}

export default AppRouter