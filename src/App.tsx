import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import Charts from './components/Charts';
import Maps from './components/Maps';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </Router>
  );
}

export default App;
