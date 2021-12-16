import './App.css';
import { Routes , Route } from 'react-router-dom'
import Add from './Components/Add';
import Update from './Components/Update';
import View from './Components/View';
import Home from './Components/Home';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Add />} />
        <Route path="/updateuser/:id" element={<Update />} />
        <Route path="/viewuser/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;


