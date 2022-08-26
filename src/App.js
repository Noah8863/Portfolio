import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Contact from './components/Contact/index'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route exact path="/">

        </Route>

        <Route exact path="/contact" element={<Contact />}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
