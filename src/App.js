import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import User from './Components/GetUser/User';
import AddUser from './Components/AddUser/AddUser';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}>Home Page</Route>
        <Route path="/add" element={<AddUser />}>User Add Page</Route>
        <Route path="/edit/:id" element={<UpdateUser/>}>Update User Page</Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
