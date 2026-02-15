import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeContext'
import AppLayout from '@/components/layout/AppLayout'
import HomePage from '@/pages/Home/HomePage'
import DashboardPage from '@/pages/Dashboard/DashboardPage'
import LoginPage from '@/pages/Auth/LoginPage'
import RegisterPage from '@/pages/Auth/RegisterPage'
import ProxiesPage from '@/pages/Proxies/ProxiesPage'
import Spinner from '@/components/ui/Spinner'
import { ToastProvider } from './context/ToastContext'

function AppRoutes() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <AppLayout isAuthenticated={isAuthenticated}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/proxies"
          element={isAuthenticated ? <ProxiesPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </AppLayout>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <Router>
            <AppRoutes />
          </Router>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App