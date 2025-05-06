import { Routes, Route } from 'react-router'

// Global components
import Navbar from './components/Navbar/Navbar'

// Page component
import ActivityIndex from './components/ActivityIndex/ActivityIndex'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/activities" element={<ActivityIndex />} />
      </Routes>
    </>
  )
}

export default App