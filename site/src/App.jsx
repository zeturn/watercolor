import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Components from './pages/Components'
import ComponentDetail from './pages/ComponentDetail'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Navigate to="/docs/intro" replace />} />
          <Route path="/docs/:sectionId" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:id" element={<ComponentDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
