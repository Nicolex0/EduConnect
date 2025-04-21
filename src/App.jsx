import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import CoursesPage from './components/CoursesPage';
// import AccountPage from './components/Account'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />       {/* Home page route */}
        <Route path="/about" element={<AboutPage />} />  {/* About page route */}
        <Route path="/courses" element={<CoursesPage />} /> 
        {/* <Route path="/account" element={<AccountPage />} />   */}
      </Routes>
    </Router>
  );
}

export default App;
