import { Routes, Route } from 'react-router'

// Global components
import Navbar from './components/Navbar/Navbar'

// Page component
import ActivityIndex from './components/ActivityIndex/ActivityIndex'
import ActivityShow from './components/ActivityShow/ActivityShow'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/activities" element={<ActivityIndex />} />
        <Route path="/activities/:activityId" element={<ActivityShow />} />
      </Routes>
    </>
  )
}

export default App